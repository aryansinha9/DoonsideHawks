import Link from 'next/link'
import { honourboard } from '@/lib/honourboardData'
import styles from './page.module.css'

export const metadata = { title: 'Honourboard — Doonside Hawks Soccer Club' }

export default function HonourboardPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg" style={{ background: 'var(--color-charcoal-deep)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.3) 0%, rgba(20,10,0,0.9) 100%)', zIndex: 1 }} />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Honourboard</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Honourboard</h1>
                    <p className={styles.heroSub}>Celebrating our champions.</p>
                </div>
            </section>

            <section className={`section ${styles.boardSection}`}>
                <div className="container">
                    <span className="section-label">Awards & Recognition</span>
                    <h2 className="section-heading">Past Award Winners</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-6)' }}>
                        Each year the Doonside Hawks recognise outstanding players and volunteers at our end-of-season presentation. These are the names that have earned their place on our honourboard.
                    </p>
                    <div className={styles.awardsGrid}>
                        {honourboard.map(({ category, winners }) => (
                            <div key={category} className={styles.awardPanel}>
                                <h3 className={styles.awardCategory}>{category}</h3>
                                <div className={styles.winnersList}>
                                    {winners.map(({ year, name }) => (
                                        <div key={year} className={styles.winnerRow}>
                                            <span className={styles.winnerYear}>{year}</span>
                                            <span className={styles.winnerName}>{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
