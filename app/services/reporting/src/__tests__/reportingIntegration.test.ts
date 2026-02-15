import request from 'supertest';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import app from '../app';

import jwt from 'jsonwebtoken';

const mock = new MockAdapter(axios);

describe('Reporting Service Integration', () => {
  const JWT_SECRET = 'secret';
  process.env.JWT_SECRET = JWT_SECRET;
  const mockUser = { id: 'user-1', email: 'test@test.com', role: 'USER' };
  const mockToken = jwt.sign(mockUser, JWT_SECRET);
  const FINANCE_URL = 'http://localhost:4002';
  const PROPERTY_URL = 'http://localhost:4003';

  beforeEach(() => {
    mock.reset();
  });

  afterEach(() => {
    mock.restore();
  });

  it('GET /api/reporting/dashboard should aggregate data from multiple services', async () => {
    // Mock Finance Service
    mock.onGet(`${FINANCE_URL}/api/finance/transactions`).reply(200, [
      { id: 't1', amount: '1000', type: 'INCOME', date: new Date().toISOString() },
    ]);
    mock.onGet(`${FINANCE_URL}/api/finance/accounts`).reply(200, [
      { id: 'a1', balance: '5000' },
    ]);

    // Mock Property Service
    mock.onGet(`${PROPERTY_URL}/api/property/assets`).reply(200, [
      { id: 'p1', value: '200000', type: 'PROPERTY' },
    ]);
    mock.onGet(`${PROPERTY_URL}/api/property/liabilities`).reply(200, [
      { id: 'l1', amount: '50000' },
    ]);

    const response = await request(app)
      .get('/api/reporting/dashboard-kpis')
      .set('Authorization', `Bearer ${mockToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      monthlyIncome: 1000,
      netWorth: 155000, 
    }));
  });

  it('should return 401 if no token provided', async () => {
    const response = await request(app).get('/api/reporting/dashboard-kpis');
    expect(response.status).toBe(401);
  });

  it('should return 500 if an upstream service fails', async () => {
    mock.onGet(`${FINANCE_URL}/api/finance/transactions`).reply(500);

    const response = await request(app)
      .get('/api/reporting/dashboard-kpis')
      .set('Authorization', `Bearer ${mockToken}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Failed to aggregate KPI data');
  });
});
