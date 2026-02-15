import { describe, it, expect, vi, beforeEach } from 'vitest';
import { prismaMock } from './prismaMock';
import { register, login } from '../controllers/authController';
import { Request, Response } from 'express';
import argon2 from 'argon2';
import * as jwtUtils from '../utils/jwt';

describe('Auth Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const userData = { email: 'new@example.com', password: 'password123' };
      mockRequest.body = userData;

      prismaMock.user.findFirst.mockResolvedValue(null);
      vi.spyOn(argon2, 'hash').mockResolvedValue('hashed-password');
      prismaMock.user.create.mockResolvedValue({
        id: '1',
        email: userData.email,
        passwordHash: 'hashed',
        role: 'USER',
        isLocked: false,
        permissions: [],
        emailVerified: false,
        emailVerificationToken: 'token123',
        emailVerificationExpiry: new Date(),
        twoFactorEnabled: true,
        twoFactorCode: null,
        twoFactorCodeExpiry: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await register(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: 'Registration successful. Please check your email to verify your account.',
        email: userData.email,
        requiresVerification: true,
      });
    });

    it('should return 400 if user already exists', async () => {
      mockRequest.body = { email: 'existing@example.com', password: 'password123' };
      prismaMock.user.findFirst.mockResolvedValue({ id: '1' } as any);

      await register(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'User already exists' });
    });
  });

  describe('login', () => {
    it('should send 2FA code successfully', async () => {
      const loginData = { email: 'login@example.com', password: 'password123' };
      mockRequest.body = loginData;

      const user = {
        id: '1',
        email: loginData.email,
        passwordHash: 'hashed',
        role: 'USER',
        emailVerified: true,
        isLocked: false,
      };
      prismaMock.user.findFirst.mockResolvedValue(user as any);
      prismaMock.user.update.mockResolvedValue(user as any);
      
      vi.spyOn(argon2, 'verify').mockResolvedValue(true);

      await login(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith({
        message: 'Verification code sent to your email',
        requires2FA: true,
        email: loginData.email,
      });
    });

    it('should return 401 for invalid password', async () => {
      mockRequest.body = { email: 'login@example.com', password: 'wrong' };
      prismaMock.user.findFirst.mockResolvedValue({ passwordHash: 'hashed' } as any);
      
      vi.spyOn(argon2, 'verify').mockResolvedValue(false);

      await login(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Invalid credentials' });
    });
  });
});
