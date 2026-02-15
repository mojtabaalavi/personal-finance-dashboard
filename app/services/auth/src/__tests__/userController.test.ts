import { prismaMock } from './prismaMock';
import { getUsers, toggleLock, updatePermissions } from '../controllers/userController';
import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('User Controller', () => {
  let mockRequest: Partial<AuthRequest>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
  });

  describe('getUsers', () => {
    it('should return all users', async () => {
      const users = [
        { id: '1', email: 'a@a.com', role: 'ADMIN', isLocked: false, permissions: [], createdAt: new Date() },
      ];
      prismaMock.user.findMany.mockResolvedValue(users as any);

      await getUsers(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(users);
    });

    it('should return 500 if database fails', async () => {
      prismaMock.user.findMany.mockRejectedValue(new Error('DB Error'));

      await getUsers(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Failed to fetch users' });
    });
  });

  describe('toggleLock', () => {
    it('should toggle user lock status', async () => {
      const user = { id: '1', email: 'a@a.com', role: 'USER', isLocked: false, permissions: [] };
      mockRequest.params = { id: '1' };
      mockRequest.user = { id: 'admin-1' };

      prismaMock.user.findUnique.mockResolvedValue(user as any);
      prismaMock.userHistory.create.mockResolvedValue({} as any);
      prismaMock.user.update.mockResolvedValue({ ...user, isLocked: true } as any);

      await toggleLock(mockRequest as AuthRequest, mockResponse as Response);

      expect(prismaMock.user.update).toHaveBeenCalledWith(expect.objectContaining({
        data: { isLocked: true }
      }));
      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({ isLocked: true }));
    });

    it('should return 404 if user not found', async () => {
      mockRequest.params = { id: '99' };
      prismaMock.user.findUnique.mockResolvedValue(null);

      await toggleLock(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
    });
  });

  describe('updatePermissions', () => {
    it('should update user permissions and role', async () => {
      const user = { id: '1', email: 'a@a.com', role: 'USER', permissions: [] };
      mockRequest.params = { id: '1' };
      mockRequest.body = { permissions: ['READ'], role: 'ADMIN' };
      mockRequest.user = { id: 'admin-1' };

      prismaMock.user.findUnique.mockResolvedValue(user as any);
      prismaMock.userHistory.create.mockResolvedValue({} as any);
      prismaMock.user.update.mockResolvedValue({ ...user, role: 'ADMIN', permissions: ['READ'] } as any);

      await updatePermissions(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
        message: 'User updated'
      }));
    });
  });
});
