import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'Life Members — Doonside Hawks Soccer Club' }

type MemberType = 'S' | '15' | '';

type LifeMember = {
    id: number | string;
    name: string;
    year: string;
    type: MemberType;
};

// Clean dataset bridging the exact 100 slots required
const allMembers: LifeMember[] = [
    // --- COL 1 (1-25) ---
    { id: 1, name: 'Fred Sammut', year: '', type: 'S' }, // Missing year in raw data
    { id: 2, name: '*Graham Palmer', year: '', type: 'S' },
    { id: 3, name: 'Richie Nicholls', year: '', type: 'S' },
    { id: 4, name: 'Phil McColl', year: '', type: 'S' },
    { id: 5, name: 'Steve Wye', year: '', type: 'S' },
    { id: 6, name: '', year: '', type: '' },
    { id: 7, name: 'Margaret McColl', year: '', type: 'S' },
    { id: 8, name: '*Jim Broadhurst', year: '', type: 'S' },
    { id: 9, name: '*Barry Park', year: '', type: 'S' },
    { id: 10, name: 'Vickie Beattie', year: '', type: 'S' },
    { id: 11, name: 'Neville Smith', year: '', type: 'S' },
    { id: 12, name: 'Sandra Putland', year: '', type: 'S' },
    { id: 13, name: 'Geoff Collis', year: '1995', type: 'S' },
    { id: 14, name: 'Michael Sammut', year: '1995', type: '15' },
    { id: 15, name: 'Sally Wynd', year: '1997', type: 'S' },
    { id: 16, name: 'Craig Smith', year: '1998', type: '15' },
    { id: 17, name: 'Jim McShane', year: '1999', type: 'S' },
    { id: 18, name: 'Barry Heydon', year: '2000', type: 'S' },
    { id: 19, name: 'Gail Scott', year: '2001', type: 'S' },
    { id: 20, name: 'Mark Cook', year: '2001', type: '15' },
    { id: 21, name: 'Gail Hubbard', year: '2002', type: 'S' },
    { id: 22, name: 'Barry Deemer', year: '2003', type: 'S' },
    { id: 23, name: 'Jed Taylor', year: '2003', type: '15' },
    { id: 24, name: 'David Hubbard', year: '2003', type: 'S' },
    { id: 25, name: 'Dane Sim', year: '2003', type: 'S' },
    
    // --- COL 2 (26-50) ---
    { id: 26, name: 'Brendon Houliston', year: '2004', type: '15' },
    { id: 27, name: 'Eddie Seeto', year: '2004', type: 'S' },
    { id: 28, name: 'Mark Robertson', year: '2004', type: 'S' },
    { id: 29, name: 'David Coleman', year: '2005', type: '15' },
    { id: 30, name: 'Ray Hammond', year: '2005', type: 'S' },
    { id: 31, name: 'Les Wyld', year: '2005', type: 'S' },
    { id: 32, name: 'Therese Ruming', year: '2006', type: 'S' },
    { id: 33, name: 'Glenn Xuereb', year: '2007', type: '15' },
    { id: 34, name: 'Ivan Ruming', year: '2007', type: 'S' },
    { id: 35, name: 'Luke Hammond', year: '2008', type: '15' },
    { id: 36, name: 'Justin Wyld', year: '2008', type: '15' },
    { id: 37, name: 'Eric Sondaar', year: '2008', type: 'S' },
    { id: 38, name: 'Phil Rushworth', year: '2008', type: 'S' },
    { id: 39, name: 'Nathan Martyn', year: '2009', type: '15' },
    { id: 40, name: 'Malcolm Withers', year: '2009', type: 'S' },
    { id: 41, name: 'Neil Martyn', year: '2009', type: 'S' },
    { id: 42, name: 'Shannon B-Ward', year: '2010', type: 'S' },
    { id: 43, name: 'Daniel Ruming', year: '2011', type: '15' },
    { id: 44, name: 'Fran Lovric', year: '2011', type: 'S' },
    { id: 45, name: 'Ian Wedgwood', year: '2012', type: 'S' },
    { id: 46, name: 'Mark Scriven', year: '2012', type: '15' },
    { id: 47, name: 'Mark Sondaar', year: '2012', type: '15' },
    { id: 48, name: 'Joshua Sim', year: '2012', type: '15' },
    { id: 49, name: 'Shayne Cook', year: '2013', type: '15' },
    { id: 50, name: 'Nathan Webber', year: '2013', type: '15' },

    // --- COL 3 (51-75) ---
    { id: 51, name: 'Gail Sondaar', year: '2013', type: 'S' },
    { id: 52, name: 'James Harris', year: '2014', type: '15' },
    { id: 53, name: 'Michael Ruming', year: '2014', type: '15' },
    { id: 54, name: 'Andrew Sondaar', year: '2014', type: '15' },
    { id: 55, name: 'Jordan Veleski', year: '2014', type: '15' },
    { id: 56, name: 'Christain Talbot', year: '2014', type: 'S' },
    { id: 57, name: 'Justin Copland', year: '2015', type: '15' },
    { id: 58, name: 'Andrew Housbey', year: '2015', type: '15' },
    { id: 59, name: 'Thomas Marsh', year: '2015', type: '15' },
    { id: 60, name: 'Erin Miller', year: '2015', type: '15' },
    { id: 61, name: 'Rose Copland', year: '2015', type: 'S' },
    { id: 62, name: 'Jeff Harris', year: '2015', type: 'S' },
    { id: 63, name: 'Scott Jackson', year: '2016', type: '15' },
    { id: 64, name: 'Marcel Haber', year: '2016', type: 'S' },
    { id: 65, name: 'Luke Miller', year: '2017', type: '15' },
    { id: 66, name: 'James Miller', year: '2017', type: 'S' },
    { id: 67, name: 'Brent Copland', year: '2017', type: 'S' },
    { id: 68, name: 'Justin Walsh', year: '2018', type: '15' },
    { id: 69, name: 'Sean O\'Connor', year: '2018', type: 'S' },
    { id: 70, name: 'Enza Kursun', year: '2018', type: 'S' },
    { id: 71, name: 'Justin Campbell', year: '2019', type: '15' },
    { id: 72, name: 'Ryan Miller', year: '2019', type: 'S' },
    { id: 73, name: 'Nathan Haber', year: '2020', type: '15' },
    { id: 74, name: 'Mikayla Harris', year: '2020', type: '15' },
    { id: 75, name: 'Vanessa Cook', year: '2020', type: 'S' },

    // --- COL 4 (76-100) ---
    { id: 76, name: 'Caitlyn O\'Connor', year: '2021', type: '15' },
    { id: 77, name: 'Josef Valsamis', year: '2021', type: '15' },
    { id: 78, name: 'Cheyanne Withers', year: '2021', type: '15' },
    { id: '79-100', name: '', year: '', type: '' }
]

// Slice helper to chunk columns correctly 1-25 | 26-50 | 51-75 | 76-100
const columns = [
    allMembers.slice(0, 25),
    allMembers.slice(25, 50),
    allMembers.slice(50, 75),
    allMembers.slice(75, 79) // Stops precisely at the end block
]

export default function LifeMembersPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600&q=80&auto=format&fit=crop" alt="Life Members" />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.65)', zIndex: 1 }} />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Life Members</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Honour Board</h1>
                    <p className={styles.heroSub}>Doonside Hawks Soccer Club Life Members</p>
                </div>
            </section>

            <section className="section bg-warm-fog">
                <div className="container" style={{ maxWidth: '1400px' }}>
                    
                    <div className={styles.intro}>
                        <span className="section-label">The Highest Honour</span>
                        <h2 className="section-heading">Life Membership</h2>
                        <p className="section-intro">
                        Life Membership is the greatest honour the Doonside Hawks Soccer Club can bestow. It is awarded by the committee to individuals whose contributions to the club have been extraordinary, sustained, and selfless.
                        </p>
                    </div>

                    {/* Massive 4-Column Board Grid */}
                    <div className={styles.boardContainer}>
                        {columns.map((colData, colIndex) => (
                            <div key={colIndex} className={styles.boardCol}>
                                <div className={styles.colHeader}>
                                    <div>#</div>
                                    <div>Life Member</div>
                                    <div style={{textAlign: 'center'}}>Year</div>
                                    <div style={{textAlign: 'center'}}>Type</div>
                                </div>
                                {colData.map((m) => {
                                    const isDeceased = m.name.startsWith('*');
                                    const cleanName = isDeceased ? m.name.substring(1) : m.name;

                                    return (
                                        <div key={m.id} className={styles.boardRow}>
                                            <div className={styles.cellId}>{m.id}</div>
                                            <div className={styles.cellName}>
                                                {isDeceased && <span className={styles.asterisk}>* </span>}
                                                {cleanName}
                                            </div>
                                            <div className={styles.cellYear}>{m.year}</div>
                                            <div className={styles.cellType}>
                                                {m.type === 'S' && <span className={styles.badgeS}>S</span>}
                                                {m.type === '15' && <span className={styles.badge15}>15</span>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Legend Component */}
                    <div className={styles.legend}>
                        <h4 className={styles.legendTitle}>Legend</h4>
                        <div className={styles.legendRow}><span className={styles.asterisk}>*</span> Deceased</div>
                        <div className={styles.legendRow}><span className={styles.badgeS}>S</span> Service to Club</div>
                        <div className={styles.legendRow}><span className={styles.badge15}>15</span> 15 Year Player</div>
                    </div>

                </div>
            </section>
        </div>
    )
}
