'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Mail } from 'lucide-react'
import styles from './page.module.css'

const faqs = [
    { q: 'What should my child wear to training?', a: 'Football boots (moulded studs are best for training ground surfaces), shin pads, and comfortable sportswear. In colder months, bring an extra layer as training can be on cooler evenings. The club jersey is for match days only.' },
    { q: 'What time should we arrive for training?', a: 'We ask that players arrive 10 minutes before the scheduled session start time to allow for warm-up and any team communications. Your team manager will confirm the specific training time and location for your team.' },
    { q: 'What do I do if my child is injured during a match?', a: 'All Hawks match days have a first aid officer present. Alert the referee and your team manager immediately if a child is injured. Serious injuries should be referred to emergency services. An incident report form must be completed by the manager.' },
    { q: 'How is my child\'s team selected?', a: 'Younger age groups (Under-6 to Under-10) are placed into teams that balance geographic location and friend groups where possible. From Under-11 upward, team placement may be informed by player assessments conducted by the coaching staff.' },
    { q: 'Is there a uniform swap option?', a: 'Yes. If a jersey purchased at registration no longer fits your player, bring it to the next training session and speak to your team manager. The club maintains a small stock of alternate sizes for exchange where available.' },
    { q: 'Can players train with a different team if they need to miss their usual session?', a: 'Players should always attend their own team\'s sessions. If there are exceptional circumstances, speak with your team manager, who can arrange a short-term arrangement with another group if appropriate.' },
    { q: 'Who do I contact about a concern regarding my child\'s welfare?', a: 'The Doonside Hawks take player welfare extremely seriously. Contact our Child Safety Officer, Anita Walsh, via the club\'s general email address. All correspondence is handled in strict confidence.' },
]

export default function PlayersParentsPage() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1600&q=80&auto=format&fit=crop" alt="Kids playing football" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Players & Parents</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Players & Parents</h1>
                    <p className={styles.heroSub}>Everything your family needs to know about playing for the Hawks.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}><h3 className={styles.infoTitle}>What to Expect at Training</h3><p>Our training sessions run for approximately 60–75 minutes and are structured around age-appropriate development. Younger juniors focus on fun activities that build basic movement and ball familiarity. Older juniors and seniors progress to tactical and technical development. Sessions are led by registered coaches who hold a current Working with Children Check.</p></div>
                        <div className={styles.infoCard}><h3 className={styles.infoTitle}>Kit & Equipment</h3><p>Your registration fee includes your club jersey and shorts. Players must also bring their own football boots (moulded studs recommended), shin pads (compulsory), and a water bottle. Socks can be purchased from the canteen. Second-hand kit may be available — ask your team manager.</p></div>
                        <div className={styles.infoCard}><h3 className={styles.infoTitle}>Player Welfare</h3><p>Every player at Doonside Hawks deserves to feel safe, respected, and included. Our coaches and managers are bound by the Football Australia Code of Conduct. Any concerns about player welfare should be directed to our Child Safety Officer, Anita Walsh, via the club email.</p></div>
                        <div className={styles.infoCard}><h3 className={styles.infoTitle}>Contact Your Manager</h3><p>Your team manager is your first point of contact for anything related to your player&apos;s team — training times, match schedules, kit queries, and more. Their contact details will be shared via your team&apos;s communication channel when the season begins.</p></div>
                    </div>
                </div>
            </section>

            <section className="section section--fog">
                <div className="container" style={{ maxWidth: 820 }}>
                    <span className="section-label">Common Questions</span>
                    <h2 className="section-heading">FAQ for Players & Parents</h2>
                    <div style={{ marginTop: 'var(--space-5)' }}>
                        {faqs.map(({ q, a }, i) => (
                            <div key={i} className="accordion-item">
                                <button className="accordion-trigger" onClick={() => setOpen(open === i ? null : i)}>
                                    {q}
                                    <ChevronDown size={18} style={{ transition: '0.2s', transform: open === i ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
                                </button>
                                {open === i && <div className="accordion-content">{a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-heading">Still Have a Question?</h2>
                    <p className="section-intro" style={{ margin: '0 auto var(--space-5)' }}>We are always happy to hear from families. Reach out to us via our contact page and we will get back to you promptly.</p>
                    <Link href="/contact" className="btn btn-primary"><Mail size={16} /> Contact Us</Link>
                </div>
            </section>
        </div>
    )
}
