'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import styles from './Footer.module.css'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Fixtures', href: '/fixtures' },
    { label: 'News & Updates', href: '/news' },
    { label: '2026 Registration', href: '/registration' },
    { label: 'Club History', href: '/club-information/history' },
    { label: 'Gallery', href: '/club-information/gallery' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Admin Access', href: '/admin' },
]

export default function Footer() {
    const pathname = usePathname()

    // Hide footer entirely on admin routes
    if (pathname?.startsWith('/admin')) {
        return null
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Column 1 & 2: Brand Area */}
                        <div className={styles.brandCol}>
                            <Image
                                src="/HawksLogo.png"
                                alt="Doonside Hawks Soccer Club Logo"
                                width={160}
                                height={160}
                                className={styles.mascotImage}
                                priority
                            />
                            <p className={styles.tagline}>
                                More than a football club.<br />A community since 1981.
                            </p>
                            <div className={styles.social}>
                                <a href="https://facebook.com/doonsidehawkssoccerclub" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://instagram.com/doonsidehawks" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://youtube.com/@doonsidehawks9510" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div className={styles.linksCol}>
                            <h4 className={styles.colTitle}>Quick Links</h4>
                            <ul className={styles.linkList}>
                                {quickLinks.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Visit Us */}
                        <div className={styles.contactCol}>
                            <h4 className={styles.colTitle}>Visit Us</h4>
                            <div className={styles.contactItem}>
                                <MapPin size={16} className={styles.contactIcon} />
                                <span>Doonside Reserve<br />Doonside NSW 2767</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={16} className={styles.contactIcon} />
                                <a href="mailto:info@doonsidehawks.com.au" className={styles.footerLink}>
                                    info@doonsidehawks.com.au
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={16} className={styles.contactIcon} />
                                <span>Contact via email or social media</span>
                            </div>
                            <div style={{ marginTop: '24px' }}>
                                <Link href="/registration" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '12px', letterSpacing: '0.15em' }}>
                                    Join The Hawks
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal rule (border-white/10) */}
            <hr className={styles.rule} />

            {/* Copyright Bar */}
            <div className={styles.copyright}>
                <div className="container">
                    <div className={styles.copyrightInner}>
                        <span>
                            © {new Date().getFullYear()} Doonside Hawks Soccer Club. All rights reserved.
                        </span>
                        <span>#ProudToBeAHawk</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
