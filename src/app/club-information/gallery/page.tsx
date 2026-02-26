'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './page.module.css'


const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1200&q=85&auto=format&fit=crop', alt: 'Match day action', caption: 'Premier League clash, Round 8 2025', size: 'large' },
    { id: 2, src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80&auto=format&fit=crop', alt: 'Team celebration', caption: 'End of season celebrations 2025', size: 'small' },
    { id: 3, src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop', alt: 'Training session', caption: 'Tuesday night training, March 2025', size: 'small' },
    { id: 4, src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80&auto=format&fit=crop', alt: 'Youth players', caption: 'Under-12s pre-season training 2026', size: 'small' },
    { id: 5, src: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1200&q=85&auto=format&fit=crop', alt: 'Stadium view', caption: 'Home ground on match day', size: 'large' },
    { id: 6, src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80&auto=format&fit=crop', alt: 'Player heads ball', caption: 'Aerial duel, Season 2025', size: 'small' },
    { id: 7, src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80&auto=format&fit=crop', alt: 'Team huddle', caption: 'Pre-match team talk', size: 'small' },
    { id: 8, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85&auto=format&fit=crop', alt: 'Goal celebration', caption: 'Junior goal celebration, May 2025', size: 'large' },
]

export default function GalleryPage() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const closeLightbox = useCallback(() => setLightboxIndex(null), [])

    const goNext = useCallback(() => {
        setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null)
    }, [])

    const goPrev = useCallback(() => {
        setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null)
    }, [])

    useEffect(() => {
        if (lightboxIndex === null) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [lightboxIndex, closeLightbox, goNext, goPrev])

    const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null

    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1600&q=80&auto=format&fit=crop" alt="Gallery" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Gallery</span>
                    </p>
                    <h1 className={`display ${styles.heroTitle}`}>Gallery</h1>
                    <p className={styles.heroSub}>Moments that define us.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">Photo Gallery</span>
                    <h2 className="section-heading">From the Pitch</h2>
                    <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>
                        Browse our collection of match day photos, training sessions, and club events. Click any photo to open the full view.
                    </p>
                    <div className={styles.gallery}>
                        {photos.map((p, index) => (
                            <button
                                key={p.id}
                                className={`${styles.photoItem} ${p.size === 'large' ? styles.large : ''}`}
                                onClick={() => setLightboxIndex(index)}
                                aria-label={`View photo: ${p.caption}`}
                            >
                                <img src={p.src} alt={p.alt} loading="lazy" />
                                <div className={styles.photoOverlay}>
                                    <span className={styles.photoCaption}>{p.caption}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && currentPhoto && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Photo lightbox">
                    <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close lightbox">
                        <X size={24} />
                    </button>
                    <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={e => { e.stopPropagation(); goPrev() }} aria-label="Previous photo">
                        <ChevronLeft size={28} />
                    </button>
                    <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
                        <img src={currentPhoto.src} alt={currentPhoto.alt} className={styles.lightboxImg} />
                        <p className={styles.lightboxCaption}>{currentPhoto.caption}</p>
                        <span className={styles.lightboxCounter}>{lightboxIndex + 1} / {photos.length}</span>
                    </div>
                    <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={e => { e.stopPropagation(); goNext() }} aria-label="Next photo">
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </div>
    )
}
