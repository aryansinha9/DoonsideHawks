import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { MapPin } from 'lucide-react'
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
            <PageHero
                title="Fixtures &amp; Grounds" subtitle="Know Before You Go."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Fixtures'}]}
            />

            {/* Fixtures */}
            <section className="section">
                <div className="container">
                    <span className="section-label">2026 Season</span>
                    <h2 className="section-heading">Upcoming Fixtures</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>
                        All fixtures are subject to change. Check back regularly or follow us on social media for updates.
                    </p>

                    <div style={{ padding: '64px 32px', backgroundColor: 'var(--color-surface-lowest)', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-outline)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
                        <span style={{ fontSize: '48px' }}>📅</span>
                        <div>
                            <h3 style={{ fontSize: 'var(--text-h3)', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', marginBottom: '8px' }}>Official Fixtures System</h3>
                            <p style={{ color: 'var(--color-secondary-text)', maxWidth: '400px' }}>To ensure you always have the most accurate, live, and up-to-date match times, venues, and status updates, Doonside Hawks uses the official Blacktown District Soccer Football Association (BDSFA) DRIBL system.</p>
                        </div>
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
