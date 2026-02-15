import React, { useState } from 'react';
import { Search, Filter, Plus, Upload, MoreHorizontal } from 'lucide-react';
import styles from './Transactions.module.css';

const dummyTransactions = [
  { id: '1', date: '2024-05-15', description: 'Woolworths', amount: -152.40, category: 'Groceries', account: 'CommBank', type: 'EXPENSE' },
  { id: '2', date: '2024-05-14', description: 'Salary', amount: 3200.00, category: 'Income', account: 'CommBank', type: 'INCOME' },
  { id: '3', date: '2024-05-12', description: 'Shell Petrol', amount: -85.00, category: 'Transport', account: 'Credit Card', type: 'EXPENSE' },
  { id: '4', date: '2024-05-10', description: 'Netflix', amount: -16.99, category: 'Entertainment', account: 'Credit Card', type: 'EXPENSE' },
  { id: '5', date: '2024-05-08', description: 'Rent Payment', amount: -650.00, category: 'Housing', account: 'CommBank', type: 'EXPENSE' },
];

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.transactionsPage}>
      <div className={styles.actionBar}>
        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className={styles.actions}>
          <button className={styles.secondaryBtn}>
            <Filter size={18} />
            <span>Filters</span>
          </button>
          <button className={styles.secondaryBtn}>
            <Upload size={18} />
            <span>Import</span>
          </button>
          <button className={styles.primaryBtn}>
            <Plus size={18} />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Account</th>
              <th className={styles.right}>Amount</th>
              <th className={styles.center}>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyTransactions.map((t) => (
              <tr key={t.id}>
                <td className={styles.dateCell}>{new Date(t.date).toLocaleDateString()}</td>
                <td className={styles.descCell}>{t.description}</td>
                <td>
                  <span className={styles.categoryBadge}>{t.category}</span>
                </td>
                <td className={styles.accountCell}>{t.account}</td>
                <td className={`${styles.amountCell} ${t.type === 'INCOME' ? styles.income : styles.expense}`}>
                  {t.type === 'INCOME' ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
                </td>
                <td className={styles.center}>
                  <button className={styles.moreBtn}><MoreHorizontal size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className={styles.pagination}>
          <span>Showing 1 to 5 of 42 transactions</span>
          <div className={styles.pageButtons}>
            <button disabled>Previous</button>
            <button className={styles.activePage}>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
