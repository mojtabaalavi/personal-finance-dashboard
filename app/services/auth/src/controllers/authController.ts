import { Request, Response } from 'express';
import { prisma } from '../utils/db';
import { generateToken } from '../utils/jwt';
import argon2 from 'argon2';
import { z } from 'zod';
import { emailService } from '../utils/emailService';
import {
  generate2FACode,
  generateEmailVerificationToken,
  get2FACodeExpiry,
  getEmailVerificationExpiry,
  isExpired,
} from '../utils/verification';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const verify2FASchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

const verifyEmailSchema = z.object({
  token: z.string(),
});

/**
 * Register a new user and send email verification
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const passwordHash = await argon2.hash(password);
    const verificationToken = generateEmailVerificationToken();
    const verificationExpiry = getEmailVerificationExpiry();

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: 'USER',
        emailVerified: false,
        emailVerificationToken: verificationToken,
        emailVerificationExpiry: verificationExpiry,
      },
    });

    // Send verification email
    try {
      await emailService.sendVerificationEmail(email, verificationToken);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      // Continue registration even if email fails
    }

    res.status(201).json({
      message: 'Registration successful. Please check your email to verify your account.',
      email: user.email,
      requiresVerification: true,
    });
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Registration failed' });
  }
};

/**
 * Verify email address with token
 */
export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = verifyEmailSchema.parse(req.query);

    const user = await prisma.user.findFirst({
      where: { emailVerificationToken: token },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid verification token' });
    }

    if (user.emailVerificationExpiry && isExpired(user.emailVerificationExpiry)) {
      return res.status(400).json({ error: 'Verification link has expired' });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpiry: null,
      },
    });

    res.json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    res.status(400).json({ error: 'Email verification failed' });
  }
};

/**
 * Resend verification email
 */
export const resendVerification = async (req: Request, res: Response) => {
  try {
    const { email } = z.object({ email: z.string().email() }).parse(req.body);

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      // Don't reveal if user exists
      return res.json({ message: 'If the email exists, a verification link has been sent.' });
    }

    if (user.emailVerified) {
      return res.status(400).json({ error: 'Email is already verified' });
    }

    const verificationToken = generateEmailVerificationToken();
    const verificationExpiry = getEmailVerificationExpiry();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerificationToken: verificationToken,
        emailVerificationExpiry: verificationExpiry,
      },
    });

    try {
      await emailService.sendVerificationEmail(email, verificationToken);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
    }

    res.json({ message: 'If the email exists, a verification link has been sent.' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to resend verification email' });
  }
};

/**
 * Step 1 of login: Validate credentials and send 2FA code
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const valid = await argon2.verify(user.passwordHash, password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if email is verified
    if (!user.emailVerified) {
      return res.status(403).json({
        error: 'Email not verified',
        message: 'Please verify your email before logging in.',
        requiresVerification: true,
      });
    }

    // Check if account is locked
    if (user.isLocked) {
      return res.status(403).json({ error: 'Account is locked. Please contact support.' });
    }

    // Generate and send 2FA code
    const twoFactorCode = generate2FACode();
    const twoFactorCodeExpiry = get2FACodeExpiry();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        twoFactorCode,
        twoFactorCodeExpiry,
      },
    });

    try {
      await emailService.send2FACode(email, twoFactorCode);
    } catch (emailError) {
      console.error('Failed to send 2FA code:', emailError);
      return res.status(500).json({ error: 'Failed to send verification code. Please try again.' });
    }

    res.json({
      message: 'Verification code sent to your email',
      requires2FA: true,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
};

/**
 * Step 2 of login: Verify 2FA code and issue JWT
 */
export const verify2FA = async (req: Request, res: Response) => {
  try {
    const { email, code } = verify2FASchema.parse(req.body);

    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid request' });
    }

    if (!user.twoFactorCode || !user.twoFactorCodeExpiry) {
      return res.status(400).json({ error: 'No verification code found. Please log in again.' });
    }

    if (isExpired(user.twoFactorCodeExpiry)) {
      return res.status(400).json({ error: 'Verification code has expired. Please log in again.' });
    }

    if (user.twoFactorCode !== code) {
      return res.status(401).json({ error: 'Invalid verification code' });
    }

    // Clear 2FA code after successful verification
    await prisma.user.update({
      where: { id: user.id },
      data: {
        twoFactorCode: null,
        twoFactorCodeExpiry: null,
      },
    });

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({ error: 'Verification failed' });
  }
};

export const me = async (req: any, res: Response) => {
  // req.user is set by middleware
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ user: { id: user.id, email: user.email, role: user.role } });
};
