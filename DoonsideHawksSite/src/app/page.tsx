'use client'

import Link from 'next/link'
import { ChevronDown, Heart } from 'lucide-react'
import HeroGeometricPattern from '@/components/HeroGeometricPattern'
import styles from './page.module.css'
import { sponsors } from '@/lib/sponsorsData'

export default function HomePage() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <NewsSection />
            <FixturesSection />
            <SocialFeedSection />
            <SponsorsSection />
        </div>
    )
}

/* ===========================
   SECTION A: HERO (UNCHANGED)
=========================== */
function HeroSection() {
    return (
        <section className={`hero hero-full ${styles.hero}`}>
            {/* 3D Isometric SVG Backdrop */}
            <div className={styles.heroGeometricBg}>
                <HeroGeometricPattern />
            </div>

            {/* Content */}
            <div className={`hero-content ${styles.heroContent}`}>
                {/* Main Banner Image */}
                <div className={styles.heroBannerWrapper}>
                    <img
                        src="/hero-banner.png"
                        alt="Doonside Hawks Soccer Club"
                        className={styles.heroBannerImage}
                    />
                </div>

                {/* Descriptor */}
                <p className={styles.heroDescriptor}>
                    More than a football club. A community.
                </p>

                {/* CTAs */}
                <div className={styles.heroCTAs}>
                    <Link href="/club-information/history" className={`btn ${styles.btnHeroSolid}`}>
                        Explore the Club
                    </Link>
                    <Link href="/registration" className="btn btn-pink">
                        2026 Registration →
                    </Link>
                </div>


            </div>
        </section>
    )
}

/* ===========================
   SECTION B: NEWS
=========================== */
function NewsSection() {
    const newsItems = [
        {
            id: 1,
            tag: 'Club Announcement',
            title: '2026 Season Registrations Now Open',
            image: 'https://images.unsplash.com/photo-1543326164-9686034f593e?w=800&q=85&auto=format&fit=crop',
            link: '/registration'
        },
        {
            id: 2,
            tag: 'Match Report',
            title: 'Premier League Side Secures Historic Win',
            image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=85&auto=format&fit=crop',
            link: '/news/win'
        },
        {
            id: 3,
            tag: 'Community',
            title: 'Hawks Host Annual Charity Gala',
            image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=85&auto=format&fit=crop',
            link: '/news/gala'
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <div className={styles.newsHeader}>
                    <span className="section-label">Latest News</span>
                    <h2 className="section-heading">News & Updates</h2>
                </div>
                <div className={styles.newsGrid}>
                    {newsItems.map(item => (
                        <Link href={item.link} key={item.id} className={styles.newsCard}>
                            <div className={styles.newsImageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.newsImage} />
                            </div>
                            <span className={styles.newsTag}>{item.tag}</span>
                            <h3 className={styles.newsTitle}>{item.title}</h3>
                        </Link>
                    ))}
                </div>
                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/news" className="btn btn-ghost">
                        View All News
                    </Link>
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION C: FIXTURES
=========================== */
function FixturesSection() {
    const fixtures = [
        {
            id: 1,
            date: 'Saturday 14 May',
            comp: 'Mens Premier League',
            teamHome: 'DOONSIDE HAWKS',
            teamAway: 'MARAYONG FC',
            time: '14:30',
            venue: 'Doonside Reserve - Pitch 1',
        },
        {
            id: 2,
            date: 'Sunday 15 May',
            comp: 'Womens All Age 1',
            teamHome: 'DOONSIDE HAWKS',
            teamAway: 'QUAKERS HILL',
            time: '09:00',
            venue: 'Doonside Reserve - Pitch 2',
        },
        {
            id: 3,
            date: 'Saturday 21 May',
            comp: 'Mens Premier League',
            teamHome: 'PUMA FC',
            teamAway: 'DOONSIDE HAWKS',
            time: '15:00',
            venue: 'Puma Stadium - Pitch 1',
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <div className={styles.fixturesHeader}>
                    <span className="section-label">Match Day</span>
                    <h2 className="section-heading">Upcoming Fixtures</h2>
                </div>
                <div className={styles.fixturesList}>
                    {fixtures.map(f => (
                        <div key={f.id} className={styles.fixtureRow}>
                            <div className={styles.fixtureCol}>
                                <span className={styles.fixtureDate}>{f.date}</span>
                                <span className={styles.fixtureComp}>{f.comp}</span>
                            </div>
                            <div className={styles.fixtureCol}>
                                <div className={styles.fixtureTeams}>
                                    {f.teamHome} VS {f.teamAway}
                                </div>
                                <div className={styles.fixtureTimeWrapper}>
                                    <span className={styles.fixtureTimePill}>{f.time} KICK-OFF</span>
                                </div>
                            </div>
                            <div className={`${styles.fixtureCol} ${styles.fixtureColRight}`}>
                                <span className={styles.fixtureVenue}>{f.venue}</span>
                                <Link href="/fixtures" className="btn btn-small-ghost">
                                    Match Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/fixtures" className="btn btn-primary">
                        View Full Schedule
                    </Link>
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION D: SOCIAL FEED
=========================== */
function SocialFeedSection() {
    const images = [
        'https://images.unsplash.com/photo-1543326164-9686034f593e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518605368461-1ee18cdfb8b5?w=600&h=600&fit=crop',
    ]

    return (
        <section className="section section--fog">
            <div className="container">
                <div className={styles.socialHeader}>
                    <span className="section-label">Follow Us</span>
                    <h2 className="section-heading">Join Our Community</h2>
                </div>
                <div className={styles.socialStripContainer}>
                    {images.map((img, i) => (
                        <a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialTile}>
                            <img src={img} alt="Social feed" className={styles.socialImage} />
                            <div className={styles.socialOverlay}>
                                <Heart className={styles.socialHeart} fill="currentColor" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION E: SPONSORS
=========================== */
function SponsorsSection() {
    return (
        <section className="section section--fog">
            <div className="container">
                <div className={styles.sponsorsHeader}>
                    <span className="section-label">Partners & Supporters</span>
                    <h2 className="section-heading">Our Valued Sponsors</h2>
                </div>
                <div className={styles.sponsorsGrid}>
                    {sponsors.map((s) => (
                        <a key={s.id} href={s.website || '#'} className={styles.sponsorTile} title={s.name}>
                            {s.imageUrl ? (
                                <img src={s.imageUrl} alt={s.name} className={styles.sponsorLogo} loading="lazy" />
                            ) : (
                                <span className={styles.sponsorPlaceholder}>{s.name}</span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
