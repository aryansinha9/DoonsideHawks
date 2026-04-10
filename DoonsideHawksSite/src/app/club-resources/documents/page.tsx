import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { FileText, Download } from 'lucide-react'
import styles from './page.module.css'

export const metadata = { title: 'Documents Library — Doonside Hawks Soccer Club' }

export default function DocumentsPage() {
    const documents = [
        { title: "COACH, MANAGER & SPECTATOR BEHAVIOUR", href: "/coach_and_spectator_behaviour.pdf" },
        { title: "CODE of CONDUCT (Parents,Player,Officials and Members)", href: "/respect_program_summary.pdf" },
        { title: "Images of Children (Australian Sports Commission)", href: "/images-of-children-asc-1__1_.pdf" },
        { title: "Ground Official Documents", href: "/ground_official.pdf" },
        { title: "FootballNSW Social Media Policy", href: "/fnsw_social_media_policy.pdf" },
        { title: "Insurance/ Injury Documents", href: "/fnsw_personal_injury_claim_form_2014.pdf" },
        { title: "DHSC By Laws", href: "/dhsc_objects_rules___by_laws_2009.pdf" },
        { title: "DHSC Regulations", href: "/dhsc_regulations_2016.pdf" },
        { title: "DHSC Constitution", href: "/dhsc_constitution_2016.pdf" }
    ]

    return (
        <div>
            <PageHero
                title="Documents Library" subtitle="Official club policies, regulations, and guidelines."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Documents Library'}]}
            />

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
                            <a href={doc.href} download key={idx} className={styles.docCard}>
                                <div className={styles.docIcon}>
                                    <FileText size={24} />
                                </div>
                                <h3 className={styles.docTitle}>{doc.title}</h3>
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
