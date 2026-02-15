import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Properties from './pages/Properties';
import AIInsights from './pages/AIInsights';
import Login from './pages/Login';
import Register from './pages/Register';
import UserManagement from './pages/admin/UserManagement';
import ParserManagement from './pages/admin/ParserManagement';
import { useAuthStore } from './store/authStore';

const ProtectedRoute = ({ children, adminOnly = false }: { children: React.ReactNode, adminOnly?: boolean }) => {
  const { token, user } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;
  if (adminOnly && user?.role !== 'ADMIN') return <Navigate to="/" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="properties" element={<Properties />} />
          <Route path="ai" element={<AIInsights />} />
          
          {/* Admin Routes */}
          <Route path="admin/users" element={
            <ProtectedRoute adminOnly>
              <UserManagement />
            </ProtectedRoute>
          } />
          <Route path="admin/parsers" element={
            <ProtectedRoute adminOnly>
              <ParserManagement />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
