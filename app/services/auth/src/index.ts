import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import { PrismaClient } from './generated/client';

import { prisma } from './utils/db';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'auth-service' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
