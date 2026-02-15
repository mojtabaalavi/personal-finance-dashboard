import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import styles from './Auth.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating login for now
    login({ id: '1', email, role: 'ADMIN' }, 'fake-jwt-token');
    navigate('/');
  };

  return (
    <div className={styles.authPage}>
      <form className={styles.authCard} onSubmit={handleSubmit}>
        <div className={styles.authHeader}>
          <h1>MJ Solutionss</h1>
          <p>Login to your finance dashboard</p>
        </div>
        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className={styles.authBtn}>Login</button>
        <p className={styles.authFooter}>
          Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
