import { PrismaClient } from '../generated/client';
import { beforeEach, vi } from 'vitest';
import { mockDeep, mockReset, DeepMockProxy } from 'vitest-mock-extended';

export const prismaMock = mockDeep<PrismaClient>();

vi.mock('../utils/db', () => ({
  prisma: prismaMock,
}));

beforeEach(() => {
  mockReset(prismaMock);
});
