import React from 'react';
import { TrendingUp, TrendingDown, Wallet, PiggyBank } from 'lucide-react';
import styles from './Dashboard.module.css';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
];

const KpiCard = ({ title, value, icon, color, trend }: any) => (
  <div className={styles.kpiCard}>
    <div className={styles.kpiInfo}>
      <span className={styles.kpiTitle}>{title}</span>
      <h3 className={styles.kpiValue}>${value.toLocaleString()}</h3>
      {trend && (
        <span className={`${styles.kpiTrend} ${trend > 0 ? styles.pos : styles.neg}`}>
          {trend > 0 ? '+' : ''}{trend}% from last month
        </span>
      )}
    </div>
    <div className={`${styles.kpiIcon} ${styles[color]}`}>
      {icon}
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.kpiGrid}>
        <KpiCard title="Total Balance" value={12540} icon={<Wallet />} color="blue" trend={2.5} />
        <KpiCard title="Monthly Income" value={5420} icon={<TrendingUp />} color="green" trend={12} />
        <KpiCard title="Monthly Expense" value={3210} icon={<TrendingDown />} color="red" trend={-5} />
        <KpiCard title="Total Savings" value={2210} icon={<PiggyBank />} color="purple" trend={8} />
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3>Income vs Expense Trend</h3>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4A5FD9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4A5FD9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#f5f7fa'}} />
                <Area type="monotone" dataKey="income" stroke="#4A5FD9" fillOpacity={1} fill="url(#colorInc)" strokeWidth={2} />
                <Area type="monotone" dataKey="expense" stroke="#cbd5e0" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Expense Distribution</h3>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} />
                <Bar dataKey="expense" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.expense > 4000 ? '#2E3A8C' : '#4A5FD9'} />
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
