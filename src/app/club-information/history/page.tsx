import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'Club History — Doonside Hawks Soccer Club' }


export default function HistoryPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1600&q=80&auto=format&fit=crop" alt="Club History" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Club History</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Our Story</h1>
                    <p className={styles.heroSub}>Over five decades of football, family, and community.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="section-label">Est. 1981</span>
                    <h2 className="section-heading">The Doonside Hawks Story</h2>
                    <p className={styles.intro}>
                        The Doonside Hawks Soccer Club was not founded in a boardroom. It was founded on a patch of grass in Western Sydney, by a handful of families who believed that their community deserved a football club to call their own. More than fifty years on, that belief has grown into something extraordinary — a club woven into the fabric of Doonside, Blacktown, and the surrounding suburbs.
                    </p>
                    <p className={styles.intro}>
                        This is our story.
                    </p>

                    <div className={styles.timeline} style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
                        <h3 className="section-heading">Detailed Timeline Coming Soon...</h3>
                    </div>

                    <div className={styles.closingStatement}>
                        <p className={styles.closingTagline}>#ProudToBeAHawk</p>
                        <p>The best chapters of the Hawks story are still being written. We invite you to be part of them.</p>
                        <Link href="/registration" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>Join the Hawks in 2026 →</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
