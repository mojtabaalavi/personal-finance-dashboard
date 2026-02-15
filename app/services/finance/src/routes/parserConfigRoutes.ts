import { Router } from 'express';
import { getParserConfigs, createParserConfig, updateParserConfig, deleteParserConfig } from '../controllers/parserConfigController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

// Admin only routes
router.use(authenticate, authorize(['ADMIN']));

router.get('/', getParserConfigs);
router.post('/', createParserConfig);
router.patch('/:id', updateParserConfig);
router.delete('/:id', deleteParserConfig);

export default router;
