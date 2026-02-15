import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authenticate, authorize, AuthRequest } from '../middleware/authMiddleware';
import { Response, NextFunction } from 'express';
import * as jwtUtils from '../utils/jwt';

describe('Auth Middleware', () => {
  let mockRequest: Partial<AuthRequest>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = vi.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    nextFunction = vi.fn();
  });

  describe('authenticate', () => {
    it('should return 401 if no authorization header is present', () => {
      mockRequest.headers = {};
      authenticate(mockRequest as AuthRequest, mockResponse as Response, nextFunction);
      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
    });

    it('should return 401 if token is invalid', () => {
      mockRequest.headers = { authorization: 'Bearer invalid-token' };
      vi.spyOn(jwtUtils, 'verifyToken').mockReturnValue(null);
      
      authenticate(mockRequest as AuthRequest, mockResponse as Response, nextFunction);
      
      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Invalid token' });
    });

    it('should call next() and set req.user if token is valid', () => {
      const decodedToken = { id: '123', email: 'test@example.com', role: 'USER' };
      mockRequest.headers = { authorization: 'Bearer valid-token' };
      vi.spyOn(jwtUtils, 'verifyToken').mockReturnValue(decodedToken);
      
      authenticate(mockRequest as AuthRequest, mockResponse as Response, nextFunction);
      
      expect(mockRequest.user).toEqual(decodedToken);
      expect(nextFunction).toHaveBeenCalled();
    });
  });

  describe('authorize', () => {
    it('should return 403 if user is not present on request', () => {
      const middleware = authorize(['ADMIN']);
      mockRequest.user = undefined;
      middleware(mockRequest as AuthRequest, mockResponse as Response, nextFunction);
      
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Forbidden' });
    });

    it('should return 403 if user role is not allowed', () => {
      const middleware = authorize(['ADMIN']);
      mockRequest.user = { role: 'USER' };
      
      middleware(mockRequest as AuthRequest, mockResponse as Response, nextFunction);
      
      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Forbidden' });
    });

    it('should call next() if user role is allowed', () => {
      const middleware = authorize(['ADMIN', 'USER']);
      mockRequest.user = { role: 'USER' };
      
      middleware(mockRequest as AuthRequest, mockResponse as Response, nextFunction);
      
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});
