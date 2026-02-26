import Link from 'next/link'
import { BookOpen, Calendar, MessageSquare, Users, FileText, ExternalLink } from 'lucide-react'
import styles from './page.module.css'

export const metadata = { title: "Coach & Manager's Corner — Doonside Hawks Soccer Club" }

const resources = [
    {
        category: 'Training Resources',
        icon: BookOpen,
        items: [
            { title: 'U6–U8 Session Plans', desc: 'Age-appropriate fun activities and drills for the youngest players.', href: '#' },
            { title: 'U9–U12 Technical Drills', desc: 'Ball control, passing, and positioning exercises.', href: '#' },
            { title: 'U13–U18 Tactical Frameworks', desc: 'Formation guides, set pieces, and match preparation.', href: '#' },
            { title: 'Senior Training Templates', desc: 'Session plans for senior and over-35s squads.', href: '#' },
        ],
    },
    {
        category: 'Season Information',
        icon: Calendar,
        items: [
            { title: '2026 Season Calendar', desc: 'Key dates, finals rounds, and presentation night.', href: '#' },
            { title: 'Competition Rules & Regulations', desc: 'NWFFA official competition rules for 2026.', href: '#' },
            { title: 'Wet Weather Protocol', desc: 'How to check and communicate ground closures.', href: '#' },
        ],
    },
    {
        category: 'Team Management',
        icon: Users,
        items: [
            { title: 'Manager Handbook 2026', desc: 'Everything a first-time manager needs to know.', href: '#' },
            { title: 'Match Day Checklist', desc: 'What to prepare and bring on game day.', href: '#' },
            { title: 'Player Registration Guide', desc: 'How to confirm registrations and team sheets.', href: '#' },
        ],
    },
    {
        category: 'Communication Tools',
        icon: MessageSquare,
        items: [
            { title: 'Team App Setup Guide', desc: 'How to set up your team\'s communication channel.', href: '#' },
            { title: 'Parent Communication Templates', desc: 'Ready-to-use email templates for common messages.', href: '#' },
            { title: 'Incident Report Form', desc: 'For documenting any on-field incidents during training or matches.', href: '#' },
        ],
    },
]

export default function CoachesCornerPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=1600&q=80&auto=format&fit=crop" alt="Coaching" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Coach & Manager&apos;s Corner</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Coach & Manager&apos;s Corner</h1>
                    <p className={styles.heroSub}>Everything you need to prepare, train, and lead your team.</p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <span className="section-label">Resources Hub</span>
                    <h2 className="section-heading">Resources for Team Officials</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-6)' }}>
                        A dedicated hub for Hawks coaches and team managers. Browse by category to find the resources you need.
                    </p>
                    <div className={styles.resourcesGrid}>
                        {resources.map(({ category, icon: Icon, items }) => (
                            <div key={category} className={styles.categorySection}>
                                <div className={styles.catHeader}>
                                    <div className={styles.catIcon}><Icon size={20} /></div>
                                    <h3 className={styles.catTitle}>{category}</h3>
                                </div>
                                <div className={styles.items}>
                                    {items.map(item => (
                                        <a key={item.title} href={item.href} className={styles.resourceItem}>
                                            <div>
                                                <div className={styles.itemTitle}>{item.title}</div>
                                                <div className={styles.itemDesc}>{item.desc}</div>
                                            </div>
                                            <ExternalLink size={14} className={styles.itemArrow} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
