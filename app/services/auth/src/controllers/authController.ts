import { Request, Response } from 'express';
import { prisma } from '../utils/db';
import { generateToken } from '../utils/jwt';
import argon2 from 'argon2';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const passwordHash = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: 'USER', // Default
      },
    });

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    res.status(201).json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Registration failed' });
  }
};

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

    // CDC Update (Simulated or triggered) - In a real event sourcing system we'd emit an event here
    // For now we just update last login if we had a field for it, or just return token.

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
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
