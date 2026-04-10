import { login } from './actions'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export default function LoginPage() {
  return (
    <div>
        <PageHero
            title="Admin Access" subtitle="Secure login for Doonside Hawks officials."
            breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Admin Login'}]}
        />
        <section className="section bg-warm-fog" style={{ minHeight: '60vh' }}>
            <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className={styles.loginCard}>
                    <div className={styles.cardHeader}>
                        <h2>Admin Portal</h2>
                        <p>Enter your credentials to continue</p>
                    </div>
                    <form className={styles.formContainer}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                required 
                                placeholder="admin@doonsidehawks.com.au"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                required 
                                placeholder="••••••••"
                            />
                        </div>
                        <button 
                            formAction={login}
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: 'var(--space-4)', padding: 'var(--space-4)', fontSize: 'var(--text-base)', cursor: 'pointer' }}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}
