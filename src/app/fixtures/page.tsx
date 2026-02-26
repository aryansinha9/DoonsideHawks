import Link from 'next/link'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { fixtures, formatDate } from '@/lib/fixturesData'
import { grounds } from '@/lib/groundsData'
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

                    <div className={styles.externalCTA}>
                        <p>For the complete fixture list across all age groups and divisions, visit the official Football NSW website.</p>
                        <a href="https://www.footballnsw.com.au" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Full Fixtures on Football NSW →
                        </a>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className={`section section--fog`}>
                <div className="container">
                    <span className="section-label">Our Home</span>
                    <h2 className="section-heading">Home Ground</h2>
                    <div className={styles.mapGrid}>
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1!2d150.85!3d-33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sDoonside%20NSW%202767%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: 12 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Doonside Reserve location"
                            />
                        </div>
                        <div className={styles.groundInfo}>
                            <h3 className={styles.groundName}>{grounds[0].name}</h3>
                            <div className={styles.groundDetail}>
                                <MapPin size={16} className={styles.groundIcon} />
                                <span>{grounds[0].address}</span>
                            </div>
                            <div className={styles.groundFacilities}>
                                <h4>Facilities</h4>
                                <div className={styles.facilityTags}>
                                    {grounds[0].facilities.map(f => (
                                        <span key={f} className={styles.facilityTag}>{f}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.groundParking}>
                                <h4>Parking</h4>
                                <p>{grounds[0].parkingNotes}</p>
                            </div>
                            <a href={grounds[0].mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Get Directions →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
