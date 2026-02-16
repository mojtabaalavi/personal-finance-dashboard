import React, { useState, useEffect } from 'react';
import { User, Shield, Lock, Unlock, Search } from 'lucide-react';
import styles from './Admin.module.css';
import api from '../../services/api';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleLock = async (id: string) => {
    try {
      await api.patch(`/api/users/${id}/lock`);
      fetchUsers();
    } catch (error) {
      alert('Failed to update user status');
    }
  };

  const handlePromote = async (id: string, role: string) => {
    try {
      await api.patch(`/api/users/${id}/permissions`, { role });
      fetchUsers();
    } catch (error) {
      alert('Failed to update user role');
    }
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <User size={24} className={styles.icon} />
          <h2>User Management</h2>
        </div>
        <div className={styles.searchBox}>
          <Search size={18} />
          <input type="text" placeholder="Search by email..." />
        </div>
      </div>

      <div className={styles.tableCard}>
        {loading ? (
          <p className={styles.loading}>Loading users...</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th className={styles.center}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className={styles.userCell}>
                    <div className={styles.avatar}>{user.email[0].toUpperCase()}</div>
                    <div className={styles.userInfo}>
                      <span className={styles.email}>{user.email}</span>
                      <span className={styles.id}>ID: ...{user.id.slice(-6)}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`${styles.roleBadge} ${user.role === 'ADMIN' ? styles.admin : ''}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${user.isLocked ? styles.locked : styles.active}`}>
                      {user.isLocked ? 'Locked' : 'Active'}
                    </span>
                  </td>
                  <td className={styles.dateCell}>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className={styles.actionsCell}>
                    <button 
                      className={styles.actionBtn}
                      onClick={() => handleToggleLock(user.id)}
                      title={user.isLocked ? 'Unlock User' : 'Lock User'}
                    >
                      {user.isLocked ? <Unlock size={16} /> : <Lock size={16} />}
                    </button>
                    <button 
                      className={styles.actionBtn}
                      onClick={() => handlePromote(user.id, user.role === 'ADMIN' ? 'USER' : 'ADMIN')}
                      title={user.role === 'ADMIN' ? 'Demote to User' : 'Promote to Admin'}
                    >
                      <Shield size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
