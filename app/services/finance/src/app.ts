import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import accountRoutes from './routes/accountRoutes';
import transactionRoutes from './routes/transactionRoutes';
import importRoutes from './routes/importRoutes';
import parserConfigRoutes from './routes/parserConfigRoutes';
import * as swaggerDocument from './openapi.json';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Root redirect to Swagger docs
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/finance/accounts', accountRoutes);
app.use('/api/finance/transactions', transactionRoutes);
app.use('/api/finance/import', importRoutes);
app.use('/api/finance/parser-configs', parserConfigRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'finance-service' });
});

export default app;
