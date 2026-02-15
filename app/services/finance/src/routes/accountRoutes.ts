import { Router } from 'express';
import { getAccounts, createAccount, updateAccount, getAccountTypes } from '../controllers/accountController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/types', getAccountTypes);
router.get('/', getAccounts);
router.post('/', authorize(['ADMIN']), createAccount);
router.patch('/:id', authorize(['ADMIN']), updateAccount);

export default router;
