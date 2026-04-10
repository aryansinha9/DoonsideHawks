import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { committeeMembers } from '@/lib/committeeData'
import styles from './page.module.css'

export const metadata = { title: 'Committee Profiles — Doonside Hawks Soccer Club' }

export default function CommitteePage() {
    const featured = committeeMembers.filter(m => m.featured)
    const others = committeeMembers.filter(m => !m.featured)

    return (
        <div>
            <PageHero
                title="Meet Our Committee" subtitle="The dedicated volunteers who make the Hawks run."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Committee Profiles'}]}
            />

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
                                <span className={styles.avatarInitial}>{m.name !== 'Vacant' ? m.name[0] : 'V'}</span>
                            </div>
                            <div className={styles.featuredInfo}>
                                <span className={styles.memberRole}>{m.role}</span>
                                <h2 className={styles.memberName}>{m.name}</h2>
                                {m.email && (
                                    <a href={`mailto:${m.email}`} className={styles.emailLink}>
                                        {m.email}
                                    </a>
                                )}
                                {m.bio && <p className={styles.memberBio}>{m.bio}</p>}
                            </div>
                        </div>
                    ))}

                    {/* Others */}
                    <div className={styles.committeeGrid}>
                        {others.map(m => (
                            <div key={m.id} className={styles.memberCard}>
                                <div className={styles.memberAvatar}>
                                    <span className={styles.avatarInitial}>{m.name !== 'Vacant' ? m.name[0] : 'V'}</span>
                                </div>
                                <span className={styles.memberRole}>{m.role}</span>
                                <h3 className={styles.memberName}>{m.name}</h3>
                                {m.email && (
                                    <a href={`mailto:${m.email}`} className={styles.emailLink}>
                                        {m.email}
                                    </a>
                                )}
                                {m.bio && <p className={styles.memberBio}>{m.bio}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
