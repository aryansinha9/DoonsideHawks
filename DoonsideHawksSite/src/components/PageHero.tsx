import Link from 'next/link'
import styles from './PageHero.module.css'

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
    return (
        <section className={`hero hero-half ${styles.hero}`}>
            <div className="hero-bg">
                <img
                    src="/hero-back.jpg"
                    alt={title}
                />
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.2)', zIndex: 1 }} />
            <div className="hero-content">
                <p className={styles.breadcrumb}>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index}>
                            {crumb.href ? (
                                <Link href={crumb.href}>{crumb.label}</Link>
                            ) : (
                                <span>{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && <span className={styles.breadcrumbSep}>›</span>}
                        </span>
                    ))}
                </p>
                <h1 className={`display ${styles.heroTitle}`}>{title}</h1>
                {subtitle && <p className={styles.heroSub}>{subtitle}</p>}
            </div>
        </section>
    )
}
