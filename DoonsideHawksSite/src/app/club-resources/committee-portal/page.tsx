import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import CommitteeLoginForm from './CommitteeLoginForm'

const resources = [
    { title: '2026 AGM Agenda', date: 'Feb 2026', type: 'Governance', href: '#' },
    { title: '2025 Financial Report', date: 'Dec 2025', type: 'Finance', href: '#' },
    { title: 'Committee Meeting Minutes — January 2026', date: 'Jan 2026', type: 'Governance', href: '#' },
    { title: 'Club Constitution', date: 'Updated 2024', type: 'Governance', href: '#' },
    { title: 'Ground Hire Agreement 2026', date: 'Jan 2026', type: 'Operations', href: '#' },
    { title: 'Budget Forecast 2026', date: 'Feb 2026', type: 'Finance', href: '#' },
]

export default function CommitteePortalPage() {
    const cookieStore = cookies()
    const isAuthenticated = cookieStore.get('committee_auth')?.value === 'true'

    return (
        <div>
            <PageHero
                title="Committee Portal" subtitle="Internal access only."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Committee Portal'}]}
            />

            <section className="section">
                <div className="container" style={{ maxWidth: 640 }}>
                    {!isAuthenticated ? (
                        <CommitteeLoginForm />
                    ) : (
                        <div>
                            <div className={styles.welcomeBanner}>
                                <span>✓ Authenticated — Welcome, Committee Member!</span>
                            </div>
                            <h2 className="section-heading">Committee Documents</h2>
                            <div className={styles.docList}>
                                {resources.map(r => (
                                    <div key={r.title} className={styles.docRow}>
                                        <div>
                                            <div className={styles.docTitle}>{r.title}</div>
                                            <div className={styles.docMeta}>{r.type} · {r.date}</div>
                                        </div>
                                        <a href={r.href} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>Download</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
