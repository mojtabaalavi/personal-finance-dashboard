import { describe, it, expect, beforeEach } from 'vitest';
import { useAuthStore } from '../authStore';

describe('Auth Store (Zustand)', () => {
  beforeEach(() => {
    useAuthStore.getState().logout();
  });

  it('should have null user and token initially', () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
  });

  it('should login correctly', () => {
    const user = { id: '1', email: 'test@example.com', role: 'USER' };
    const token = 'fake-jwt';
    
    useAuthStore.getState().login(user, token);
    
    const state = useAuthStore.getState();
    expect(state.user).toEqual(user);
    expect(state.token).toBe(token);
  });

  it('should logout correctly', () => {
    useAuthStore.getState().login({ id: '1', email: 't@t.com', role: 'USER' }, 'token');
    useAuthStore.getState().logout();
    
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
  });
});
