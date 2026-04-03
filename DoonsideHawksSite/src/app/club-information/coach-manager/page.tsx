import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: "Coach & Manager's Corner — Doonside Hawks Soccer Club" }

export default function CoachManagerPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80&auto=format&fit=crop" alt="Football Coach" />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.65)', zIndex: 1 }} />
                <div className="hero-content">
                    <p className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Coach & Manager's Corner</span>
                    </p>
                    <h1 className={`display ${styles.heroTitle}`}>Coach & Manager's Corner</h1>
                    <p className={styles.heroSub}>Resources and requirements for our dedicated volunteers.</p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className={styles.contentWrapper}>
                        <h2 className="section-heading" style={{fontSize: '28px', marginBottom: '24px'}}>Our Volunteers</h2>
                        <p>
                            All Coaches, Managers & Committee are parents and volunteers from within the club and or team.
                        </p>
                        
                        <div className={styles.highlightBox}>
                            <strong>PlayFootball Registration:</strong>
                            <p style={{margin: '8px 0 0 0'}}>
                                All Coaches and Managers need to register on <a href="https://www.playfootball.com.au" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)', textDecoration: 'underline'}}>www.playfootball.com.au</a> by the commencement of normal season. This includes uploading a photo of yourself so it can be uploaded to the electronic match sheets.
                            </p>
                        </div>

                        <p>
                            A <strong>WWC – Working With Children Check</strong> needs to be completed through the Service NSW Website by all coaches, managers and volunteers and then details emailed to <a href="mailto:mpo@doonsidehawks.com.au" style={{color: 'var(--color-primary)', fontWeight: 600}}>mpo@doonsidehawks.com.au</a> (MPO - Member Protection Officer) before the competition starts.
                        </p>
                        
                        <p>
                            All coaches are encouraged to become accredited through coaching courses run through the club. These courses equip coaches with up to date training techniques and outline the required drills and techniques to conduct a training session.
                        </p>

                        <div className={styles.resourceGrid}>
                            <div className={styles.resourceCard}>
                                <h3 className={styles.resourceTitle}>Miniroos Grassroots Football Coaching Certificate</h3>
                                <a href="#" className={`btn btn-primary ${styles.btnDownload}`}>Download PDF</a>
                            </div>
                            <div className={styles.resourceCard}>
                                <h3 className={styles.resourceTitle}>Doonside Hawks Soccer Club Coaches and Managers Booklet</h3>
                                <a href="#" className={`btn btn-primary ${styles.btnDownload}`}>Download PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
