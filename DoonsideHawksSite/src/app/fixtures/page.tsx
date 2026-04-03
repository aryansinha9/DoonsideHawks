import Link from 'next/link'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { fixtures, formatDate } from '@/lib/fixturesData'
import { grounds } from '@/lib/groundsData'
import InteractiveGroundMap from '@/components/InteractiveGroundMap'
import styles from './page.module.css'

export const metadata = {
    title: 'Fixtures & Grounds — Doonside Hawks Soccer Club',
    description: 'View the 2026 season fixtures and find your way to our grounds.',
}

export default function FixturesPage() {
    return (
        <div>
            {/* Hero */}
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80&auto=format&fit=crop"
                        alt="Football match action"
                    />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Fixtures</span>
                    </p>
                    <h1 className={`display ${styles.heroTitle}`}>Fixtures &amp; Grounds</h1>
                    <p className={styles.heroSub}>Know Before You Go.</p>
                </div>
            </section>

            {/* Fixtures */}
            <section className="section">
                <div className="container">
                    <span className="section-label">2026 Season</span>
                    <h2 className="section-heading">Upcoming Fixtures</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>
                        All fixtures are subject to change. Check back regularly or follow us on social media for updates.
                    </p>

                    <div className={styles.fixtureTable}>
                        <div className={styles.tableHead}>
                            <span>Date &amp; Time</span>
                            <span>Match</span>
                            <span>Competition</span>
                            <span>Venue</span>
                            <span>H/A</span>
                        </div>
                        {fixtures.map((f) => (
                            <div key={f.id} className={styles.tableRow}>
                                <div className={styles.dateCell}>
                                    <span className={styles.dateText}><Calendar size={12} /> {formatDate(f.date)}</span>
                                    <span className={styles.timeText}><Clock size={11} /> {f.time}</span>
                                </div>
                                <div className={styles.matchCell}>
                                    <span className={styles.teamName}>{f.homeTeam}</span>
                                    <span className={styles.vsLabel}>vs</span>
                                    <span className={styles.teamName}>{f.awayTeam}</span>
                                </div>
                                <div className={styles.compCell}>{f.competition}</div>
                                <div className={styles.venueCell}>
                                    <MapPin size={12} /> {f.venue}
                                </div>
                                <div className={styles.haCell}>
                                    <span className={`${styles.badge} ${f.isHome ? styles.home : styles.away}`}>
                                        {f.isHome ? 'HOME' : 'AWAY'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.actionButtons}>
                        <a href="https://bdsfa.dribl.com/fixtures/?date_range=default&season=3vmZMMMdq5&timezone=Australia%2FSydney" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View Full Fixtures on Dribl
                        </a>
                        <Link href="/club-resources/ground-directory" className="btn btn-ghost">
                            Grounds Directory
                        </Link>
                    </div>
                </div>
            </section>

            {/* Interactive Ground Map Section */}
            <section className={`section section--fog`}>
                <div className="container" style={{maxWidth: '1200px'}}>
                    <InteractiveGroundMap />
                </div>
            </section>
        </div>
    )
}
