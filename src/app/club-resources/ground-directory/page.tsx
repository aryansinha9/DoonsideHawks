import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'
import { grounds } from '@/lib/groundsData'
import styles from './page.module.css'

export const metadata = { title: 'Ground Directory — Doonside Hawks Soccer Club' }

export default function GroundDirectoryPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1600&q=80&auto=format&fit=crop" alt="Football ground" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Ground Directory</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Ground Directory</h1>
                    <p className={styles.heroSub}>Find your way to every venue.</p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <span className="section-label">Competition Venues</span>
                    <h2 className="section-heading">All Grounds</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>A guide to all venues used by the Hawks and our competition this season. Tap &quot;Get Directions&quot; to open in Maps.</p>
                    <div className={styles.groundsGrid}>
                        {grounds.map(g => (
                            <div key={g.id} className={styles.groundCard}>
                                <div className={styles.groundHeader}>
                                    <h3 className={styles.groundName}>{g.name}</h3>
                                    <span className={styles.groundSuburb}>{g.suburb}</span>
                                </div>
                                <div className={styles.groundAddress}><MapPin size={14} /> {g.address}</div>
                                <div className={styles.groundFacilities}>
                                    <h4>Facilities</h4>
                                    <div className={styles.tags}>{g.facilities.map(f => <span key={f} className={styles.tag}>{f}</span>)}</div>
                                </div>
                                <div className={styles.groundParking}>
                                    <h4>Parking</h4>
                                    <p>{g.parkingNotes}</p>
                                </div>
                                <a href={g.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <ExternalLink size={14} /> Get Directions
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
