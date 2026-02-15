import { Router } from 'express';
import { getAgreements, createAgreement, matchRentTransactions } from '../controllers/rentalController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getAgreements);
router.post('/', authorize(['ADMIN']), createAgreement);
router.post('/match', authorize(['ADMIN']), matchRentTransactions);

export default router;
