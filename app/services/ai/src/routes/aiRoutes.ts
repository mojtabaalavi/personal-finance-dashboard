import { Router } from 'express';
import { categorizeTransaction, chat } from '../controllers/aiController';

const router = Router();

router.post('/categorize', categorizeTransaction);
router.post('/chat', chat);

export default router;
