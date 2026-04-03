import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'Social Feed — Doonside Hawks Soccer Club' }

export default function SocialPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80&auto=format&fit=crop" alt="Social" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Social</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Hawks Social</h1>
                    <p className={styles.heroSub}>Connect with us across our community channels.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">Live Updates</span>
                    <h2 className="section-heading">Social Wall</h2>

                    <div className={styles.socialGrid}>
                        {/* Placeholder Facebook Post */}
                        <div className={styles.socialCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>
                                    <span style={{color: 'white', fontWeight: 'bold'}}>F</span>
                                </div>
                                <div className={styles.headerText}>
                                    <span className={styles.author}>Doonside Hawks FC</span>
                                    <span className={styles.timestamp}>2 hours ago via Facebook</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.textContent}>
                                    Registration for the 2026 season officially opens this weekend! Get in early to secure your spot. We cannot wait to welcome back our returning players and meet the new ones. 🔴⚫️🦅
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.footerAction}>
                                    View on Facebook →
                                </a>
                            </div>
                        </div>

                        {/* Placeholder Instagram Post */}
                        <div className={styles.socialCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>
                                    <span style={{color: 'white', fontWeight: 'bold'}}>I</span>
                                </div>
                                <div className={styles.headerText}>
                                    <span className={styles.author}>@doonsidehawksfc</span>
                                    <span className={styles.timestamp}>1 day ago via Instagram</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.mediaContent}>
                                    <img src="https://images.unsplash.com/photo-1543326164-9686034f593e?w=600&h=600&fit=crop" alt="Instagram match action" />
                                </div>
                                <div className={styles.textContent}>
                                    What a brilliant goal from the Under 14s this weekend!
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerAction}>
                                    View on Instagram →
                                </a>
                            </div>
                        </div>

                        {/* Placeholder YouTube Post */}
                        <div className={styles.socialCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>
                                    <span style={{color: 'white', fontWeight: 'bold'}}>Y</span>
                                </div>
                                <div className={styles.headerText}>
                                    <span className={styles.author}>Doonside Hawks TV</span>
                                    <span className={styles.timestamp}>1 week ago via YouTube</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.videoContent}>
                                    <iframe 
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                        title="Highlights"
                                        allowFullScreen
                                    />
                                </div>
                                <div className={styles.textContent}>
                                    Premier League Round 10 Highlights vs Quakers Hill.
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.footerAction}>
                                    Watch Full Video →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.techGuide}>
                        <h3>Technical Implementation Guide</h3>
                        <p>To automate live feeds onto your Social Wall linking back from your active Doonside Hawks Facebook presence, two standard methods are supported for future integration:</p>
                        
                        <div className={styles.techMethods}>
                            <div className={styles.techMethod}>
                                <h4>Method A (Easiest Integration)</h4>
                                <p>Use the Official Facebook Page Plugin API. This allows you to embed a pre-built iframe directly into the React component above, instantly handling authentication and layout natively via Meta servers.</p>
                                <a href="https://developers.facebook.com/docs/plugins/page-plugin/" target="_blank" rel="noopener noreferrer">Read Documentation →</a>
                            </div>

                            <div className={styles.techMethod}>
                                <h4>Method B (Full Control)</h4>
                                <p>Use the Facebook Graph API to fetch live data behind the scenes. You authenticate the Next.js server with a Page Access Token to ping the <code>/page-id/posts</code> edge, securely returning JSON payloads which can be rendered directly into the custom React templates mapping above.</p>
                                <a href="https://developers.facebook.com/docs/graph-api/" target="_blank" rel="noopener noreferrer">Read Documentation →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
