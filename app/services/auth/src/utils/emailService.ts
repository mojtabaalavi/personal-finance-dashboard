import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth?: {
    user: string;
    pass: string;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter;
  private fromEmail: string;

  constructor() {
    const emailConfig: EmailConfig = {
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '1025'),
      secure: process.env.SMTP_SECURE === 'true',
    };

    // Add authentication if credentials are provided
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      emailConfig.auth = {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      };
    }

    this.transporter = nodemailer.createTransport(emailConfig);
    this.fromEmail = process.env.EMAIL_FROM || 'noreply@personalfinance.com';
  }

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const verificationUrl = `${process.env.APP_URL || 'http://localhost:3000'}/verify-email?token=${token}`;

    const mailOptions = {
      from: this.fromEmail,
      to: email,
      subject: 'Verify Your Email - Personal Finance Dashboard',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E3A8C;">Welcome to Personal Finance Dashboard!</h2>
          <p>Thank you for registering. Please verify your email address by clicking the link below:</p>
          <a href="${verificationUrl}" 
             style="display: inline-block; padding: 12px 24px; margin: 20px 0; background-color: #4A5FD9; color: white; text-decoration: none; border-radius: 4px;">
            Verify Email Address
          </a>
          <p>Or copy and paste this link into your browser:</p>
          <p style="color: #666; word-break: break-all;">${verificationUrl}</p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This link will expire in 24 hours. If you didn't create an account, please ignore this email.
          </p>
        </div>
      `,
      text: `Welcome to Personal Finance Dashboard! Please verify your email by visiting: ${verificationUrl}`,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async send2FACode(email: string, code: string): Promise<void> {
    const mailOptions = {
      from: this.fromEmail,
      to: email,
      subject: 'Your Login Verification Code - Personal Finance Dashboard',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E3A8C;">Login Verification Code</h2>
          <p>Your verification code is:</p>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0; border-radius: 4px;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #2E3A8C;">${code}</span>
          </div>
          <p>Enter this code on the login page to complete your sign-in.</p>
          <p style="color: #d32f2f; font-weight: bold;">This code will expire in 10 minutes.</p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            If you didn't attempt to log in, please secure your account immediately.
          </p>
        </div>
      `,
      text: `Your login verification code is: ${code}. This code will expire in 10 minutes.`,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    const resetUrl = `${process.env.APP_URL || 'http://localhost:3000'}/reset-password?token=${token}`;

    const mailOptions = {
      from: this.fromEmail,
      to: email,
      subject: 'Password Reset Request - Personal Finance Dashboard',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E3A8C;">Password Reset Request</h2>
          <p>We received a request to reset your password. Click the link below to proceed:</p>
          <a href="${resetUrl}" 
             style="display: inline-block; padding: 12px 24px; margin: 20px 0; background-color: #4A5FD9; color: white; text-decoration: none; border-radius: 4px;">
            Reset Password
          </a>
          <p>Or copy and paste this link into your browser:</p>
          <p style="color: #666; word-break: break-all;">${resetUrl}</p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This link will expire in 1 hour. If you didn't request a password reset, please ignore this email.
          </p>
        </div>
      `,
      text: `Reset your password by visiting: ${resetUrl}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

export const emailService = new EmailService();
