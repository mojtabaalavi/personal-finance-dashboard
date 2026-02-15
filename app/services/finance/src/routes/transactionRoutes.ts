import { Router } from 'express';
import { getTransactions, createTransaction, updateTransaction } from '../controllers/transactionController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getTransactions);
router.post('/', authorize(['ADMIN']), createTransaction);
router.patch('/:id', authorize(['ADMIN']), updateTransaction);

export default router;
