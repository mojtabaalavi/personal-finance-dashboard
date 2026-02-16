import express from 'express';
import cors from 'cors';
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './openapi.json';

dotenv.config();

const app = express();

// Configure CORS with explicit options
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Handle OPTIONS requests explicitly for CORS preflight
app.options('*', (req, res) => {
  console.log(`[Gateway] OPTIONS preflight for ${req.url}`);
  res.status(200).end();
});

// Root redirect to Swagger docs
app.get('/', (req, res) => {
  res.redirect('/api/docs');
});

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

// Routes configuration - use app.all to handle all HTTP methods
app.all('/api/auth/*', async (req, res) => {
  console.log(`[Gateway] *** AUTH ROUTE MATCHED *** Method: ${req.method}, URL: ${req.url}, Path: ${req.path}`);
  try {
    // Use req.url to include query parameters
    const targetUrl = `${AUTH_SERVICE_URL}${req.url}`;
    console.log(`[Gateway] Forwarding to: ${targetUrl}`);
    console.log(`[Gateway] Body:`, req.body);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { 'Authorization': req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    console.log(`[Gateway] Response status: ${response.status}`);
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error(`[Gateway] ERROR:`, error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Handle both /api/users and /api/users/* for user management
app.all(['/api/users', '/api/users/*'], async (req, res) => {
  try {
    // Use req.url to include query parameters
    const targetUrl = `${AUTH_SERVICE_URL}${req.url}`;
    console.log(`[Gateway] Forwarding to: ${targetUrl}`);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { 'Authorization': req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error(`[Gateway] Error:`, error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Finance Service Routes
app.all(['/api/finance', '/api/finance/*'], async (req, res) => {
  try {
    const targetUrl = `${FINANCE_SERVICE_URL}${req.url}`;
    console.log(`[Gateway] Forwarding to: ${targetUrl}`);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { 'Authorization': req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error(`[Gateway] Error:`, error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Property Service Routes
app.all(['/api/property', '/api/property/*'], async (req, res) => {
  try {
    const targetUrl = `${PROPERTY_SERVICE_URL}${req.url}`;
    console.log(`[Gateway] Forwarding to: ${targetUrl}`);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { 'Authorization': req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error(`[Gateway] Error:`, error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

// AI Service Routes
app.all(['/api/ai', '/api/ai/*'], async (req, res) => {
  try {
    const targetUrl = `${AI_SERVICE_URL}${req.url}`;
    console.log(`[Gateway] Forwarding to: ${targetUrl}`);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { 'Authorization': req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error(`[Gateway] Error:`, error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Reporting Service Routes
app.all(['/api/reporting', '/api/reporting/*'], async (req, res) => {
  try {
    const targetUrl = `${REPORTING_SERVICE_URL}${req.url}`;
    console.log(`[Gateway] Forwarding to: ${targetUrl}`);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization && { 'Authorization': req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    console.error(`[Gateway] Error:`, error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
