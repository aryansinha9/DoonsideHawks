import Link from 'next/link'
import HeroGeometricPattern from '@/components/HeroGeometricPattern'
import styles from './page.module.css'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function HomePage() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <AboutHistoryPreview />
            <GalleryPreviewSection />
            <SocialLinksSection />
            <SponsorsSection />
        </div>
    )
}

function HeroSection() {
    return (
        <section className={`hero hero-full ${styles.hero}`}>
            <div className={styles.heroGeometricBg}>
                <HeroGeometricPattern />
            </div>
            <div className={`hero-content ${styles.heroContent}`}>
                <div className={styles.heroBannerWrapper}>
                    <img
                        src="/hero-banner.png"
                        alt="Doonside Hawks Soccer Club"
                        className={styles.heroBannerImage}
                    />
                </div>
                <p className={styles.heroDescriptor}>
                    More than a football club. A community.
                </p>
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

function AboutHistoryPreview() {
    return (
        <section className="section section--fog">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <span className="section-label">Our Heritage</span>
                <h2 className="section-heading">Established 1980</h2>
                <p style={{ fontSize: '18px', color: 'var(--color-secondary-text)', marginBottom: '32px' }}>
                    The Doonside Hawks Soccer Club has a proud and rich history spanning 
                    decades of footballing excellence in Western Sydney. From our humble 
                    beginnings to becoming a cornerstone of the Doonside community, we 
                    continue to nurture talent, sportsmanship, and lifelong friendships.
                </p>
                <Link href="/club-information/history" className="btn btn-primary">
                    View Full History
                </Link>
            </div>
        </section>
    )
}

async function GalleryPreviewSection() {
    const supabase = createClient()
    const { data: galleryImages } = await supabase
        .from('gallery_items')
        .select('*')
        .eq('type', 'image')
        .order('created_at', { ascending: false })
        .limit(3)

    const imagesToDisplay = galleryImages || []

    return (
        <section className="section">
            <div className="container">
                <div className={styles.newsHeader} style={{ textAlign: 'center' }}>
                    <span className="section-label">Moments</span>
                    <h2 className="section-heading">Gallery Preview</h2>
                </div>
                
                {imagesToDisplay.length > 0 ? (
                    <div className={`grid-3`}>
                        {imagesToDisplay.map((img) => (
                            <div key={img.id} style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', aspectRatio: '4/3' }}>
                                <img src={img.src} alt={img.alt || "Gallery Preview"} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-secondary-text)' }}>
                        <p>No gallery images uploaded yet.</p>
                    </div>
                )}

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/club-information/gallery" className="btn btn-ghost">
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    )
}

function SocialLinksSection() {
    return (
        <section className="section section--primary" style={{ color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Stay Connected</span>
                <h2 className="section-heading" style={{ color: 'white' }}>Follow Our Socials</h2>
                
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '32px' }}>
                    <a href="https://www.facebook.com/doonsidehawkssoccerclub" target="_blank" rel="noreferrer" style={{ padding: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                        <Facebook size={32} />
                    </a>
                    <a href="https://www.instagram.com/doonsidehawks/" target="_blank" rel="noreferrer" style={{ padding: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                        <Instagram size={32} />
                    </a>
                    <a href="https://www.youtube.com/@doonsidehawks9510" target="_blank" rel="noreferrer" style={{ padding: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                        <Youtube size={32} />
                    </a>
                </div>
            </div>
        </section>
    )
}

async function SponsorsSection() {
    const supabase = createClient()
    const { data: sponsorsData } = await supabase.from('home_sponsors').select('*').order('created_at', { ascending: true })
    const dynamicSponsors = sponsorsData || []

    return (
        <section className="section section--fog">
            <div className="container">
                <div className={styles.sponsorsHeader}>
                    <span className="section-label">Partners & Supporters</span>
                    <h2 className="section-heading">Our Valued Sponsors</h2>
                </div>
                <div className={styles.sponsorsGrid}>
                    {dynamicSponsors.map((s) => (
                        <a key={s.id} href={s.link_url || '#'} className={styles.sponsorTile} title={s.name}>
                            <img src={s.image_url} alt={s.name} className={styles.sponsorLogo} loading="lazy" />
                        </a>
                    ))}
                    {dynamicSponsors.length === 0 && (
                        <p style={{ textAlign: 'center', width: '100%', color: 'var(--color-secondary-text)' }}>No sponsors uploaded yet.</p>
                    )}
                </div>
            </div>
        </section>
    )
}
