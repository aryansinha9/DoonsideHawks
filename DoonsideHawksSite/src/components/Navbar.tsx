'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, MapPin, Users, Image, Clock, Trophy, Heart, Folder, UserCheck, Shield, Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const clubInfoItems = [
    { label: 'Gallery', desc: 'Photos from our teams and events', href: '/club-information/gallery', Icon: Image },
    { label: 'Committee Profiles', desc: 'Meet the people running the club', href: '/club-information/committee', Icon: Users },
    { label: 'Social Media Wall', desc: 'Follow along with club updates', href: '/club-information/social', Icon: Clock },
    { label: 'Club History', desc: 'Our story from 1981 to today', href: '/club-information/history', Icon: BookOpen },
    { label: 'Honourboard', desc: 'Past award winners and champions', href: '/club-information/honourboard', Icon: Trophy },
    { label: 'Life Members', desc: 'Recognising our greatest contributors', href: '/club-information/life-members', Icon: Heart },
]

// Note: BookOpen was missing from lucide-react import above in the original but I will re-add it.
import { BookOpen } from 'lucide-react'

const clubResourceItems = [
    { label: 'Ground Directory', desc: 'Find venues and get directions', href: '/club-resources/ground-directory', Icon: MapPin },
    { label: "Coach & Manager's Corner", desc: 'Resources for team officials', href: '/club-information/coach-manager', Icon: UserCheck },
    { label: 'Document Library', desc: 'Club documents and forms', href: '/club-resources/documents', Icon: Folder },
    { label: 'Players & Parents', desc: 'What you need to know', href: '/club-information/players-parents', Icon: Users },
    { label: 'Committee Portal', desc: 'Internal committee resources', href: 'https://email.fatcow.com/roundcube/', Icon: Shield },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const [menuOpen, setMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Hide on scroll down, show on scroll up (or near top)
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false)
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true)
            }

            setScrolled(currentScrollY > 80)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    useEffect(() => {
        setMenuOpen(false)
        setActiveDropdown(null)
    }, [pathname])

    useEffect(() => {
        // Only lock body scroll on mobile
        const isMobile = window.innerWidth <= 900;
        if (isMobile && menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

    return (
        <nav className={`${styles.nav} ${!isVisible ? styles.navHidden : ''}`}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <img
                        src="/silver-hawk.png"
                        alt="Doonside Hawks Logo"
                        className={styles.logoImage}
                    />
                </Link>

                <div className={styles.navContentRight}>
                    {/* Parallelogram Background */}
                    <div className={`${styles.parallelogramBg} ${menuOpen ? styles.bgOpen : ''}`} />

                    {/* Unified Sliding Menu */}
                    <div className={`${styles.menuContainer} ${menuOpen ? styles.menuOpen : ''}`}>
                        <div className={styles.menuLinks}>
                            <NavLink href="/" label="Home" active={pathname === '/'} onClick={() => setMenuOpen(false)} />
                            <NavLink href="/fixtures" label="Fixtures" active={isActive('/fixtures')} onClick={() => setMenuOpen(false)} />

                            {/* Club Information */}
                            <div
                                className={styles.menuItemWrapper}
                                onMouseEnter={() => setActiveDropdown('club-info')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={`${styles.navLink} ${isActive('/club-information') ? styles.navLinkActive : ''}`}
                                    onClick={() => setMobileExpanded(mobileExpanded === 'club-info' ? null : 'club-info')}
                                >
                                    Club Information <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === 'club-info' || mobileExpanded === 'club-info' ? styles.chevronOpen : ''}`} />
                                </button>

                                {/* Desktop Mega Menu */}
                                <div className={styles.desktopMegaMenu}>
                                    {activeDropdown === 'club-info' && <MegaMenu items={clubInfoItems} />}
                                </div>

                                {/* Mobile Accordion */}
                                <div className={`${styles.mobileAccordionContent} ${mobileExpanded === 'club-info' ? styles.accordionOpen : ''}`}>
                                    {clubInfoItems.map(({ label, href }) => (
                                        <Link key={href} href={href} className={styles.mobileSubLink} onClick={() => setMenuOpen(false)}>
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Club Resources */}
                            <div
                                className={styles.menuItemWrapper}
                                onMouseEnter={() => setActiveDropdown('club-resources')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={`${styles.navLink} ${isActive('/club-resources') ? styles.navLinkActive : ''}`}
                                    onClick={() => setMobileExpanded(mobileExpanded === 'club-resources' ? null : 'club-resources')}
                                >
                                    Club Resources <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === 'club-resources' || mobileExpanded === 'club-resources' ? styles.chevronOpen : ''}`} />
                                </button>

                                {/* Desktop Mega Menu */}
                                <div className={styles.desktopMegaMenu}>
                                    {activeDropdown === 'club-resources' && <MegaMenu items={clubResourceItems} />}
                                </div>

                                {/* Mobile Accordion */}
                                <div className={`${styles.mobileAccordionContent} ${mobileExpanded === 'club-resources' ? styles.accordionOpen : ''}`}>
                                    {clubResourceItems.map(({ label, href }) => (
                                        <Link key={href} href={href} className={styles.mobileSubLink} onClick={() => setMenuOpen(false)}>
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <NavLink href="/contact" label="Contact Us" active={isActive('/contact')} onClick={() => setMenuOpen(false)} />

                            <Link href="/registration" className={styles.regButton} onClick={() => setMenuOpen(false)}>
                                2026 Registration
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <button
                        className={`${styles.hamburger} ${scrolled && !menuOpen ? styles.hamburgerScrolled : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick?: () => void }) {
    return (
        <Link href={href} className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`} onClick={onClick}>
            {label}
        </Link>
    )
}

function MegaMenu({ items }: { items: typeof clubInfoItems }) {
    return (
        <div className={styles.megaMenu}>
            <div className={styles.megaMenuInner}>
                {items.map(({ label, href }) => (
                    <Link key={href} href={href} className={styles.megaMenuItem}>
                        <span className={styles.megaLabel}>{label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
