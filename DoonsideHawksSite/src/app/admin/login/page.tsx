import { login } from './actions'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

const ERROR_MESSAGES: Record<string, string> = {
  invalid_credentials: 'Invalid email or password. Please try again.',
  too_many_attempts: 'Too many login attempts. Please wait 60 seconds and try again.',
}

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error?: string }
}) {
  const errorMessage = searchParams?.error
    ? (ERROR_MESSAGES[searchParams.error] ?? 'An unexpected error occurred. Please try again.')
    : null

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
                    {errorMessage && (
                        <p role="alert" style={{
                            color: '#b91c1c',
                            backgroundColor: '#fee2e2',
                            border: '1px solid #fca5a5',
                            borderRadius: '6px',
                            padding: '12px 16px',
                            fontSize: '14px',
                            margin: '0 0 16px',
                        }}>
                            {errorMessage}
                        </p>
                    )}
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

