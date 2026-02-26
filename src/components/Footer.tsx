import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import styles from './Footer.module.css'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Fixtures', href: '/fixtures' },
    { label: 'Contact Us', href: '/contact' },
    { label: '2026 Registration', href: '/registration' },
]

const clubInfoLinks = [
    { label: 'Gallery', href: '/club-information/gallery' },
    { label: 'Committee Profiles', href: '/club-information/committee' },
    { label: 'Club History', href: '/club-information/history' },
    { label: 'Honourboard', href: '/club-information/honourboard' },
    { label: 'Life Members', href: '/club-information/life-members' },
]

const resourceLinks = [
    { label: 'Ground Directory', href: '/club-resources/ground-directory' },
    { label: "Coach & Manager's Corner", href: '/club-resources/coaches-corner' },
    { label: 'Document Library', href: '/club-resources/document-library' },
    { label: 'Players & Parents', href: '/club-resources/players-parents' },
    { label: 'Committee Portal', href: '/club-resources/committee-portal' },
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Column 1: Brand */}
                        <div className={styles.brandCol}>
                            <div className={styles.footerLogo}>
                                <Image
                                    src="/HawksLogo.png"
                                    alt="Doonside Hawks Soccer Club Logo"
                                    width={240}
                                    height={240}
                                    className={styles.mascotImage}
                                    priority
                                />
                            </div>
                            <p className={styles.tagline}>
                                More than a football club.<br />A community since 1981.
                            </p>
                            <div className={styles.social}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className={styles.linksCol}>
                            <h4 className={styles.colTitle}>Quick Links</h4>
                            <ul className={styles.linkList}>
                                {quickLinks.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                            <h4 className={`${styles.colTitle} ${styles.colTitleSecond}`}>Club Resources</h4>
                            <ul className={styles.linkList}>
                                {resourceLinks.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Club Information */}
                        <div className={styles.linksCol}>
                            <h4 className={styles.colTitle}>Club Information</h4>
                            <ul className={styles.linkList}>
                                {clubInfoLinks.map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className={styles.contactCol}>
                            <h4 className={styles.colTitle}>Contact</h4>
                            <div className={styles.contactItem}>
                                <MapPin size={14} className={styles.contactIcon} />
                                <span>Doonside Reserve<br />Doonside NSW 2767</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={14} className={styles.contactIcon} />
                                <a href="mailto:info@doonsidehawks.com.au" className={styles.footerLink}>
                                    info@doonsidehawks.com.au
                                </a>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={14} className={styles.contactIcon} />
                                <span>Contact via email or social media</span>
                            </div>
                            <Link href="/registration" className={`btn btn-pink ${styles.regCta}`}>
                                Join the Hawks →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gold Rule */}
            <hr className="gold-rule" />

            {/* Copyright Bar */}
            <div className={styles.copyright}>
                <div className="container">
                    <div className={styles.copyrightInner}>
                        <span className={styles.copyrightText}>
                            © {new Date().getFullYear()} Doonside Hawks Soccer Club. All rights reserved.
                        </span>
                        <span className={styles.copyrightTagline}>#ProudToBeAHawk</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
