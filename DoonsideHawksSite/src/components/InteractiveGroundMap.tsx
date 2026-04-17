'use client';

import React from 'react';
import { 
  Coffee, 
  Car, 
  Users
} from 'lucide-react';
import styles from './InteractiveGroundMap.module.css';

// --- Components ---

const FieldMap = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 style={{color: 'var(--color-primary)'}}>Glendenning Reserve</h2>
        <p className={styles.headerSub}>Professional Field Map & Facility Guide</p>
      </header>

      <div className={styles.mapGrid}>
        {/* Left Column: Fields 1, 2, 3 & Tennis */}
        <div className={styles.leftCol}>
          <div className={`${styles.boxFieldSecondary} ${styles.flexOne}`}>
            <span className={styles.fieldTextSec}>Field 3</span>
          </div>
          <div className={`${styles.boxFieldSecondary} ${styles.h24}`}>
            <span className={styles.fieldTextSec}>Field 2</span>
          </div>
          <div className={`${styles.boxFieldSecondary} ${styles.h24}`}>
            <span className={styles.fieldTextSec}>Field 1</span>
          </div>
          <div className={`${styles.boxFieldSurface} ${styles.h24}`}>
            <span className={styles.fieldTextSurface}>Tennis Courts</span>
          </div>
        </div>

        {/* Right Column: Fields 4, 5, 6, 7, Pitch & Facilities */}
        <div className={styles.rightCol}>
          {/* Top Block: Fields 4, 5, 7 */}
          <div className={`${styles.boxFieldSurface} ${styles.h48}`}>
             <div className={styles.boxFieldLowest}>
                <span className={styles.fieldTextSurface}>Field 7</span>
             </div>
             
             <div className={styles.fieldDivider} />

             <div className={styles.fieldInnerRow}>
                <div className={styles.boxFieldSecondaryLight}>
                  <span className={styles.fieldTextSecLight} style={{ whiteSpace: 'nowrap' }}>Field 4</span>
                </div>
                <div className={styles.boxFieldSecondaryLight}>
                  <span className={styles.fieldTextSecLight} style={{ whiteSpace: 'nowrap' }}>Field 5</span>
                </div>
             </div>
          </div>

          {/* Cricket Pitch */}
          <div className={styles.cricketPitch}>
            <span className={styles.fieldTextTiny}>Cricket Pitch</span>
          </div>

          {/* Field 6 */}
          <div className={`${styles.boxFieldSecondary} ${styles.flexOne}`}>
            <span className={`${styles.fieldTextSec} ${styles.large}`}>Field 6</span>
          </div>

          {/* Bottom Row: Facilities */}
          <div className={styles.facilitiesRow}>
            <div className={styles.boxPrimary}>
              <div className={styles.facilIconGroup}>
                <Coffee size={24} />
                <span className={styles.facilIconText}>Canteen</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.facilIconGroup}>
                <Users size={24} />
                <span className={styles.facilIconText}>Toilets</span>
              </div>
            </div>
            <div className={styles.boxSurfaceHighest}>
              <Car size={24} />
              <span className={styles.facilCarText}>Car Park</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function InteractiveGroundMap() {
  return (
    <div style={{minHeight: '80vh', position: 'relative'}}>
      <FieldMap />
    </div>
  );
}
