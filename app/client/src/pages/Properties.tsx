import React, { useState, useEffect } from 'react';
import { Home, Car, Landmark, Percent, MapPin, TrendingUp, Plus, Loader2 } from 'lucide-react';
import styles from './Properties.module.css';
import api from '../services/api';

interface Asset {
  id: string;
  name: string;
  type: string;
  value: number;
  owner: string;
  address: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Liability {
  id: string;
  name: string;
  type: string;
  amount: number;
  interestRate: number | null;
  fixExpiry: string | null;
  assetId: string | null;
}

interface AssetWithLiability extends Asset {
  liability?: Liability;
}

const getColorForType = (type: string) => {
  if (type.includes('PROPERTY')) return 'blue';
  if (type === 'VEHICLE') return 'green';
  return 'purple';
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const PropertyCard = ({ asset }: { asset: AssetWithLiability }) => {
  const liabilityAmount = asset.liability?.amount || 0;
  const equity = asset.value - liabilityAmount;
  const lvr = liabilityAmount ? ((liabilityAmount / asset.value) * 100).toFixed(1) : 0;
  const color = getColorForType(asset.type);

  return (
    <div className={styles.propertyCard}>
      <div className={`${styles.iconHeader} ${styles[color]}`}>
        {asset.type.includes('PROPERTY') ? <Home size={24} /> : <Car size={24} />}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.titleInfo}>
          <h3>{asset.name}</h3>
          <p className={styles.ownerText}>{asset.owner}</p>
          {asset.address && <p className={styles.address}><MapPin size={12} /> {asset.address}</p>}
        </div>
        
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span>Market Value</span>
            <strong>{formatCurrency(asset.value)}</strong>
          </div>
          <div className={styles.stat}>
            <span>Liability</span>
            <strong className={styles.neg}>{formatCurrency(liabilityAmount)}</strong>
          </div>
          <div className={styles.stat}>
            <span>Equity</span>
            <strong className={styles.pos}>{formatCurrency(equity)}</strong>
          </div>
          <div className={styles.stat}>
            <span>LVR</span>
            <strong>{lvr}%</strong>
          </div>
        </div>

        {asset.liability && (
          <div className={styles.liabilityInfo}>
            <p className={styles.liabilityName}>{asset.liability.name}</p>
            {asset.liability.interestRate && (
              <p className={styles.interestRate}>
                {asset.liability.interestRate}% p.a. 
                {asset.liability.fixExpiry && ` • Fixed until ${new Date(asset.liability.fixExpiry).toLocaleDateString('en-NZ', { month: 'short', year: 'numeric' })}`}
              </p>
            )}
          </div>
        )}

        <div className={styles.progressBarWrapper}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${(equity / asset.value) * 100}%` }} 
          />
        </div>
      </div>
    </div>
  );
};

const Properties: React.FC = () => {
  const [assets, setAssets] = useState<AssetWithLiability[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch assets and liabilities in parallel
      const [assetsResponse, liabilitiesResponse] = await Promise.all([
        api.get('/api/property/assets'),
        api.get('/api/property/liabilities'),
      ]);

      const assetsData: Asset[] = assetsResponse.data;
      const liabilitiesData: Liability[] = liabilitiesResponse.data;

      // Map liabilities to their assets
      const assetsWithLiabilities: AssetWithLiability[] = assetsData.map(asset => {
        const liability = liabilitiesData.find(l => l.assetId === asset.id);
        return { ...asset, liability };
      });

      setAssets(assetsWithLiabilities);
    } catch (err: any) {
      console.error('Error fetching property data:', err);
      setError(err.response?.data?.message || 'Failed to load property data');
    } finally {
      setLoading(false);
    }
  };

  // Calculate totals
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = assets.reduce((sum, asset) => sum + (asset.liability?.amount || 0), 0);
  const totalEquity = totalValue - totalLiabilities;

  if (loading) {
    return (
      <div className={styles.propertiesPage}>
        <div className={styles.loadingContainer}>
          <Loader2 className={styles.spinner} size={48} />
          <p>Loading property portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.propertiesPage}>
        <div className={styles.errorContainer}>
          <p className={styles.errorText}>{error}</p>
          <button onClick={fetchData} className={styles.retryBtn}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.propertiesPage}>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.sumInfo}>
            <span>Combined Asset Value</span>
            <h2>{formatCurrency(totalValue)}</h2>
          </div>
          <TrendingUp className={styles.sumIcon} />
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.sumInfo}>
            <span>Total Liabilities</span>
            <h2 className={styles.neg}>{formatCurrency(totalLiabilities)}</h2>
          </div>
          <Landmark className={styles.sumIcon} />
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.sumInfo}>
            <span>Total Net Equity</span>
            <h2 className={styles.pos}>{formatCurrency(totalEquity)}</h2>
          </div>
          <Percent className={styles.sumIcon} />
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <h3>Portfolio Assets ({assets.length})</h3>
        <button className={styles.addBtn}>
          <Plus size={18} /> Add Asset
        </button>
      </div>

      {assets.length === 0 ? (
        <div className={styles.emptyState}>
          <Home size={64} className={styles.emptyIcon} />
          <h3>No assets yet</h3>
          <p>Start building your property portfolio by adding your first asset.</p>
          <button className={styles.addBtn}>
            <Plus size={18} /> Add Your First Asset
          </button>
        </div>
      ) : (
        <div className={styles.assetsGrid}>
          {assets.map(asset => (
            <PropertyCard key={asset.id} asset={asset} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
