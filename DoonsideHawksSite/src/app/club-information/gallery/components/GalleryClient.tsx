'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '../page.module.css'

type GalleryItem = {
    id: number
    type: 'image' | 'video'
    src: string
    alt?: string
    title?: string
    created_at: string
}

function formatYoutubeUrl(url: string) {
    if (!url) return ''

    let embedId = ''
    try {
        const urlObj = new URL(url)
        
        // Handles youtube.com/watch?v=DOC_ID
        if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.has('v')) {
            embedId = urlObj.searchParams.get('v') || ''
        } 
        // Handles youtu.be/DOC_ID
        else if (urlObj.hostname.includes('youtu.be')) {
            embedId = urlObj.pathname.slice(1)
        }
        // Handles youtube.com/shorts/DOC_ID
        else if (urlObj.pathname.includes('/shorts/')) {
            const parts = urlObj.pathname.split('/')
            embedId = parts[parts.length - 1]
        }
        else if (urlObj.pathname.includes('/embed/')) {
            // Already good
            return url
        }
    } catch(e) {
        // Fallback for invalid URLs
        return url
    }

    if (embedId) {
        return `https://www.youtube.com/embed/${embedId}`
    }

    return url
}

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
    const images = items.filter(item => item.type === 'image')
    const videos = items.filter(item => item.type === 'video')

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    // Handle Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return
            
            if (e.key === 'Escape') setLightboxIndex(null)
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [lightboxIndex])

    // Body scroll lock
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [lightboxIndex])

    const goNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation()
        if (lightboxIndex !== null && images.length > 0) {
            setLightboxIndex((lightboxIndex + 1) % images.length)
        }
    }

    const goPrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation()
        if (lightboxIndex !== null && images.length > 0) {
            setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
        }
    }

    const closeLightbox = () => {
        setLightboxIndex(null)
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <span className="section-label">Moments in Time</span>
                    <h2 className="section-heading">Club Photos</h2>
                    <p className="section-intro">
                        Experience the passion, the victories, and the community that make the Doonside Hawks more than just a club. 
                        Click on any image to view it in full size.
                    </p>

                    {images.length > 0 ? (
                        <div className={styles.masonry}>
                            {images.map((item, idx) => (
                                <div key={item.id} className={styles.masonryItem} onClick={() => setLightboxIndex(idx)}>
                                    <img src={item.src} alt={item.alt || 'Gallery photo'} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ color: 'var(--color-secondary-text)' }}>No photos uploaded yet.</p>
                    )}

                    {videos.length > 0 && (
                        <div className={styles.videoSection}>
                            <h2 className="section-heading">Club Videos</h2>
                            <p className="section-intro">Watch highlights and recent moments from our teams.</p>
                            
                            <div className={styles.videoGrid}>
                                {videos.map(item => (
                                    <div key={item.id} className={styles.videoCard}>
                                        <div className={styles.videoWrapper}>
                                            <iframe 
                                                src={formatYoutubeUrl(item.src)} 
                                                title={item.title || 'Video snippet'} 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {lightboxIndex !== null && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <button className={styles.lightboxClose} onClick={closeLightbox}>
                        <X size={32} />
                    </button>
                    
                    <div className={styles.lightboxContent}>
                        {images.length > 1 && (
                            <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={goPrev}>
                                <ChevronLeft size={64} />
                            </button>
                        )}
                        
                        <img 
                            src={images[lightboxIndex].src} 
                            alt={images[lightboxIndex].alt || 'Full screen gallery photo'} 
                            className={styles.lightboxImage} 
                            onClick={(e) => e.stopPropagation()} 
                        />
                        
                        {images.length > 1 && (
                            <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={goNext}>
                                <ChevronRight size={64} />
                            </button>
                        )}
                    </div>
                    {images[lightboxIndex].alt && (
                        <div className={styles.lightboxCaption}>
                            {images[lightboxIndex].alt}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
