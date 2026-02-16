import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, Upload, MoreHorizontal, X } from 'lucide-react';
import styles from './Transactions.module.css';
import api from '../services/api';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'INCOME' | 'EXPENSE';
  bankAccountId: string;
  categoryId?: string;
  subCategoryId?: string;
  bankAccount?: { id: string; accountName: string };
  category?: { id: string; name: string };
  subCategory?: { id: string; name: string };
}

interface Account {
  id: string;
  accountName: string;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  
  // Filter state
  const [filterAccount, setFilterAccount] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Add transaction form
  const [newTransaction, setNewTransaction] = useState({
    date: new Date().toISOString().split('T')[0],
    description: '',
    amount: '',
    type: 'EXPENSE' as 'INCOME' | 'EXPENSE',
    bankAccountId: '',
    categoryId: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [transactionsRes, accountsRes] = await Promise.all([
        api.get('/api/finance/transactions'),
        api.get('/api/finance/accounts'),
      ]);
      setTransactions(transactionsRes.data);
      setAccounts(accountsRes.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/finance/transactions', {
        ...newTransaction,
        amount: parseFloat(newTransaction.amount),
      });
      setShowAddModal(false);
      setNewTransaction({
        date: new Date().toISOString().split('T')[0],
        description: '',
        amount: '',
        type: 'EXPENSE',
        bankAccountId: '',
        categoryId: '',
      });
      fetchData();
    } catch (error) {
      console.error('Failed to create transaction:', error);
      alert('Failed to create transaction');
    }
  };

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await api.post('/api/finance/import/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setShowImportModal(false);
      alert('File imported successfully');
      fetchData();
    } catch (error) {
      console.error('Failed to import file:', error);
      alert('Failed to import file');
    }
  };

  // Filter and search logic
  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = !searchTerm || 
      t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.bankAccount?.accountName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAccount = !filterAccount || t.bankAccountId === filterAccount;
    const matchesCategory = !filterCategory || t.categoryId === filterCategory;
    
    const transactionDate = new Date(t.date);
    const matchesStartDate = !filterStartDate || transactionDate >= new Date(filterStartDate);
    const matchesEndDate = !filterEndDate || transactionDate <= new Date(filterEndDate);
    
    return matchesSearch && matchesAccount && matchesCategory && matchesStartDate && matchesEndDate;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return <div className={styles.transactionsPage}>Loading...</div>;
  }

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
          <button 
            className={styles.secondaryBtn}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
          <button 
            className={styles.secondaryBtn}
            onClick={() => setShowImportModal(true)}
          >
            <Upload size={18} />
            <span>Import</span>
          </button>
          <button 
            className={styles.primaryBtn}
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={18} />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>

      {showFilters && (
        <div className={styles.filtersPanel}>
          <div className={styles.filterGroup}>
            <label>Account</label>
            <select value={filterAccount} onChange={(e) => setFilterAccount(e.target.value)}>
              <option value="">All Accounts</option>
              {accounts.map(acc => (
                <option key={acc.id} value={acc.id}>{acc.accountName}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label>Start Date</label>
            <input 
              type="date" 
              value={filterStartDate} 
              onChange={(e) => setFilterStartDate(e.target.value)}
            />
          </div>
          
          <div className={styles.filterGroup}>
            <label>End Date</label>
            <input 
              type="date" 
              value={filterEndDate} 
              onChange={(e) => setFilterEndDate(e.target.value)}
            />
          </div>
          
          <button 
            className={styles.clearFiltersBtn}
            onClick={() => {
              setFilterAccount('');
              setFilterCategory('');
              setFilterStartDate('');
              setFilterEndDate('');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}

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
            {paginatedTransactions.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>
                  No transactions found
                </td>
              </tr>
            ) : (
              paginatedTransactions.map((t) => (
                <tr key={t.id}>
                  <td className={styles.dateCell}>{new Date(t.date).toLocaleDateString()}</td>
                  <td className={styles.descCell}>{t.description}</td>
                  <td>
                    <span className={styles.categoryBadge}>
                      {t.category?.name || 'Uncategorized'}
                    </span>
                  </td>
                  <td className={styles.accountCell}>{t.bankAccount?.accountName}</td>
                  <td className={`${styles.amountCell} ${t.type === 'INCOME' ? styles.income : styles.expense}`}>
                    {t.type === 'INCOME' ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
                  </td>
                  <td className={styles.center}>
                    <button className={styles.moreBtn}><MoreHorizontal size={16} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        
        <div className={styles.pagination}>
          <span>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} transactions
          </span>
          <div className={styles.pageButtons}>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button 
                  key={pageNum}
                  className={currentPage === pageNum ? styles.activePage : ''}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            <button 
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Transaction Modal */}
      {showAddModal && (
        <div className={styles.modal} onClick={() => setShowAddModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Add Transaction</h3>
              <button onClick={() => setShowAddModal(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleAddTransaction}>
              <div className={styles.formGroup}>
                <label>Date</label>
                <input 
                  type="date" 
                  required
                  value={newTransaction.date}
                  onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Description</label>
                <input 
                  type="text" 
                  required
                  placeholder="Transaction description"
                  value={newTransaction.description}
                  onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Amount</label>
                <input 
                  type="number" 
                  step="0.01"
                  required
                  placeholder="0.00"
                  value={newTransaction.amount}
                  onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Type</label>
                <select 
                  value={newTransaction.type}
                  onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value as 'INCOME' | 'EXPENSE'})}
                >
                  <option value="EXPENSE">Expense</option>
                  <option value="INCOME">Income</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label>Account</label>
                <select 
                  required
                  value={newTransaction.bankAccountId}
                  onChange={(e) => setNewTransaction({...newTransaction, bankAccountId: e.target.value})}
                >
                  <option value="">Select Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.accountName}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.modalActions}>
                <button type="button" onClick={() => setShowAddModal(false)} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Add Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className={styles.modal} onClick={() => setShowImportModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Import Transactions</h3>
              <button onClick={() => setShowImportModal(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleImport}>
              <div className={styles.formGroup}>
                <label>Select CSV File</label>
                <input 
                  id="fileInput"
                  type="file" 
                  accept=".csv"
                  required
                />
              </div>
              
              <div className={styles.modalActions}>
                <button type="button" onClick={() => setShowImportModal(false)} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Import
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
