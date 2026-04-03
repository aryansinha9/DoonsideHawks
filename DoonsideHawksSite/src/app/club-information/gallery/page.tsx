import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'Gallery — Doonside Hawks Soccer Club' }

// Mixed media gallery schema specifying type explicitly per requirement
const galleryData = [
    {
        id: '1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1543326164-9686034f593e?w=800&q=80&auto=format&fit=crop',
        alt: 'Under 10s celebrating a goal'
    },
    {
        id: '2',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube Embed URL
        title: 'Doonside Hawks 2025 Grand Final Highlights'
    },
    {
        id: '3',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80&auto=format&fit=crop',
        alt: 'Premier League match action'
    },
    {
        id: '4',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop',
        alt: 'Hawks Club BBQ fundraiser'
    },
    {
        id: '5',
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
        title: 'Club Player of the Year Presentation'
    },
    {
        id: '6',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80&auto=format&fit=crop',
        alt: 'Training session under the lights'
    }
]

export default function GalleryPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1518605368461-1ee18cdfb8b5?w=1600&q=80&auto=format&fit=crop" alt="Gallery" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Gallery</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Club Gallery</h1>
                    <p className={styles.heroSub}>Moments from the pitch and beyond.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <span className="section-label">Moments in Time</span>
                    <h2 className="section-heading">Photos & Videos</h2>
                    <p className="section-intro">
                        Experience the passion, the victories, and the community that make the Doonside Hawks more than just a club. 
                    </p>

                    <div className={styles.galleryGrid}>
                        {galleryData.map(item => (
                            <div key={item.id} className={styles.galleryItem}>
                                {item.type === 'image' ? (
                                    <img src={item.src} alt={item.alt} loading="lazy" />
                                ) : (
                                    <div className={styles.videoWrapper}>
                                        <iframe 
                                            src={item.src} 
                                            title={item.title} 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
