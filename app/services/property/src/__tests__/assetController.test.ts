import { prismaMock } from './prismaMock';
import { getAssets, createAsset, updateAsset, deleteAsset } from '../controllers/assetController';
import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('Asset Controller', () => {
  let mockRequest: Partial<AuthRequest>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
  });

  describe('getAssets', () => {
    it('should return assets for a user', async () => {
      const assets = [{ id: '1', name: 'House', value: 500000, type: 'PROPERTY' }];
      mockRequest.user = { id: 'user-1', email: 'test@example.com', role: 'USER' };
      
      prismaMock.asset.findMany.mockResolvedValue(assets as any);

      await getAssets(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(assets);
    });
  });

  describe('createAsset', () => {
    it('should create a new asset', async () => {
      const assetData = { name: 'Tesla', value: 80000, type: 'VEHICLE' };
      mockRequest.body = assetData;
      mockRequest.user = { id: 'user-1', email: 'test@example.com', role: 'ADMIN' };

      prismaMock.asset.create.mockResolvedValue({ id: '2', ...assetData, userId: 'user-1' } as any);

      await createAsset(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({ name: 'Tesla' }));
    });
  });
});
