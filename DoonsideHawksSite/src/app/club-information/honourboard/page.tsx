import Link from 'next/link'
import { juniorGolden, juniorSilver, seniorGolden, seniorSilver } from '@/lib/goalsData'
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



            {/* Golden & Silver Goals Section */}
            <section className={`section bg-warm-fog`}>
                <div className="container">
                    <span className="section-label">Team Achievements</span>
                    <h2 className="section-heading">Golden & Silver Goals</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-6)' }}>
                        Awarded to the most dominant attacking teams across the entire season.
                    </p>

                    <h3 style={{fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontSize: '24px', marginBottom: '24px'}}>Junior Divisions</h3>
                    <div className={styles.goalsGrid}>
                        {/* Junior Golden */}
                        <div className={styles.awardPanel} style={{padding: '0', overflow: 'hidden'}}>
                            <h4 style={{padding: '16px', margin: 0, fontFamily: 'var(--font-display)', backgroundColor: 'var(--color-surface-lowest)'}}>Golden Goals (Junior)</h4>
                            <table className={styles.goalTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.goalYear}>Year</th>
                                        <th>Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {juniorGolden.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className={styles.goalYear}>{item.year}</td>
                                            <td className={styles.goalTeam}>{item.team}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Junior Silver */}
                        <div className={styles.awardPanel} style={{padding: '0', overflow: 'hidden'}}>
                            <h4 style={{padding: '16px', margin: 0, fontFamily: 'var(--font-display)', backgroundColor: 'var(--color-surface-lowest)'}}>Silver Goals (Junior)</h4>
                            <table className={styles.goalTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.goalYear}>Year</th>
                                        <th>Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {juniorSilver.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className={styles.goalYear}>{item.year}</td>
                                            <td className={styles.goalTeam}>{item.team}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h3 style={{fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontSize: '24px', margin: '48px 0 24px'}}>Senior Divisions</h3>
                    <div className={styles.goalsGrid}>
                        {/* Senior Golden */}
                        <div className={styles.awardPanel} style={{padding: '0', overflow: 'hidden'}}>
                            <h4 style={{padding: '16px', margin: 0, fontFamily: 'var(--font-display)', backgroundColor: 'var(--color-surface-lowest)'}}>Golden Goals (Senior)</h4>
                            <table className={styles.goalTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.goalYear}>Year</th>
                                        <th>Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {seniorGolden.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className={styles.goalYear}>{item.year}</td>
                                            <td className={styles.goalTeam}>{item.team}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Senior Silver */}
                        <div className={styles.awardPanel} style={{padding: '0', overflow: 'hidden'}}>
                            <h4 style={{padding: '16px', margin: 0, fontFamily: 'var(--font-display)', backgroundColor: 'var(--color-surface-lowest)'}}>Silver Goals (Senior)</h4>
                            <table className={styles.goalTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.goalYear}>Year</th>
                                        <th>Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {seniorSilver.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className={styles.goalYear}>{item.year}</td>
                                            <td className={styles.goalTeam}>{item.team}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={styles.note}>
                        Note: Numbers in parentheses are goal tallies for the winning team. Senior tables begin from 1988 as there are no entries prior to that year. Blank rows (2018–2024) indicate years where awards were not contested or recorded.
                    </div>
                </div>
            </section>
        </div>
    )
}
