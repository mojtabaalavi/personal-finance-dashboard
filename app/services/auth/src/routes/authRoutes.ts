import { Router } from 'express';
import {
  register,
  login,
  me,
  verify2FA,
  verifyEmail,
  resendVerification,
} from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

// Registration & Email Verification
router.post('/register', register);
router.get('/verify-email', verifyEmail);
router.post('/resend-verification', resendVerification);

// Login & 2FA
router.post('/login', login);
router.post('/verify-2fa', verify2FA);

// User Info
router.get('/me', authenticate, me);

export default router;
