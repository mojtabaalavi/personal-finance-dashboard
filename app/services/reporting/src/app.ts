import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import reportRoutes from './routes/reportRoutes';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/reporting', reportRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'reporting-service' });
});

export default app;
