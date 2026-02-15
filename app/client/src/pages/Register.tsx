import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating registration
    navigate('/login');
  };

  return (
    <div className={styles.authPage}>
      <form className={styles.authCard} onSubmit={handleSubmit}>
        <div className={styles.authHeader}>
          <h1>MJ Solutionss</h1>
          <p>Create your finance account</p>
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
        <button type="submit" className={styles.authBtn}>Register</button>
        <p className={styles.authFooter}>
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
