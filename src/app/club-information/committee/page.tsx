import Link from 'next/link'
import { committeeMembers } from '@/lib/committeeData'
import styles from './page.module.css'

export const metadata = { title: 'Committee Profiles — Doonside Hawks Soccer Club' }

export default function CommitteePage() {
    const featured = committeeMembers.filter(m => m.featured)
    const others = committeeMembers.filter(m => !m.featured)

    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop" alt="Committee" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Committee Profiles</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Meet Our Committee</h1>
                    <p className={styles.heroSub}>The dedicated volunteers who make the Hawks run.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">Club Leadership</span>
                    <h2 className="section-heading">Serving Our Community</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-6)' }}>
                        Our committee is made entirely of volunteers — parents, past players, and community members who give their time because they love this club. We owe them everything.
                    </p>

                    {/* Featured: President */}
                    {featured.map(m => (
                        <div key={m.id} className={styles.featuredCard}>
                            <div className={styles.featuredAvatar}>
                                <span className={styles.avatarInitial}>{m.name[0]}</span>
                            </div>
                            <div className={styles.featuredInfo}>
                                <span className={styles.memberRole}>{m.role}</span>
                                <h2 className={styles.memberName}>{m.name}</h2>
                                <p className={styles.memberBio}>{m.bio}</p>
                            </div>
                        </div>
                    ))}

                    {/* Others */}
                    <div className={styles.committeeGrid}>
                        {others.map(m => (
                            <div key={m.id} className={styles.memberCard}>
                                <div className={styles.memberAvatar}>
                                    <span className={styles.avatarInitial}>{m.name[0]}</span>
                                </div>
                                <span className={styles.memberRole}>{m.role}</span>
                                <h3 className={styles.memberName}>{m.name}</h3>
                                <p className={styles.memberBio}>{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
