import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'Club History — Doonside Hawks Soccer Club' }

export default function HistoryPage() {
    return (
        <div>
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1600&q=80&auto=format&fit=crop" alt="Club History" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Club History</span></p>
                    <h1 className={`display ${styles.heroTitle}`}>Our Story</h1>
                    <p className={styles.heroSub}>Over four decades of football, family, and community.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="section-label">Est. 1981</span>
                    <h2 className="section-heading">The Doonside Hawks Story</h2>
                    <p className={styles.intro}>
                        The Doonside Hawks Soccer Club was started back in 1981. The club has grown from humble beginnings when our home ground was Charlie Bali Reserve (formally Kareela Reserve). The club eventually moved to Glendenning Reserve, doubling its size to 2 full fields and 3 mini fields.
                    </p>
                    <p className={styles.intro}>
                        This is our story.
                    </p>

                    <div className={styles.historyBlock}>
                        <h3>The Foundation</h3>
                        <p>The first get together to form a club occurred in October 1980 at the Doonside Community Centre. It was attended by Brian Picket, Steve Lindsay, Fred Sammut, Margaret McColl, Brian Ross, and John Xuereb as an adviser.</p>
                        <p>Discussion centred around gathering funds to start the club. A vital donation of $300 was made by the ruling Sports and Recreation Club (which included the local Cricket and Athletics clubs). Next was selecting the core identity: maroon and white were chosen as the club colours, initially operating under the name Doonside Sports and Recreation Soccer Club.</p>
                        <p>The newly formed committee immediately applied and registered to join the Blacktown Association.</p>
                    </div>

                    <div className={styles.splitGrid}>
                        <div className={styles.historyCard}>
                            <h4>Inaugural Committee</h4>
                            <div className={styles.listRow}><span className={styles.listRole}>President</span><span className={styles.listName}>Brian Ross</span></div>
                            <div className={styles.listRow}><span className={styles.listRole}>Vice President</span><span className={styles.listName}>Steve Lindsay</span></div>
                            <div className={styles.listRow}><span className={styles.listRole}>Secretary</span><span className={styles.listName}>Brian Picket</span></div>
                            <div className={styles.listRow}><span className={styles.listRole}>Competition Secretary</span><span className={styles.listName}>Fred Sammut</span></div>
                            <div className={styles.listRow}><span className={styles.listRole}>Treasurer</span><span className={styles.listName}>Margaret McColl</span></div>
                            <p style={{marginTop: '16px', fontSize: '13px', color: 'var(--color-secondary-text)'}}>Other members joined soon after to establish the club's administration.</p>
                        </div>
                        <div className={styles.historyCard}>
                            <h4>Inaugural Sponsors</h4>
                            <p style={{marginBottom: '16px', fontSize: '14px', lineHeight: 1.5}}>Brian Pickett sponsored the club directly and secured critical early backing to fund the initial operations:</p>
                            <ul>
                                <li className={styles.listName}>Palmers Auto Electrical</li>
                                <li className={styles.listName}>EdRoy Mower Service</li>
                                <li className={styles.listName}>Phil McColl</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.historyBlock}>
                        <h3>Against the Odds: The First Season</h3>
                        <p>The original home ground was slated to be Kareela West Reserve (now Charlie Bali Reserve), but because the ground would not be ready for the start of the 1981 season, home games were temporarily played at the Mt Druit Sports Centre.</p>
                        <p>There was significant criticism about starting a soccer club in Doonside, heavily seen as a Rugby League dominated area. The committee pushed on regardless, holding its first Registration Day on the first Saturday in February 1981 at the Doonside Shops on Hillend Road.</p>
                        <p>By the end of February, the club had stunned expectations—registering enough players to form 7 teams spanning U6 to U13. A massive surprise for the region, especially considering that in those days, U6 to U11 played full field with 11 players plus reserves, not the small-sided games of today. The influx certainly ruffled a few feathers around the district.</p>
                        <p>Playing shirts were purchased by the club to unify the teams, whilst the playing shorts were hand-made by dedicated volunteers to save money.</p>
                    </div>

                    <div className={styles.historyBlock}>
                        <h3>The Class of '81: Original Teams</h3>
                        <p style={{fontSize: '14px', color: 'var(--color-secondary-text)'}}>The inaugural coaches guiding the first generation of Hawks included S. Ives, E. Doboze, I. Crawford, Ron James, B. Horwood, and Fred Sammut.</p>
                        
                        <div className={styles.rosterGrid}>
                            <div className={styles.ageGroup}>
                                <h4>Under 6</h4>
                                <ul><li>M Sammut, M Duffy</li><li>G Ives, A Boyd</li><li>N Attard, C Moore*</li><li>A Dobosz, M Markovic</li><li>S Castle, B Heller</li><li>P Cartwright, R Hickson</li><li>T James</li></ul>
                            </div>
                            <div className={styles.ageGroup}>
                                <h4>Under 7</h4>
                                <ul><li>B Russell, A Hooker</li><li>S Morgan, D Crawford</li><li>G Miggins, G Croft</li><li>S Morohan, S Burns</li><li>L Dobosz, D Sanders</li><li>S Bedrossien, W Mendes</li><li>D McKinder, D Rowe</li></ul>
                            </div>
                            <div className={styles.ageGroup}>
                                <h4>Under 8</h4>
                                <ul><li>A Suffling, W Oakley</li><li>G Johnston, B Grey</li><li>S Randal, S Ross</li><li>A Martin, N Mashall</li><li>J Hickson, A Woods</li><li>M Pickett, S Skeen</li></ul>
                            </div>
                            <div className={styles.ageGroup}>
                                <h4>Under 9</h4>
                                <ul><li>A Attard*, C Boyd</li><li>C Hodge, B Jenkins</li><li>B Marshal, D Miggins</li><li>T Moore, C Russell</li><li>M Will, P Vella</li><li>S Perrie</li></ul>
                            </div>
                            <div className={styles.ageGroup}>
                                <h4>Under 10</h4>
                                <ul><li>S Zoraja, C Smith</li><li>D Thomas, A James</li><li>T Bond, S Burnett</li><li>P Harris, S Morgan</li><li>T Beecroft</li></ul>
                            </div>
                            <div className={styles.ageGroup}>
                                <h4>Under 11</h4>
                                <ul><li>W McDowell, C Turczak</li><li>G Russell, D Davies</li><li>J Worthey, G Parks</li><li>I Zoraja, D Pickett</li><li>B Strahorn, J Ross</li><li>H Oakley, P Bedrossien</li><li>M Baker, B McDowell</li></ul>
                            </div>
                            <div className={styles.ageGroup}>
                                <h4>Under 13</h4>
                                <ul><li>D McColl, W Harrison</li><li>J Attard, M Bedrossen</li><li>J Martin, D Riminic</li><li>M Johnston, A Buckley</li><li>G Zivinavic, W Hoffnan</li><li>W Rattray, J Tabone</li><li>D Scutts, S Dodd</li></ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.alumniCard}>
                        <h3>Notable Alumni</h3>
                        <div className={styles.alumniEntry}>
                            <p style={{fontWeight: '700', color: 'var(--color-primary)', fontSize: '18px'}}>A Attard</p>
                            <p className={styles.alumniDesc}>The very first player from Doonside Hawks to be selected and play for a Representative team.</p>
                        </div>
                        <div className={styles.alumniEntry}>
                            <a href="https://footballaustralia.com.au/craig-moore" target="_blank" rel="noopener noreferrer" className={styles.alumniLink}>Craig Moore</a>
                            <p className={styles.alumniDesc}>
                                Starting in our inaugural Under 6 team, Moore went on to make over 50 appearances for the{' '}
                                <a href="https://en.wikipedia.org/wiki/Australia_national_soccer_team" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)', textDecoration: 'underline'}}>Australia national team</a>
                                , including at the{' '}
                                <a href="https://en.wikipedia.org/wiki/2006_FIFA_World_Cup" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)', textDecoration: 'underline'}}>2006</a>
                                {' '}and{' '}
                                <a href="https://en.wikipedia.org/wiki/2010_FIFA_World_Cup" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)', textDecoration: 'underline'}}>2010</a>
                                {' '}World Cups in Germany and South Africa. Having made his debut in 1995, he has been{' '}
                                <a href="https://en.wikipedia.org/wiki/List_of_Australia_men%27s_national_soccer_team_captains" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)', textDecoration: 'underline'}}>Australian team captain</a>
                                {' '}a number of times.
                            </p>
                        </div>
                    </div>

                    <div className={styles.closingStatement}>
                        <p className={styles.closingTagline}>#ProudToBeAHawk</p>
                        <p>The best chapters of the Hawks story are still being written. We invite you to be part of them.</p>
                        <Link href="/registration" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>Join the Hawks in 2026 →</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
