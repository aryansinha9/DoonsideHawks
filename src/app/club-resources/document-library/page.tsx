'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Download, Search } from 'lucide-react'
import styles from './page.module.css'

const documents = [
    { id: 1, name: 'Club Constitution', category: 'Governance', year: 2024, href: '#' },
    { id: 2, name: 'Child Safeguarding Policy', category: 'Policies', year: 2025, href: '#' },
    { id: 3, name: 'Code of Conduct — Players', category: 'Policies', year: 2025, href: '#' },
    { id: 4, name: 'Code of Conduct — Parents & Spectators', category: 'Policies', year: 2025, href: '#' },
    { id: 5, name: 'Volunteer Onboarding Guide', category: 'Operations', year: 2026, href: '#' },
    { id: 6, name: 'Registration Form 2026', category: 'Forms', year: 2026, href: '#' },
    { id: 7, name: 'Canteen Procedures Manual', category: 'Operations', year: 2025, href: '#' },
    { id: 8, name: 'Ground Hire Application', category: 'Forms', year: 2026, href: '#' },
    { id: 9, name: 'Annual General Meeting Minutes — 2025', category: 'Governance', year: 2025, href: '#' },
    { id: 10, name: 'Annual General Meeting Minutes — 2024', category: 'Governance', year: 2024, href: '#' },
    { id: 11, name: 'Grounds Maintenance Schedule', category: 'Operations', year: 2026, href: '#' },
    { id: 12, name: 'Media & Photography Policy', category: 'Policies', year: 2024, href: '#' },
]

const categories = ['All', 'Governance', 'Policies', 'Operations', 'Forms']

export default function DocumentLibraryPage() {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('All')

    const filtered = documents.filter(d => {
        const matchQ = d.name.toLowerCase().includes(query.toLowerCase())
        const matchC = category === 'All' || d.category === category
        return matchQ && matchC
    })

    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1568667256549-094345857652?w=1600&q=80&auto=format&fit=crop" alt="Document library" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Document Library</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Document Library</h1>
                    <p className={styles.heroSub}>Club documents, forms, and policies.</p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className={styles.filterBar}>
                        <div className={styles.searchBox}>
                            <Search size={16} className={styles.searchIcon} />
                            <input type="text" placeholder="Search documents…" value={query} onChange={e => setQuery(e.target.value)} className={styles.searchInput} />
                        </div>
                        <div className={styles.categoryFilters}>
                            {categories.map(c => (
                                <button key={c} className={`${styles.filterBtn} ${category === c ? styles.active : ''}`} onClick={() => setCategory(c)}>{c}</button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.docTable}>
                        <div className={styles.docHead}>
                            <span>Document Name</span>
                            <span>Category</span>
                            <span>Year</span>
                            <span>Download</span>
                        </div>
                        {filtered.length === 0 ? (
                            <div className={styles.empty}>No documents match your search.</div>
                        ) : filtered.map(d => (
                            <div key={d.id} className={styles.docRow}>
                                <span className={styles.docName}>{d.name}</span>
                                <span className={styles.docCat}>{d.category}</span>
                                <span className={styles.docYear}>{d.year}</span>
                                <a href={d.href} className="btn btn-primary" style={{ padding: '8px 14px', fontSize: '12px', gap: '6px' }}>
                                    <Download size={13} /> Download
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
