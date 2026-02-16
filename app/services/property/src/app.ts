import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import assetRoutes from './routes/assetRoutes';
import liabilityRoutes from './routes/liabilityRoutes';
import rentalRoutes from './routes/rentalRoutes';
import * as swaggerDocument from './openapi.json';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Root redirect to Swagger docs
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/property/assets', assetRoutes);
app.use('/api/property/liabilities', liabilityRoutes);
app.use('/api/property/rental', rentalRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'property-service' });
});

export default app;
