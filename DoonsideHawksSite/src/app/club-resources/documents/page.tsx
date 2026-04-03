import Link from 'next/link'
import { FileText, Download } from 'lucide-react'
import styles from './page.module.css'

export const metadata = { title: 'Documents Library — Doonside Hawks Soccer Club' }

export default function DocumentsPage() {
    const documents = [
        "COACH, MANAGER & SPECTATOR BEHAVIOUR",
        "CODE of CONDUCT (Parents,Player,Officials and Members)",
        "Images of Children (Australian Sports Commission)",
        "Ground Official Documents",
        "FootballNSW Social Media Policy",
        "Insurance/ Injury Documents",
        "DHSC By Laws",
        "DHSC Regulations",
        "DHSC Constitution"
    ]

    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1600&q=80&auto=format&fit=crop" alt="Documents and Paperwork" />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.65)', zIndex: 1 }} />
                <div className="hero-content">
                    <p className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Documents Library</span>
                    </p>
                    <h1 className={`display ${styles.heroTitle}`}>Documents Library</h1>
                    <p className={styles.heroSub}>Official club policies, regulations, and guidelines.</p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container" style={{maxWidth: '1200px'}}>
                    
                    <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '48px'}}>
                        <span className="section-label">Official Resources</span>
                        <h2 className="section-heading">Club Documents</h2>
                        <p style={{fontSize: '17px', lineHeight: 1.8, color: 'var(--color-secondary-text)'}}>
                            Welcome to the central document repository for the Doonside Hawks Soccer Club. Below you will find all policies, bylaws, and official guidelines necessary for players, officials, and spectators. Click any document card to download or view the PDF.
                        </p>
                    </div>

                    <div className={styles.docGrid}>
                        {documents.map((doc, idx) => (
                            <a href="#" key={idx} className={styles.docCard}>
                                <div className={styles.docIcon}>
                                    <FileText size={24} />
                                </div>
                                <h3 className={styles.docTitle}>{doc}</h3>
                                <div className={styles.docLink}>
                                    Download PDF <Download size={14} />
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}
