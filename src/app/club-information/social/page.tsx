import Link from 'next/link'
import { Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react'
import styles from './page.module.css'

export const metadata = { title: 'Social Media Wall — Doonside Hawks Soccer Club' }

// Mock social posts
const posts = [
    { id: 1, platform: 'instagram', text: 'Big win today for our Premiers! 3–1 against Blacktown City. #ProudToBeAHawk 🦅', date: '2 days ago', likes: 142 },
    { id: 2, platform: 'facebook', text: '2026 registrations are now OPEN! Don\'t miss your spot in the squad. Register via the link in bio. 🔴⚽', date: '4 days ago', likes: 89 },
    { id: 3, platform: 'instagram', text: 'Training ground looking immaculate this week. Big thanks to Robert for keeping the pitch perfect! 💪', date: '1 week ago', likes: 67 },
    { id: 4, platform: 'facebook', text: 'Huge congratulations to Jordan Martinez on being named NWFFA Player of the Month for February! What a talent. 🌟', date: '1 week ago', likes: 203 },
    { id: 5, platform: 'instagram', text: 'Junior development day was a massive success! Over 80 kids came out to train. The future of the club is incredibly bright. #HawksJuniors', date: '2 weeks ago', likes: 178 },
    { id: 6, platform: 'facebook', text: 'This Saturday — HOME game vs Seven Hills FC. Come down and support the boys! Gates open at 9:30am. ⚽🦅', date: '2 weeks ago', likes: 54 },
    { id: 7, platform: 'instagram', text: 'Committee volunteers appreciated dinner last night. Cannot say enough about these incredible people. ❤️ #CommunityFirst', date: '3 weeks ago', likes: 119 },
    { id: 8, platform: 'facebook', text: 'Thank you to our platinum sponsor Westpoint Automotive for their ongoing support of the Doonside Hawks. We are incredibly grateful.', date: '3 weeks ago', likes: 44 },
    { id: 9, platform: 'instagram', text: 'Saturday\'s match day shots — captured by our very own Tony P. What a collection! Full gallery now on the website. 📸', date: '1 month ago', likes: 231 },
]

const platformIcon = (p: string) => {
    if (p === 'instagram') return <Instagram size={14} />
    if (p === 'facebook') return <Facebook size={14} />
    return <Youtube size={14} />
}

export default function SocialPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1600&q=80&auto=format&fit=crop" alt="Social Media" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Social Media</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Follow the Hawks</h1>
                    <p className={styles.heroSub}>Stay connected with everything happening at the club.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.platformBtns}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.fb}`}>
                            <Facebook size={18} /> Follow on Facebook <ExternalLink size={12} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.ig}`}>
                            <Instagram size={18} /> Follow on Instagram <ExternalLink size={12} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${styles.platformBtn} ${styles.yt}`}>
                            <Youtube size={18} /> Subscribe on YouTube <ExternalLink size={12} />
                        </a>
                    </div>

                    <h2 className={`section-heading ${styles.feedHeading}`}>Latest Posts</h2>

                    <div className={styles.postsGrid}>
                        {posts.map(p => (
                            <div key={p.id} className={styles.postCard}>
                                <div className={styles.postHeader}>
                                    <div className={`${styles.platformBadge} ${styles[p.platform]}`}>
                                        {platformIcon(p.platform)}
                                        <span>{p.platform}</span>
                                    </div>
                                    <span className={styles.postDate}>{p.date}</span>
                                </div>
                                <p className={styles.postText}>{p.text}</p>
                                <div className={styles.postFooter}>
                                    <span className={styles.postLikes}>❤️ {p.likes} likes</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
