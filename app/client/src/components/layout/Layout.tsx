import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, Home, BrainCircuit, LogOut, User, ShieldCheck, Users, Settings, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [privacyMode, setPrivacyMode] = useState<boolean>(false);

  // Load privacy mode from localStorage on mount
  useEffect(() => {
    const savedPrivacy = localStorage.getItem('privacyMode');
    if (savedPrivacy !== null) {
      const isPrivacyOn = savedPrivacy === 'true';
      setPrivacyMode(isPrivacyOn);
      // Apply to document
      if (isPrivacyOn) {
        document.documentElement.setAttribute('data-privacy', 'on');
      }
    }
  }, []);

  // Toggle privacy mode
  const togglePrivacy = () => {
    const newPrivacyMode = !privacyMode;
    setPrivacyMode(newPrivacyMode);
    localStorage.setItem('privacyMode', String(newPrivacyMode));
    
    // Apply privacy mode to document
    if (newPrivacyMode) {
      document.documentElement.setAttribute('data-privacy', 'on');
    } else {
      document.documentElement.removeAttribute('data-privacy');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/transactions', label: 'Transactions', icon: <ReceiptText size={20} /> },
    { path: '/properties', label: 'Properties', icon: <Home size={20} /> },
    { path: '/ai', label: 'AI Insights', icon: <BrainCircuit size={20} /> },
  ];

  const adminItems = [
    { path: '/admin/users', label: 'Users', icon: <Users size={20} /> },
    { path: '/admin/parsers', label: 'Parsers', icon: <Settings size={20} /> },
  ];

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <h1>MJ Solutions</h1>
          <p>Finance Hub</p>
        </div>
        
        <nav className={styles.nav}>
          <div className={styles.navSection}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {user?.role === 'ADMIN' && (
            <div className={styles.adminSection}>
              <p className={styles.sectionTitle}>Administration</p>
              {adminItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userInfo}>
            <User size={18} />
            <div className={styles.userDetails}>
              <span className={styles.userEmail}>{user?.email}</span>
              <span className={styles.userRole}>
                {user?.role === 'ADMIN' && <ShieldCheck size={12} />}
                {user?.role}
              </span>
            </div>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h2>{navItems.find(i => i.path === location.pathname)?.label || 'Dashboard'}</h2>
          <div className={styles.headerActions}>
            <ThemeToggle />
            <button 
              className={styles.privacyToggle} 
              onClick={togglePrivacy}
              title={privacyMode ? 'Disable privacy mode' : 'Enable privacy mode'}
            >
              {privacyMode ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>Privacy: {privacyMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </header>
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
