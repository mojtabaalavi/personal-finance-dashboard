import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../services/api';
import styles from './Auth.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [canResendVerification, setCanResendVerification] = useState(false);
  
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Show message from registration if present
    const state = location.state as any;
    if (state?.message) {
      setInfo(state.message);
    }
  }, [location]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);
    setCanResendVerification(false);

    try {
      const response = await api.post('/api/auth/login', { email, password });
      
      if (response.data.requires2FA) {
        setShowTwoFactor(true);
        setInfo('A verification code has been sent to your email. Please enter it below.');
      } else {
        // Unexpected: should always require 2FA
        setError('Unexpected response from server');
      }
    } catch (err: any) {
      const errorData = err.response?.data;
      
      if (errorData?.requiresVerification) {
        setError('Please verify your email before logging in.');
        setCanResendVerification(true);
      } else {
        setError(errorData?.error || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTwoFactorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/api/auth/verify-2fa', { 
        email, 
        code: twoFactorCode 
      });
      
      if (response.data.token && response.data.user) {
        login(response.data.user, response.data.token);
        navigate('/');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Invalid verification code. Please try again.');
      setTwoFactorCode('');
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setLoading(true);
    setError('');
    
    try {
      await api.post('/api/auth/resend-verification', { email });
      setInfo('Verification email sent! Please check your inbox.');
      setCanResendVerification(false);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to resend verification email.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setShowTwoFactor(false);
    setTwoFactorCode('');
    setError('');
    setInfo('');
  };

  return (
    <div className={styles.authPage}>
      <form 
        className={styles.authCard} 
        onSubmit={showTwoFactor ? handleTwoFactorSubmit : handleLoginSubmit}
      >
        <div className={styles.authHeader}>
          <h1>MJ Solutionss</h1>
          <p>{showTwoFactor ? 'Enter verification code' : 'Login to your finance dashboard'}</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        {info && (
          <div className={styles.infoMessage}>
            {info}
          </div>
        )}

        {!showTwoFactor ? (
          <>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                disabled={loading}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                disabled={loading}
              />
            </div>
            <button type="submit" className={styles.authBtn} disabled={loading}>
              {loading ? 'Verifying...' : 'Continue'}
            </button>
            
            {canResendVerification && (
              <button 
                type="button" 
                className={styles.secondaryBtn} 
                onClick={handleResendVerification}
                disabled={loading}
              >
                Resend Verification Email
              </button>
            )}

            <p className={styles.authFooter}>
              Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
            </p>
          </>
        ) : (
          <>
            <div className={styles.inputGroup}>
              <label>6-Digit Code</label>
              <input 
                type="text" 
                value={twoFactorCode} 
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                  setTwoFactorCode(value);
                }}
                placeholder="000000"
                required 
                maxLength={6}
                disabled={loading}
                className={styles.codeInput}
                autoComplete="off"
              />
              <small>Check your email for the 6-digit verification code</small>
            </div>
            <button type="submit" className={styles.authBtn} disabled={loading || twoFactorCode.length !== 6}>
              {loading ? 'Verifying...' : 'Verify & Login'}
            </button>
            <button 
              type="button" 
              className={styles.secondaryBtn} 
              onClick={handleBackToLogin}
              disabled={loading}
            >
              Back to Login
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
