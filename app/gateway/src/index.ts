import express from 'express';
import cors from 'cors';
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './openapi.json';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'gateway' });
});

// Swagger Documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define service URLs
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:4001';
const FINANCE_SERVICE_URL = process.env.FINANCE_SERVICE_URL || 'http://localhost:4002';
const PROPERTY_SERVICE_URL = process.env.PROPERTY_SERVICE_URL || 'http://localhost:4003';
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:4004';
const REPORTING_SERVICE_URL = process.env.REPORTING_SERVICE_URL || 'http://localhost:4005';

// Logging proxy target information
console.log(`Gateway routing initialized:`);
console.log(`- Auth: ${AUTH_SERVICE_URL}`);
console.log(`- Finance: ${FINANCE_SERVICE_URL}`);
console.log(`- Property: ${PROPERTY_SERVICE_URL}`);
console.log(`- AI: ${AI_SERVICE_URL}`);
console.log(`- Reporting: ${REPORTING_SERVICE_URL}`);

// Routes configuration
app.use('/api/auth', createProxyMiddleware({ target: AUTH_SERVICE_URL, changeOrigin: true }));
app.use('/api/finance', createProxyMiddleware({ target: FINANCE_SERVICE_URL, changeOrigin: true }));
app.use('/api/property', createProxyMiddleware({ target: PROPERTY_SERVICE_URL, changeOrigin: true }));
app.use('/api/ai', createProxyMiddleware({ target: AI_SERVICE_URL, changeOrigin: true }));
app.use('/api/reporting', createProxyMiddleware({ target: REPORTING_SERVICE_URL, changeOrigin: true }));

app.use('/api/users', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
