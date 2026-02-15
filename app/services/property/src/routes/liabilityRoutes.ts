import { Router } from 'express';
import { getLiabilities, createLiability, updateLiability } from '../controllers/liabilityController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getLiabilities);
router.post('/', authorize(['ADMIN']), createLiability);
router.patch('/:id', authorize(['ADMIN']), updateLiability);

export default router;
