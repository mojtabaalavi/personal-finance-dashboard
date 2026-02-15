import { Router } from 'express';
import { getDashboardKpis, getIncomeExpenseTrend, getTaxSummary } from '../controllers/reportController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticate);

router.get('/dashboard-kpis', getDashboardKpis);
router.get('/income-expense-trend', getIncomeExpenseTrend);
router.get('/tax-summary', getTaxSummary);

export default router;
