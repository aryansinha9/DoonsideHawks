'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map as MapIcon, 
  Calendar, 
  Info, 
  Coffee, 
  Car, 
  Users, 
  ChevronRight,
  Trophy
} from 'lucide-react';
import styles from './InteractiveGroundMap.module.css';

// --- Types ---
type Screen = 'map' | 'fixtures' | 'facilities';

// --- Components ---

const Navigation = ({ current, setScreen }: { current: Screen, setScreen: (s: Screen) => void }) => {
  const navItems: { id: Screen, icon: any, label: string }[] = [
    { id: 'map', icon: MapIcon, label: 'Field Map' },
    { id: 'fixtures', icon: Calendar, label: 'Fixtures' },
    { id: 'facilities', icon: Info, label: 'Facilities' },
  ];

  return (
    <nav className={styles.mapNav}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id)}
          className={`${styles.navBtn} ${current === item.id ? styles.navBtnActive : styles.navBtnInactive}`}
        >
          <item.icon size={20} strokeWidth={current === item.id ? 2.5 : 2} />
          <span className={styles.navLabel}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

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
                  <span className={styles.fieldTextSecLight}>Field 4</span>
                </div>
                <div className={styles.boxFieldSecondaryLight}>
                  <span className={styles.fieldTextSecLight}>Field 5</span>
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

const Fixtures = () => {
  const fixtures = [
    { time: '09:00 AM', field: 'Field 1', teams: ['Glendenning FC', 'Blacktown City'], category: 'U12 Boys' },
    { time: '10:30 AM', field: 'Field 6', teams: ['Reserve United', 'Parklea FC'], category: 'Senior Men', live: true },
    { time: '12:00 PM', field: 'Field 3', teams: ['Glendenning FC', 'Rooty Hill'], category: 'U14 Girls' },
    { time: '02:00 PM', field: 'Field 4', teams: ['Glendenning FC', 'Quakers Hill'], category: 'U16 Boys' },
  ];

  return (
    <div className={styles.fixturesContainer}>
      <header className={styles.header}>
        <h2 style={{color: 'var(--color-primary)'}}>Match Day</h2>
        <div className={styles.fixturesHeader}>
          <span>Saturday, April 4th</span>
          <div className={styles.dotline} />
          <span>Glendenning Reserve</span>
        </div>
      </header>

      <div className={styles.fixtureList}>
        {fixtures.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`${styles.editorialCard} ${styles.fixtureCard}`}
          >
            <div className={styles.fixLeft}>
              <span className={styles.fixMeta}>{f.time} • {f.field}</span>
              <div className={styles.fixTeams}>
                <span className={styles.fixTeamName}>{f.teams[0]}</span>
                <span className={styles.fixVs}>vs</span>
                <span className={styles.fixTeamName}>{f.teams[1]}</span>
              </div>
            </div>
            
            <div className={styles.fixRight}>
              {f.live && <span className={styles.fixLive}>Live</span>}
              <span className={styles.fixCat}>{f.category}</span>
              <div className={styles.fixArr}><ChevronRight size={16} /></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Facilities = () => {
  const items = [
    { title: 'Main Canteen', desc: 'Hot food, coffee, and cold drinks available from 8am to 4pm on match days.', icon: Coffee },
    { title: 'Public Toilets', desc: 'Located adjacent to the canteen area. Accessible facilities available.', icon: Users },
    { title: 'Parking', desc: 'Ample parking available in the main lot. Overflow parking on the grass area during major events.', icon: Car },
    { title: 'Trophy Room', desc: 'Club history and achievements on display in the main clubhouse.', icon: Trophy },
  ];

  return (
    <div className={styles.facilContainer}>
      <header className={styles.header}>
        <h2 style={{color: 'var(--color-primary)'}}>Facilities</h2>
        <p className={styles.headerSub}>Our grounds are equipped with modern amenities to ensure a comfortable experience.</p>
      </header>

      <div className={styles.facilGrid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`${styles.editorialCard} ${styles.facilCard}`}
          >
            <div className={styles.facilIconBox}>
              <item.icon size={24} />
            </div>
            <div>
              <h3 className={styles.facilTitle}>{item.title}</h3>
              <p className={styles.facilDesc}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function InteractiveGroundMap() {
  const [screen, setScreen] = useState<Screen>('map');

  return (
    <div style={{minHeight: '80vh', position: 'relative', paddingBottom: '120px'}}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {screen === 'map' && <FieldMap />}
          {screen === 'fixtures' && <Fixtures />}
          {screen === 'facilities' && <Facilities />}
        </motion.div>
      </AnimatePresence>

      <Navigation current={screen} setScreen={setScreen} />
    </div>
  );
}
