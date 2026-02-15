import crypto from 'crypto';

/**
 * Generate a random 6-digit code for 2FA
 */
export function generate2FACode(): string {
  return crypto.randomInt(100000, 999999).toString();
}

/**
 * Generate a secure random token for email verification
 */
export function generateEmailVerificationToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Get expiry time for 2FA code (10 minutes from now)
 */
export function get2FACodeExpiry(): Date {
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 10);
  return expiry;
}

/**
 * Get expiry time for email verification token (24 hours from now)
 */
export function getEmailVerificationExpiry(): Date {
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + 24);
  return expiry;
}

/**
 * Check if a code/token has expired
 */
export function isExpired(expiry: Date | null): boolean {
  if (!expiry) return true;
  return new Date() > expiry;
}
