import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'Life Members — Doonside Hawks Soccer Club' }

const lifeMembers = [
    { id: 1, name: 'Brian Moran', year: 1995, title: 'Life Member', bio: 'Brian served as Club Secretary for 14 years and was the driving force behind the redevelopment of Doonside Reserve in 1991. His tireless dedication to the administration of the club has never been surpassed.' },
    { id: 2, name: 'Doreen Vella', year: 2001, title: 'Life Member', bio: 'Doreen ran the Hawks canteen single-handedly for over a decade and fundraised enough to purchase the club\'s first set of floodlights. She is remembered by hundreds of players whose earliest football memories include her famously good meat pies.' },
    { id: 3, name: 'Peter Anastas', year: 2006, title: 'Life Member', bio: 'Peter coached three generations of junior players at Doonside, including several who went on to represent NSW. His coaching philosophy — "football is what we play; respect is what we teach" — remains part of the club\'s DNA.' },
    { id: 4, name: 'Sandra Whelan', year: 2012, title: 'Life Member', bio: 'Sandra served as Club President for six years and led the committee through one of the most significant periods of growth in the club\'s history. Under her leadership, junior registrations doubled and the Hawks launched their first community outreach programme.' },
    { id: 5, name: 'Tony Papadimitriou', year: 2019, title: 'Life Member', bio: 'Tony has been the Hawks\' unofficial groundskeeper, media manager, and team photographer simultaneously — all for free, all for love. For over 20 years his images have documented the club\'s story in extraordinary detail.' },
]

export default function LifeMembersPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600&q=80&auto=format&fit=crop" alt="Life Members" />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.65)', zIndex: 1 }} />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Life Members</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Life Members</h1>
                    <p className={styles.heroSub}>Honouring those who gave the most.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className={styles.intro}>
                        <span className="section-label">The Highest Honour</span>
                        <h2 className="section-heading">Life Membership</h2>
                        <p className="section-intro">
                            Life Membership is the greatest honour the Doonside Hawks Soccer Club can bestow. It is awarded by the committee to those individuals whose contributions to the club have been extraordinary, sustained, and selfless. These are people who gave not because they were asked, but because they could not imagine doing anything less.
                        </p>
                    </div>
                    <div className={styles.membersGrid}>
                        {lifeMembers.map(m => (
                            <div key={m.id} className={styles.memberCard}>
                                <div className={styles.memberAvatar}>
                                    <span className={styles.avatarInitial}>{m.name[0]}</span>
                                </div>
                                <div className={styles.memberInfo}>
                                    <div className={styles.memberYear}>Life Member since {m.year}</div>
                                    <h3 className={styles.memberName}>{m.name}</h3>
                                    <p className={styles.memberBio}>{m.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
