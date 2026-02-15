import { Router } from 'express';
import { getUsers, toggleLock, updatePermissions } from '../controllers/userController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

// All routes require ADMIN role
router.use(authenticate, authorize(['ADMIN']));

router.get('/', getUsers);
router.patch('/:id/lock', toggleLock);
router.patch('/:id/permissions', updatePermissions);

export default router;
