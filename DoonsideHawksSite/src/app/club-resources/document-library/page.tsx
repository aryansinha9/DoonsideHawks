'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ChevronDown, Download, Search } from 'lucide-react'
import styles from './page.module.css'

const documents = [
    { id: 1, name: 'Coach, Manager and Spectator Behaviour Code of Conduct', category: 'Policies', year: 2026, href: '/coach_and_spectator_behaviour.pdf' },
    { id: 2, name: 'Images of Children', category: 'Policies', year: 2026, href: '/images-of-children-asc-1__1_.pdf' },
    { id: 3, name: 'Ground Official Documents', category: 'Operations', year: 2026, href: '/ground_official.pdf' },
    { id: 4, name: 'Football NSW Social Media Policy', category: 'Policies', year: 2026, href: '/fnsw_social_media_policy.pdf' },
    { id: 5, name: 'Insurance Injury Documents', category: 'Forms', year: 2026, href: '/fnsw_personal_injury_claim_form_2014.pdf' },
    { id: 6, name: 'DHSC Bylaws', category: 'Governance', year: 2009, href: '/dhsc_objects_rules___by_laws_2009.pdf' },
    { id: 7, name: 'DHSC Regulations', category: 'Governance', year: 2016, href: '/dhsc_regulations_2016.pdf' },
    { id: 8, name: 'DHSC Constitution', category: 'Governance', year: 2016, href: '/dhsc_constitution_2016.pdf' },
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
            <PageHero
                title="Document Library" subtitle="Club documents, forms, and policies."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Document Library'}]}
            />
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
                                <a href={d.href} download className="btn btn-primary" style={{ padding: '8px 14px', fontSize: '12px', gap: '6px' }}>
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
