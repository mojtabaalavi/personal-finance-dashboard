import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import styles from './Auth.module.css';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setStatus('error');
        setMessage('Invalid verification link. No token provided.');
        return;
      }

      try {
        const response = await api.get(`/auth/verify-email?token=${token}`);
        setStatus('success');
        setMessage(response.data.message || 'Email verified successfully!');
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } catch (error: any) {
        setStatus('error');
        setMessage(
          error.response?.data?.error || 
          'Email verification failed. The link may be invalid or expired.'
        );
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div style={{ textAlign: 'center' }}>
          {status === 'verifying' && (
            <>
              <div className={styles.spinner} />
              <h2>Verifying your email...</h2>
              <p>Please wait while we verify your email address.</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
              <h2 style={{ color: '#4CAF50' }}>Email Verified!</h2>
              <p>{message}</p>
              <p style={{ marginTop: '20px', color: '#666' }}>
                Redirecting to login page...
              </p>
              <Link to="/login" className={styles.button} style={{ marginTop: '20px', display: 'inline-block' }}>
                Go to Login Now
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <div style={{ fontSize: '48px', marginBottom: '20px', color: '#f44336' }}>✗</div>
              <h2 style={{ color: '#f44336' }}>Verification Failed</h2>
              <p>{message}</p>
              <div style={{ marginTop: '30px' }}>
                <Link to="/login" className={styles.button}>
                  Go to Login
                </Link>
                <p style={{ marginTop: '15px' }}>
                  <Link to="/register" style={{ color: '#4A5FD9' }}>
                    Need a new account?
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
