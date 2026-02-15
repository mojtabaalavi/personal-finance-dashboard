import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import path from 'path';
import { describe, it } from 'vitest';
import axios from 'axios';

// Mock Provider for Contract Testing
const provider = new PactV3({
  consumer: 'FinanceService',
  provider: 'AuthService',
  dir: path.resolve(process.cwd(), 'pacts'),
});

describe('Auth Service Contract', () => {
  it('users can get their profile', async () => {
    await provider.addInteraction({
      states: [{ description: 'User exists' }],
      uponReceiving: 'A request for profile',
      withRequest: {
        method: 'GET',
        path: '/api/me',
        headers: { Authorization: 'Bearer token' },
      },
      willRespondWith: {
        status: 200,
        body: {
          id: MatchersV3.uuid(),
          email: MatchersV3.string('user@example.com'),
        },
      },
    });

    await provider.executeTest(async (mockServer) => {
      const response = await axios.get(`${mockServer.url}/api/me`, {
        headers: { Authorization: 'Bearer token' },
      });
      console.log(response.data);
    });
  });
});
