import React, { useState, useEffect } from 'react';
import { Settings, Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import styles from './Admin.module.css';
import api from '../../services/api';

const ParserManagement: React.FC = () => {
  const [configs, setConfigs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConfigs();
  }, []);

  const fetchConfigs = async () => {
    try {
      const response = await api.get('/api/finance/parser-configs');
      setConfigs(response.data);
    } catch (error) {
      console.error('Failed to fetch parser configs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this configuration?')) return;
    try {
      await api.delete(`/api/finance/parser-configs/${id}`);
      fetchConfigs();
    } catch (error) {
      alert('Delete failed');
    }
  };

  const handleToggleActive = async (config: any) => {
    try {
      await api.patch(`/api/finance/parser-configs/${config.id}`, { isActive: !config.isActive });
      fetchConfigs();
    } catch (error) {
      alert('Update failed');
    }
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Settings size={24} className={styles.icon} />
          <h2>Parser configurations</h2>
        </div>
        <button className={styles.addBtn}>
          <Plus size={18} />
          <span>New Configuration</span>
        </button>
      </div>

      <div className={styles.grid}>
        {loading ? (
          <p>Loading configurations...</p>
        ) : (
          configs.map((config) => (
            <div key={config.id} className={styles.configCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardInfo}>
                  <h3>{config.name}</h3>
                  <p>{config.bankName}</p>
                </div>
                <div 
                  className={`${styles.statusIcon} ${config.isActive ? styles.active : styles.inactive}`}
                  onClick={() => handleToggleActive(config)}
                >
                  {config.isActive ? <CheckCircle size={20} /> : <XCircle size={20} />}
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.ruleInfo}>
                  <span className={styles.label}>Account Link:</span>
                  <span className={styles.value}>{config.bankAccount?.name || 'Generic'}</span>
                </div>
                <div className={styles.rulesPreview}>
                  <pre>{JSON.stringify(config.rules, null, 2)}</pre>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.editBtn}><Edit2 size={16} /> Edit</button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(config.id)}><Trash2 size={16} /> Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ParserManagement;
