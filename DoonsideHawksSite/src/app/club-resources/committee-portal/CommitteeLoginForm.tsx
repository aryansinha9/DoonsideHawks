'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { verifyPortalPassword } from './actions'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function CommitteeLoginForm() {
    const [pw, setPw] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        startTransition(async () => {
            const result = await verifyPortalPassword(pw)
            if (result.success) {
                // Refresh the page to trigger the Server Component to read the newly set cookie
                router.refresh()
            } else {
                setError(result.error || 'Incorrect password. Please try again.')
            }
        })
    }

    return (
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
    )
}
