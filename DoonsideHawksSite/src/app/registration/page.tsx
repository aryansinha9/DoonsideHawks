'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, CheckCircle, Users, Calendar, Shield, HelpCircle } from 'lucide-react'
import styles from './page.module.css'

const steps = [
    { n: 1, title: 'Create a PlayFootball Account', desc: 'Visit playfootball.com.au and create a free account for your player. This is the national registration platform used across Australia.' },
    { n: 2, title: 'Select Doonside Hawks', desc: 'Search for "Doonside Hawks Soccer Club" in the club directory and select your preferred season (2026).' },
    { n: 3, title: 'Choose an Age Group', desc: 'Select the correct age group for your player based on their date of birth. Our club fields teams from Under-6 through to Senior grades.' },
    { n: 4, title: 'Complete Your Registration', desc: 'Fill in your player\'s personal details, provide any required medical information, and pay the relevant registration fee.' },
    { n: 5, title: 'Wait for Confirmation', desc: 'You will receive a confirmation email once your registration is processed. The club will contact you with team and training information before the season begins.' },
]

const faqs = [
    { q: 'What age groups does the club cater to?', a: 'The Doonside Hawks field teams from Under-6 (born 2020) through to Senior grades. Players are allocated to age groups based on their date of birth as of January 1, 2026.' },
    { q: 'What is the registration fee?', a: 'Fees vary by age group. See the fee table below for a full breakdown. Fees include club registration, referee levies, and your team uniform pack for new registrants.' },
    { q: 'Do my child need any prior experience?', a: 'Absolutely not! We welcome players of all abilities, from complete beginners to experienced competition players. Our junior development program is designed to build skills progressively.' },
    { q: 'What equipment do I need?', a: 'Players need football boots (moulded studs recommended), shin pads, and a water bottle. The club will provide jersey and shorts as part of your registration. Socks may be purchased separately.' },
    { q: 'Are there trials for age groups?', a: 'Most junior age groups do not require trials — all registered players will be accommodated. For senior and competitive representative teams, trials may apply. Contact us for details.' },
    { q: 'Can I volunteer at the club?', a: 'We would love your help! The Hawks are entirely volunteer-run. We always need coaches, managers, canteen helpers, and committee members. Contact us via the Contact page to get involved.' },
]

const fees = [
    { age: 'Under 5 & Under 6', fee: '$230' },
    { age: 'Under 7 & Under 8', fee: '$245' },
    { age: 'Under 9', fee: '$255' },
    { age: 'Under 10 & Under 11', fee: '$290' },
    { age: 'Under 12', fee: '$315' },
    { age: 'Under 13 & Under 14', fee: '$325' },
    { age: 'Under 15 & Under 16', fee: '$350' },
    { age: 'Under 17 & Under 18', fee: '$360' },
    { age: 'Under 19 & Over', fee: '$460' },
]

export default function RegistrationPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    return (
        <div>
            {/* Hero */}
            <section className={`hero ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&q=80&auto=format&fit=crop" alt="Football players celebrating" />
                </div>
                <div className={`hero-overlay ${styles.heroOverlay}`} />
                <div className="hero-content">
                    <span className={styles.heroPill}>2026 Season</span>
                    <h1 className={`display ${styles.heroTitle}`}>Your 2026 Season Starts Here</h1>
                    <p className={styles.heroSub}>Join over 400 players in the Hawks family for the 2026 season.</p>
                    <a href="https://www.playfootball.com.au" target="_blank" rel="noopener noreferrer" className={`btn btn-pink ${styles.heroCTA}`}>
                        Register on PlayFootball →
                    </a>
                </div>
            </section>

            {/* Steps */}
            <section className="section">
                <div className="container">
                    <div className={styles.stepsHeader}>
                        <span className="section-label">How to Register</span>
                        <h2 className="section-heading">Five Simple Steps</h2>
                        <p className="section-intro">Registration is done through Football Australia&apos;s national platform, PlayFootball. Here&apos;s exactly what to do.</p>
                    </div>
                    <div className={styles.steps}>
                        {steps.map(({ n, title, desc }) => (
                            <div key={n} className={styles.step}>
                                <div className={styles.stepNum}>{n}</div>
                                <div className={styles.stepBody}>
                                    <h3 className={styles.stepTitle}>{title}</h3>
                                    <p className={styles.stepDesc}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.stepsCTA}>
                        <a href="https://www.playfootball.com.au" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Start Registration on PlayFootball →
                        </a>
                    </div>
                </div>
            </section>

            {/* Fee Table */}
            <section className="section section--fog">
                <div className="container">
                    <span className="section-label">2026 Fees</span>
                    <h2 className="section-heading">Registration Fees by Age Group</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>
                        All fees are inclusive of club registration, Football NSW levies, and referee fees for the season.
                    </p>
                    <div className={styles.feeTable}>
                        <div className={styles.feeHead}>
                            <span>Age Group</span>
                            <span style={{textAlign: 'right'}}>2026 Fee</span>
                        </div>
                        {fees.map(({ age, fee }) => (
                            <div key={age} className={styles.feeRow}>
                                <span className={styles.feeAge}>{age}</span>
                                <span className={styles.feeAmt} style={{textAlign: 'right'}}>{fee}</span>
                            </div>
                        ))}
                    </div>
                    
                    <p className={styles.feeNote} style={{marginTop: '24px', fontSize: '15px', fontStyle: 'normal'}}>
                        If we have missed your question or there is something else, come down and see us at in-person registration events (TBA). DHSC strives to provide affordable football for everyone. We look forward to a memorable 2026 season with our members and guests.
                    </p>

                    <div className={styles.letterBlock}>
                        <p><strong>Dear Doonside Hawks Soccer Club Members,</strong></p>
                        <p>Happy New Year!</p>
                        <p>As we eagerly approach Season 2026, we are excited to share important information to ensure a smooth and enjoyable experience for all members. Please take note of the following key points:</p>
                        
                        <div className={styles.letterList}>
                            <p><strong>1. Registration Opens – Thursday, 1st January 2026</strong><br/>
                            Register online via PlayFootball <a href="https://tinyurl.com/Doonside-Hawks" target="_blank" rel="noopener noreferrer">tinyurl.com/Doonside-Hawks</a> and follow the prompts to complete your registration.<br/>
                            An in-person registration day may also be held; date to be advised (TBA).</p>

                            <p><strong>2. Team Grading – Starting Early February</strong><br/>
                            Grading of teams will commence in early February in accordance with club policy.<br/>
                            The schedule for age groups and teams will be communicated shortly.</p>

                            <p><strong>3. Registration Fees & Team Nominations – Due Friday, 27th February</strong><br/>
                            To secure your spot, please submit registration fees and team nominations by Friday, 27th February.</p>

                            <p><strong>4. Season Kick-Off – Round 1</strong><br/>
                            Premier League: Saturday, 21st March<br/>
                            Division 1: Saturday, 28th March<br/>
                            All other teams: Friday, 10th April</p>

                            <p><strong>5. Fees</strong><br/>
                            Our team has worked hard to keep fees as affordable as possible. Refer to the table above for the exact breakdown.</p>

                            <p><strong>6. Sponsorship</strong><br/>
                            We rely on sponsorship to support our club and members. If you are interested in supporting our community, please contact: <a href="mailto:secretary@doonsidehawks.com.au">secretary@doonsidehawks.com.au</a></p>

                            <p><strong>7. Coaches, Managers & Volunteers</strong><br/>
                            Our club is proudly run by dedicated volunteers. If you can assist with coaching, managing, or supporting club operations, please reach out to Jacki.</p>
                        </div>

                        <p>Should you have any questions or require assistance, please contact:<br/>
                        <strong>Jacki Tate – Secretary</strong><br/>
                        Email: <a href="mailto:secretary@doonsidehawks.com.au">secretary@doonsidehawks.com.au</a></p>

                        <p>We are here to support you and ensure a fantastic football experience. Let’s embrace the <strong>#proudtobeahawk</strong> spirit as we gear up for an amazing Season 2026!</p>

                        <div className={styles.letterSignoff}>
                            <p>Best regards,</p>
                            <p><strong>Jacki Tate</strong><br/>Secretary<br/>Doonside Hawks Soccer Club</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className={`section ${styles.socialProof}`}>
                <div className="container">
                    <div className={styles.proofGrid}>
                        <div className={styles.proofStat}><span className={styles.proofNum}>400+</span><span className={styles.proofLabel}>Players in 2026</span></div>
                        <div className={styles.proofStat}><span className={styles.proofNum}>20+</span><span className={styles.proofLabel}>Teams</span></div>
                        <div className={styles.proofStat}><span className={styles.proofNum}>50+</span><span className={styles.proofLabel}>Years of History</span></div>
                        <div className={styles.proofStat}><span className={styles.proofNum}>100%</span><span className={styles.proofLabel}>Community Focused</span></div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container" style={{ maxWidth: 820 }}>
                    <span className="section-label">Common Questions</span>
                    <h2 className="section-heading">Registration FAQ</h2>
                    <div style={{ marginTop: 'var(--space-5)' }}>
                        {faqs.map(({ q, a }, i) => (
                            <div key={i} className="accordion-item">
                                <button className="accordion-trigger" onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                                    {q}
                                    <ChevronDown size={18} style={{ transition: '0.2s', transform: openFAQ === i ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
                                </button>
                                {openFAQ === i && (
                                    <div className="accordion-content">{a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={`section ${styles.bottomCTA}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className={`section-heading section-heading--white`}>Ready to Join the Hawks?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-5)', fontSize: 18 }}>
                        Register now and become part of Western Sydney&apos;s most passionate football community.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://www.playfootball.com.au" target="_blank" rel="noopener noreferrer" className="btn btn-pink">
                            Register Now →
                        </a>
                        <Link href="/contact" className="btn btn-ghost">Have a Question?</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
