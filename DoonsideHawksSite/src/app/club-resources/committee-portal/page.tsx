'use client'

import { useState, useTransition } from 'react'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ChevronDown, Lock, Eye, EyeOff } from 'lucide-react'
import { verifyPortalPassword } from './actions'
import styles from './page.module.css'


const resources = [
    { title: '2026 AGM Agenda', date: 'Feb 2026', type: 'Governance', href: '#' },
    { title: '2025 Financial Report', date: 'Dec 2025', type: 'Finance', href: '#' },
    { title: 'Committee Meeting Minutes — January 2026', date: 'Jan 2026', type: 'Governance', href: '#' },
    { title: 'Club Constitution', date: 'Updated 2024', type: 'Governance', href: '#' },
    { title: 'Ground Hire Agreement 2026', date: 'Jan 2026', type: 'Operations', href: '#' },
    { title: 'Budget Forecast 2026', date: 'Feb 2026', type: 'Finance', href: '#' },
]

export default function CommitteePortalPage() {
    const [pw, setPw] = useState('')
    const [show, setShow] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        startTransition(async () => {
            const result = await verifyPortalPassword(pw)
            if (result.success) {
                setAuthenticated(true)
                setPw('') // clear password from state
            } else {
                setError(result.error || 'Incorrect password. Please try again.')
            }
        })
    }

    return (
        <div>
            <PageHero
                title="Committee Portal" subtitle="Internal access only."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Committee Portal'}]}
            />

            <section className="section">
                <div className="container" style={{ maxWidth: 640 }}>
                    {!authenticated ? (
                        <div className={styles.loginBox}>
                            <div className={styles.loginIcon}><Lock size={36} /></div>
                            <h2 className="section-heading">Committee Access</h2>
                            <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>This area is restricted to Doonside Hawks committee members. Please enter the committee password to continue.</p>
                            <form onSubmit={handleLogin} className={styles.loginForm}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="portal-pw">Password</label>
                                    <div className={styles.pwField}>
                                        <input
                                            id="portal-pw"
                                            type={show ? 'text' : 'password'}
                                            className="form-input"
                                            value={pw}
                                            onChange={e => setPw(e.target.value)}
                                            placeholder="Enter committee password"
                                            autoComplete="current-password"
                                        />
                                        <button type="button" className={styles.showPw} onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>
                                            {show ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                    {error && <span className="form-error">{error}</span>}
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isPending || !pw.trim()}
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    {isPending ? 'Verifying…' : 'Access Portal →'}
                                </button>
                            </form>
                            <p className={styles.contactNote}>Forgotten the password? Contact the <Link href="/contact" className={styles.contactLink}>Club Secretary</Link>.</p>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.welcomeBanner}>
                                <span>✓ Authenticated — Welcome, Committee Member!</span>
                            </div>
                            <h2 className="section-heading">Committee Documents</h2>
                            <div className={styles.docList}>
                                {resources.map(r => (
                                    <div key={r.title} className={styles.docRow}>
                                        <div>
                                            <div className={styles.docTitle}>{r.title}</div>
                                            <div className={styles.docMeta}>{r.type} · {r.date}</div>
                                        </div>
                                        <a href={r.href} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>Download</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
