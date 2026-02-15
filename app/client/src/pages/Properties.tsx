import React from 'react';
import { Home, Car, Landmark, Percent, MapPin, TrendingUp } from 'lucide-react';
import styles from './Properties.module.css';

const dummyAssets = [
  { id: '1', name: 'Primary Residence', type: 'PROPERTY_OWN', value: 850000, address: '123 Main St, Sydney', liability: 450000, color: 'blue' },
  { id: '2', name: 'Investment Unit', type: 'PROPERTY_RENTAL', value: 520000, address: '45/88 Beach Rd, Gold Coast', liability: 380000, color: 'green' },
  { id: '3', name: 'Family Car', type: 'VEHICLE', value: 35000, address: null, liability: 15000, color: 'purple' },
];

const PropertyCard = ({ asset }: any) => {
  const equity = asset.value - (asset.liability || 0);
  const lvr = asset.liability ? ((asset.liability / asset.value) * 100).toFixed(1) : 0;

  return (
    <div className={styles.propertyCard}>
      <div className={`${styles.iconHeader} ${styles[asset.color]}`}>
        {asset.type.includes('PROPERTY') ? <Home size={24} /> : <Car size={24} />}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.titleInfo}>
          <h3>{asset.name}</h3>
          {asset.address && <p className={styles.address}><MapPin size={12} /> {asset.address}</p>}
        </div>
        
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span>Market Value</span>
            <strong>${asset.value.toLocaleString()}</strong>
          </div>
          <div className={styles.stat}>
            <span>Liability</span>
            <strong className={styles.neg}>${asset.liability?.toLocaleString() || 0}</strong>
          </div>
          <div className={styles.stat}>
            <span>Equity</span>
            <strong className={styles.pos}>${equity.toLocaleString()}</strong>
          </div>
          <div className={styles.stat}>
            <span>LVR</span>
            <strong>{lvr}%</strong>
          </div>
        </div>

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
  return (
    <div className={styles.propertiesPage}>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.sumInfo}>
            <span>Combined Asset Value</span>
            <h2>$1,405,000</h2>
          </div>
          <TrendingUp className={styles.sumIcon} />
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.sumInfo}>
            <span>Total Liabilities</span>
            <h2 className={styles.neg}>$845,000</h2>
          </div>
          <Landmark className={styles.sumIcon} />
        </div>
        <div className={styles.summaryCard}>
          <div className={styles.sumInfo}>
            <span>Total Net Equity</span>
            <h2 className={styles.pos}>$560,000</h2>
          </div>
          <Percent className={styles.sumIcon} />
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <h3>Portfolio Assets</h3>
        <button className={styles.addBtn}>Add Asset</button>
      </div>

      <div className={styles.assetsGrid}>
        {dummyAssets.map(asset => (
          <PropertyCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
