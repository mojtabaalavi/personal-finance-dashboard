import { Router } from 'express';
import { getAssets, createAsset, updateAsset } from '../controllers/assetController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/', getAssets);
router.post('/', authorize(['ADMIN']), createAsset);
router.patch('/:id', authorize(['ADMIN']), updateAsset);

export default router;
