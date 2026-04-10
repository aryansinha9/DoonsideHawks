import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export const metadata = { title: 'Social Feed — Doonside Hawks Soccer Club' }

export default function SocialPage() {
    return (
        <div>
            <PageHero
                title="Hawks Social" subtitle="Connect with us across our community channels."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Social'}]}
            />

            <section className="section" style={{ backgroundColor: 'var(--color-surface-low)' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <span className="section-label">Live Updates</span>
                        <h2 className="section-heading">Official Facebook Feed</h2>
                        <p className="section-intro">
                            Follow our latest highlights, match updates, and announcements directly from our Facebook page.
                        </p>
                    </div>

                    <div style={{ 
                        boxShadow: 'var(--shadow-card)', 
                        borderRadius: 'var(--radius-card)', 
                        overflow: 'hidden', 
                        backgroundColor: 'var(--color-white)',
                        maxWidth: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <iframe 
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdoonsidehawkssoccerclub&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                            width="500" 
                            height="800" 
                            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                            scrolling="no" 
                            frameBorder="0" 
                            allowFullScreen={true} 
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>

                    <div style={{ marginTop: '32px' }}>
                        <a href="https://www.facebook.com/doonsidehawkssoccerclub" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Follow Us on Facebook
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
