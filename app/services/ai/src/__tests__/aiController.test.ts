import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Request, Response } from 'express';
import { chat } from '../controllers/aiController';
import * as ollamaService from '../services/ollamaService';

describe('AI Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
  });

  describe('chat', () => {
    it('should return 400 if messages array is missing', async () => {
      mockRequest.body = {};

      await chat(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: 'Messages array required',
      });
    });

    it('should return 400 if messages is not an array', async () => {
      mockRequest.body = { messages: 'not an array' };

      await chat(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: 'Messages array required',
      });
    });

    it('should successfully return AI response when given valid messages', async () => {
      const mockMessages = [
        { role: 'user', content: 'Hello, how are you?' }
      ];
      const mockAIResponse = 'I am doing well, thank you for asking!';

      mockRequest.body = { messages: mockMessages };
      vi.spyOn(ollamaService, 'chatWithAI').mockResolvedValue(mockAIResponse);

      await chat(mockRequest as Request, mockResponse as Response);

      expect(ollamaService.chatWithAI).toHaveBeenCalledWith(mockMessages);
      expect(mockResponse.json).toHaveBeenCalledWith({
        response: mockAIResponse,
      });
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should return 500 if AI chat service fails', async () => {
      mockRequest.body = {
        messages: [{ role: 'user', content: 'Test message' }],
      };
      vi.spyOn(ollamaService, 'chatWithAI').mockRejectedValue(
        new Error('AI Service communication failed')
      );

      await chat(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: 'AI Chat failed',
      });
    });

    it('should handle conversation history with multiple messages', async () => {
      const mockMessages = [
        { role: 'user', content: 'What is my spending?' },
        { role: 'assistant', content: 'Your total spending is $500.' },
        { role: 'user', content: 'What about savings?' },
      ];
      const mockAIResponse = 'Your total savings is $1000.';

      mockRequest.body = { messages: mockMessages };
      vi.spyOn(ollamaService, 'chatWithAI').mockResolvedValue(mockAIResponse);

      await chat(mockRequest as Request, mockResponse as Response);

      expect(ollamaService.chatWithAI).toHaveBeenCalledWith(mockMessages);
      expect(mockResponse.json).toHaveBeenCalledWith({
        response: mockAIResponse,
      });
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});
