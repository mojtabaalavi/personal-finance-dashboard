import { prismaMock } from './prismaMock';
import { getParserConfigs, createParserConfig, updateParserConfig, deleteParserConfig } from '../controllers/parserConfigController';
import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('Parser Config Controller', () => {
  let mockRequest: Partial<AuthRequest>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
  });

  describe('getParserConfigs', () => {
    it('should return all configs with bank account info', async () => {
      const configs = [
        { id: '1', name: 'ASB', bankName: 'ASB Bank', isActive: true, bankAccount: { name: 'Main', accountNumber: '123' } },
      ];
      prismaMock.parserConfig.findMany.mockResolvedValue(configs as any);

      await getParserConfigs(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(configs);
    });
  });

  describe('createParserConfig', () => {
    it('should create a new config successfully', async () => {
      const configData = { name: 'New Parser', bankName: 'Bank X', rules: { col: 1 } };
      mockRequest.body = configData;

      prismaMock.parserConfig.create.mockResolvedValue({ id: '2', ...configData, isActive: true } as any);

      await createParserConfig(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({ name: 'New Parser' }));
    });
  });

  describe('updateParserConfig', () => {
    it('should update an existing config', async () => {
      mockRequest.params = { id: '1' };
      mockRequest.body = { name: 'Updated Name' };

      prismaMock.parserConfig.update.mockResolvedValue({ id: '1', name: 'Updated Name' } as any);

      await updateParserConfig(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({ name: 'Updated Name' }));
    });
  });

  describe('deleteParserConfig', () => {
    it('should delete a config', async () => {
      mockRequest.params = { id: '1' };
      prismaMock.parserConfig.delete.mockResolvedValue({ id: '1' } as any);

      await deleteParserConfig(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Parser configuration deleted' });
    });
  });
});
