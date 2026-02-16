import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Wallet, PiggyBank, Loader2 } from 'lucide-react';
import styles from './Dashboard.module.css';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import api from '../services/api';

interface MonthData {
  name: string;
  income: number;
  expense: number;
}

interface KPIs {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpense: number;
  totalSavings: number;
}

const KpiCard = ({ title, value, icon, color, trend }: any) => (
  <div className={styles.kpiCard}>
    <div className={styles.kpiInfo}>
      <span className={styles.kpiTitle}>{title}</span>
      <h3 className={`${styles.kpiValue} sensitive`}>
        {new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', minimumFractionDigits: 0 }).format(value)}
      </h3>
      {trend !== undefined && (
        <span className={`${styles.kpiTrend} ${trend > 0 ? styles.pos : styles.neg}`}>
          {trend > 0 ? '+' : ''}{trend.toFixed(1)}% from last month
        </span>
      )}
    </div>
    <div className={`${styles.kpiIcon} ${styles[color]}`}>
      {icon}
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<MonthData[]>([]);
  const [kpis, setKpis] = useState<KPIs>({
    totalBalance: 0,
    monthlyIncome: 0,
    monthlyExpense: 0,
    totalSavings: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data in parallel
      const [transactionsRes, accountsRes] = await Promise.all([
        api.get('/api/finance/transactions'),
        api.get('/api/finance/accounts'),
      ]);

      const transactions = transactionsRes.data;
      const accounts = accountsRes.data;

      // Calculate total balance
      const totalBalance = accounts.reduce((sum: number, acc: any) => sum + parseFloat(acc.balance || 0), 0);

      // Get current and previous month transactions
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      
      const lastSixMonths: MonthData[] = [];
      for (let i = 5; i >= 0; i--) {
        const targetDate = new Date(currentYear, currentMonth - i, 1);
        const monthName = targetDate.toLocaleDateString('en-US', { month: 'short' });
        
        const monthTransactions = transactions.filter((t: any) => {
          const tDate = new Date(t.date);
          return tDate.getMonth() === targetDate.getMonth() && tDate.getFullYear() === targetDate.getFullYear();
        });

        const income = monthTransactions
          .filter((t: any) => t.type === 'INCOME')
          .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

        const expense = monthTransactions
          .filter((t: any) => t.type === 'EXPENSE')
          .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

        lastSixMonths.push({ name: monthName, income, expense });
      }

      setChartData(lastSixMonths);

      // Calculate KPIs
      const thisMonthTransactions = transactions.filter((t: any) => {
        const tDate = new Date(t.date);
        return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
      });

      const monthlyIncome = thisMonthTransactions
        .filter((t: any) => t.type === 'INCOME')
        .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

      const monthlyExpense = thisMonthTransactions
        .filter((t: any) => t.type === 'EXPENSE')
        .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

      const totalSavings = monthlyIncome - monthlyExpense;

      setKpis({
        totalBalance,
        monthlyIncome,
        monthlyExpense,
        totalSavings,
      });
    } catch (err: any) {
      console.error('Error fetching dashboard data:', err);
      setError(err.response?.data?.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.loadingContainer}>
          <Loader2 className={styles.spinner} size={48} />
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.errorContainer}>
          <p className={styles.errorText}>{error}</p>
          <button onClick={fetchDashboardData} className={styles.retryBtn}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.kpiGrid}>
        <KpiCard title="Total Balance" value={kpis.totalBalance} icon={<Wallet />} color="blue" />
        <KpiCard title="Monthly Income" value={kpis.monthlyIncome} icon={<TrendingUp />} color="green" />
        <KpiCard title="Monthly Expense" value={kpis.monthlyExpense} icon={<TrendingDown />} color="red" />
        <KpiCard title="Net Savings" value={kpis.totalSavings} icon={<PiggyBank />} color="purple" />
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3>Income vs Expense Trend (Last 6 Months)</h3>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4A5FD9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4A5FD9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#f5f7fa'}} formatter={(value: number) => `$${value.toFixed(0)}`} />
                <Area type="monotone" dataKey="income" stroke="#4A5FD9" fillOpacity={1} fill="url(#colorInc)" strokeWidth={2} name="Income" />
                <Area type="monotone" dataKey="expense" stroke="#cbd5e0" fill="transparent" strokeWidth={2} strokeDasharray="5 5" name="Expense" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Monthly Expense Distribution</h3>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} formatter={(value: number) => `$${value.toFixed(0)}`} />
                <Bar dataKey="expense" radius={[4, 4, 0, 0]} name="Expense">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.expense > 2000 ? '#2E3A8C' : '#4A5FD9'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
