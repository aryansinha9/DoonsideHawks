'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Calendar, UserPlus, Phone, BookOpen, MapPin, Users, Swords, ChevronRight, Facebook, Instagram, Youtube } from 'lucide-react'
import { sponsors } from '@/lib/sponsorsData'
import HeroGeometricPattern from '@/components/HeroGeometricPattern'
import styles from './page.module.css'

export default function HomePage() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <QuickLinksBar />
            <ClubHighlightsSection />
            <GalleryPreviewSection />
            <HistorySnapshotSection />
            <SponsorsSection />
            <JoinOurCommunitySection />
        </div>
    )
}

/* ===========================
   SECTION A: HERO
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
                    <Link href="/club-information/history" className="btn btn-ghost">
                        Explore the Club
                    </Link>
                    <Link href="/registration" className="btn btn-pink">
                        2026 Registration →
                    </Link>
                </div>

                {/* Scroll chevron */}
                <div className={styles.scrollChevron}>
                    <ChevronDown size={28} />
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION B: QUICK LINKS BAR
=========================== */
function QuickLinksBar() {
    const links = [
        { icon: Calendar, label: 'Upcoming Fixtures', href: '/fixtures' },
        { icon: UserPlus, label: 'Register Now', href: '/registration' },
        { icon: Phone, label: 'Contact Us', href: '/contact' },
        { icon: BookOpen, label: 'Club History', href: '/club-information/history' },
    ]
    return (
        <div className={styles.quickLinksBar}>
            <div className="container">
                <div className={styles.quickLinksGrid}>
                    {links.map(({ icon: Icon, label, href }) => (
                        <Link key={href} href={href} className={styles.quickLink}>
                            <Icon size={20} className={styles.quickLinkIcon} />
                            <span>{label}</span>
                            <ChevronRight size={14} className={styles.quickLinkArrow} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

/* ===========================
   SECTION C: CLUB HIGHLIGHTS
=========================== */
function ClubHighlightsSection() {
    const highlights = [
        {
            icon: Users,
            title: 'Who We Are',
            body: 'The Doonside Hawks Soccer Club has been a cornerstone of the Western Sydney community since 1981. We exist to give every player — from tiny tots to seniors — a place to grow, belong, and excel.',
            href: '/club-information/history',
        },
        {
            icon: Swords,
            title: 'Our Teams',
            body: 'From our youngest Under-6 players to our competitive Premier League side, the Hawks field teams across all age groups. There is a place for every player, at every level, at Doonside.',
            href: '/fixtures',
        },
        {
            icon: MapPin,
            title: 'Our Community',
            body: 'We are not just a sporting club — we are a community institution. Families, volunteers, and supporters give life to everything we do. The Hawks are strong because our people are strong.',
            href: '/club-information/committee',
        },
    ]

    return (
        <section className="section">
            <div className="container">
                <div className={styles.highlightsHeader}>
                    <span className="section-label">About the Hawks</span>
                    <h2 className="section-heading">Built on Pride. Powered by Community.</h2>
                    <p className="section-intro">
                        For over five decades, the Doonside Hawks have united players and families across Western Sydney under one proud banner.
                    </p>
                </div>
                <div className="grid-3">
                    {highlights.map(({ icon: Icon, title, body, href }) => (
                        <div key={title} className={styles.highlightCard}>
                            <div className={styles.highlightIcon}>
                                <Icon size={28} />
                            </div>
                            <h3 className={styles.highlightTitle}>{title}</h3>
                            <p className={styles.highlightBody}>{body}</p>
                            <Link href={href} className={styles.highlightCta}>
                                Learn more <ChevronRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION D: GALLERY PREVIEW
=========================== */
function GalleryPreviewSection() {
    const previewPhotos = [
        { id: 1, src: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=85&auto=format&fit=crop', alt: 'Match day action' },
        { id: 2, src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80&auto=format&fit=crop', alt: 'Team celebration' },
        { id: 3, src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop', alt: 'Training session' },
        { id: 4, src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80&auto=format&fit=crop', alt: 'Youth players' },
    ]

    return (
        <section className="section section--fog">
            <div className="container">
                <div className={styles.galleryPreviewHeader}>
                    <div>
                        <span className="section-label">Moments in Time</span>
                        <h2 className="section-heading">From the Pitch</h2>
                    </div>
                </div>

                <div className={styles.galleryGrid}>
                    {previewPhotos.map((photo, i) => (
                        <div key={photo.id} className={`${styles.galleryPreviewImg} ${i === 0 ? styles.galleryImgLarge : ''}`}>
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                        </div>
                    ))}
                </div>

                <div className={styles.galleryCtaWrapper}>
                    <Link href="/club-information/gallery" className={`btn btn-pink ${styles.galleryCta}`}>
                        View Full Gallery →
                    </Link>
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION E: HISTORY SNAPSHOT
=========================== */
function HistorySnapshotSection() {
    const stats = [
        { value: '1981', label: 'Year Founded' },
        { value: '400+', label: 'Registered Players' },
        { value: '20+', label: 'Teams Fielded' },
        { value: '50+', label: 'Years of History' },
    ]

    return (
        <section className={`section section--crimson ${styles.historySection}`}>
            <div className="container">
                <div className={styles.historyInner}>
                    <div className={styles.historyText}>
                        <span className={`section-label ${styles.historyLabel}`}>Our Story</span>
                        <h2 className={`section-heading section-heading--white ${styles.historyHeading}`}>
                            More Than a Club.<br />A Community.
                        </h2>
                        <p className={`section-intro section-intro--white`}>
                            Founded in 1981 by a handful of passionate families in Western Sydney, the Doonside Hawks have grown from a small neighbourhood competition side into a thriving community institution with hundreds of registered players, dedicated volunteers, and generations of proud memories.
                        </p>
                        <Link href="/club-information/history" className={`btn btn-ghost ${styles.historyBtn}`}>
                            Read Our Full Story →
                        </Link>
                    </div>
                    <div className={styles.historyStats}>
                        {stats.map(({ value, label }) => (
                            <div key={label} className={styles.statCard}>
                                <div className={styles.statValue}>{value}</div>
                                <div className={styles.statLabel}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SECTION F: SPONSORS
=========================== */
function SponsorsSection() {
    // Split sponsors by tier
    const majorSponsors = sponsors.filter(s => s.tier === 'platinum')
    const clubSponsors = sponsors.filter(s => s.tier !== 'platinum')

    return (
        <section className="section">
            <div className="container">
                <div className={styles.sponsorsHeader}>
                    <span className="section-label">Partners & Supporters</span>
                    <h2 className={`section-heading section-heading--crimson text-center`}>Our Valued Sponsors</h2>
                    <p className="section-intro text-center" style={{ margin: '0 auto', maxWidth: '600px' }}>
                        The Doonside Hawks are proudly supported by these local businesses and organisations.
                    </p>
                </div>

                {/* Major Sponsors: 2x2 Grid */}
                <div className={styles.sponsorTierBlock}>
                    <h3 className={styles.sponsorTierTitle}>Major Sponsors</h3>
                    <div className={styles.majorSponsorsGrid}>
                        {majorSponsors.map((s) => (
                            <a key={s.id} href={s.website || '#'} className={styles.sponsorImageCard} title={s.name}>
                                {s.imageUrl ? (
                                    <img src={s.imageUrl} alt={s.name} className={styles.sponsorImg} loading="lazy" />
                                ) : (
                                    <div className={styles.sponsorLogoFallback}>
                                        <span className={styles.sponsorName}>{s.name}</span>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Club Sponsors: 3+2 Flex Grid */}
                <div className={styles.sponsorTierBlock}>
                    <h3 className={styles.sponsorTierTitle}>Club Sponsors</h3>
                    <div className={styles.clubSponsorsGrid}>
                        {clubSponsors.map((s) => (
                            <a key={s.id} href={s.website || '#'} className={styles.sponsorImageCard} title={s.name}>
                                {s.imageUrl ? (
                                    <img src={s.imageUrl} alt={s.name} className={styles.sponsorImg} loading="lazy" />
                                ) : (
                                    <div className={styles.sponsorLogoFallback}>
                                        <span className={styles.sponsorName}>{s.name}</span>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.sponsorsFooter}>
                    <p className={styles.sponsorsCta}>
                        Interested in sponsoring the Hawks?{' '}
                        <Link href="/contact" className={styles.sponsorsLink}>Get in touch →</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

/* ===========================
   SVG EMBLEM
=========================== */
function HeroEmblem() {
    return (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <circle cx="60" cy="60" r="56" fill="rgba(255,255,255,0.08)" stroke="#ef2473" strokeWidth="3" />
            <circle cx="60" cy="60" r="50" fill="rgba(106,16,18,0.5)" stroke="rgba(239,36,115,0.3)" strokeWidth="1" />
            {/* Main hawk shape */}
            <path d="M36 40 C36 40, 44 30, 60 32 C76 34, 88 44, 84 56 C80 68, 70 76, 60 84 C60 84, 56 72, 48 64 C40 56, 32 52, 36 40Z"
                fill="#FFFFFF" />
            <path d="M60 32 C70 28 88 36, 88 48 C84 40, 72 36, 60 32Z"
                fill="rgba(106,16,18,0.7)" />
            <circle cx="66" cy="46" r="5" fill="#1a1a1a" />
            <circle cx="67.5" cy="44.5" r="1.5" fill="white" opacity="0.7" />
            {/* Beak */}
            <path d="M52 44 L36 36 L44 48Z" fill="#ef2473" />
            <path d="M52 44 L36 36 L40 41Z" fill="rgba(106,16,18,0.8)" />
            {/* Wing detail */}
            <path d="M62 50 C68 46, 80 48, 82 56 C76 52, 68 52, 62 50Z" fill="rgba(106,16,18,0.4)" />
            <path d="M58 58 C54 62, 52 70, 58 78 C56 72, 58 64, 62 62Z" fill="rgba(239,36,115,0.5)" />
        </svg>
    )
}

/* ===========================
   SECTION G: SOCIAL COMMUNITY
=========================== */
function JoinOurCommunitySection() {
    const socials = [
        { name: 'Facebook', icon: <Facebook size={32} />, link: 'https://www.facebook.com/doonsidehawkssoccerclub', handle: '@doonsidehawks', colorClass: styles.socialFacebook },
        { name: 'Instagram', icon: <Instagram size={32} />, link: 'https://www.instagram.com/doonsidehawks', handle: '@doonsidehawks', colorClass: styles.socialInstagram },
        { name: 'YouTube', icon: <Youtube size={32} />, link: 'https://www.youtube.com/@doonsidehawks9510', handle: 'Doonside Hawks TV', colorClass: styles.socialYoutube },
    ]

    return (
        <section className={`section section--fog ${styles.communitySection}`}>
            <div className="container">
                <div className={styles.communityHeader}>
                    <span className="section-label">Follow Us</span>
                    <h2 className="section-heading text-center">Join Our Community</h2>
                    <p className="section-intro text-center" style={{ margin: '0 auto', maxWidth: '600px' }}>
                        Stay up to date with match results, club announcements, and behind-the-scenes action across our social channels.
                    </p>
                </div>

                <div className={styles.socialGrid}>
                    {socials.map((platform) => (
                        <a key={platform.name} href={platform.link} target="_blank" rel="noopener noreferrer" className={`${styles.socialTile} ${platform.colorClass}`}>
                            <div className={styles.socialIconWrapper}>
                                {platform.icon}
                            </div>
                            <div className={styles.socialInfo}>
                                <h3 className={styles.socialName}>{platform.name}</h3>
                                <span className={styles.socialHandle}>{platform.handle}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
