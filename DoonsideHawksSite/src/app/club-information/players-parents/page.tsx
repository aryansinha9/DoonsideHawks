import Link from 'next/link'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export const metadata = { title: 'Players & Parents — Doonside Hawks Soccer Club' }

export default function PlayersParentsPage() {
    return (
        <div>
            <PageHero
                title="Players & Parents" subtitle="Club guidelines, requirements, and responsibilities."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Players & Parents'}]}
            />

            <section className="section bg-surface">
                <div className="container">
                    <div className={styles.contentWrapper}>
                        
                        <div className={styles.articleBlock}>
                            <h2>Parents & Players</h2>
                            <p>Each team and those team members’ parents have certain responsibilities and club requirements as part of their support.</p>
                            <p>As part of a successful running club it is requested that ALL parents invest a little time each season to make the club run smoothly.</p>
                            <p>The reasons we ask ALL parents help is that we are a small committee who need to be released from these duties to undertake other duties associated with game day etc.</p>
                            <div className={styles.calloutBox}>
                                * All of our COMMITTEE MEMBERS themselves are also Parents, Coaches, Managers or Players.
                            </div>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Junior and Senior Teams</h2>
                            <ul>
                                <li>Set up field (nets and flags) before all home games when that team is first game scheduled.</li>
                                <li>Clear the field (nets, flags, bins and signage) after all home games when no following game is scheduled.</li>
                                <li>Staff the BBQ and canteen as needed (A roster will be handed to all teams) *This is a condition upon registering with our club.</li>
                            </ul>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Training Times and Days</h2>
                            <p>Training times and days are organised by the COACH usually after consultation with parents to find a time that suits and also field availability.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Coaches and Managers</h2>
                            <p>All coaches and managers are parents and volunteers from within the club and or team.</p>
                            <p>All Coaches and Managers need to register on playfootball.com.au by the commencement of normal season. This includes uploading a photo of yourself so I.D. CARDS can be issued by the BDSFA (Last possible date to register and receive an ID CARD will be 30-06-14).</p>
                            <p>All coaches are encouraged to become accredited through coaching courses run thru the club. These courses equip coaches with up to date training techniques and outline the required drills and techniques to conduct a training session.</p>
                            <p>A “MEMBER PROTECTION DECLARATION” needs to be completed by all coaches, managers and volunteers and then handed in to our Club Secetary before season starts.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Coach</h2>
                            <p>Develop the skills of their squad, encourage fair play, have fun and get the best out of the team.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Manager</h2>
                            <p>Managers are the communication link between the club, players and parents.</p>
                            <p>The manager is responsible for filling the team sheets each week and paying of Referees fees where required and allocating the submission of a match report.</p>
                            <p>The Manager is to obtain a team sheet from the canteen or opposing team manager and mark the players off the team sheet in the presence of the opposing teams official whilst the opposing team managers checks the players identity cards.</p>
                            <p>The Manager is to print and sign their name on the team sheet. Failure to do so will result in a fine to the club.</p>
                            <div className={styles.calloutBox}>
                                Teams are also required to have someone act as a GROUND OFFICIAL for each game they play. This role is usually filled by a parent from the team. The GROUND OFFICIAL is also required to sign the team sheet.
                            </div>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Team Playing Strip</h2>
                            <p>Playing shirts are provided to the team manager at the commencement of the season and are to be kept together as a set after each game and washed by the Manager or delegated to a parent (NO TUMBLE DRYING).</p>
                            <p>Under no circumstances are the player shirts to be worn away the playing field.</p>
                            <p>Shirts are to be washed and kept in good order and returned to the club at your seasons end.</p>
                            <p>All players must provide their own boots and shin pads which are to be worn to all games and training sessions.</p>
                            <p>Club socks and shorts can be purchased through the club.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Sponsors</h2>
                            <p>Sponsorship brings financial stability and improved benefits to our members.</p>
                            <p>We are always looking at adding sponsors to our club, if you are interested in sponsoring or know of anyone that would be interested in a sponsor package please contact our committee.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Socials and Club Functions</h2>
                            <p>During the year the committee holds a social night which may be include – TRIVIA NIGHT, POKER NIGHT or other events that are beneficial to our soccer family. For these functions we require the support of our members and promotion of these events your teams.</p>
                            <p>These socials once again are to benefit our members so spread the word, join in and have fun.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Registration Fees</h2>
                            <p>Some of the things which are <strong>included</strong> in your registration fee include:</p>
                            <ul>
                                <li>MATCH FEES</li>
                                <li>REGISTRATION FEES TO THE BDSFA</li>
                                <li>AFFILATION FEES TO FOOTBALL NSW (FNSW)</li>
                                <li>AFFILATION FEES TO FOOTBALL FEDERATION AUSTRALIA (FFA)</li>
                                <li>INSURANCE</li>
                            </ul>
                            
                            <p style={{marginTop: '32px'}}>Some of the things which are <strong>NOT included</strong> in your registration fee include:</p>
                            <ul>
                                <li>GROUND HIRE TO COUNCIL</li>
                                <li>ELECTRICITY FOR FIELD LIGHTING AND AMENITIES BLOCK</li>
                                <li>MAINTANANCE TO CLUB GROUNDS</li>
                                <li>PURCHASE OF SOCCER EQUIPMENT</li>
                            </ul>
                            
                            <p style={{marginTop: '24px'}}>Registration fees alone do not cover our outgoings and therefore the club relies heavily on canteen sales, social nights, fund raising and sponsorship to help cover costs.</p>
                            <div className={styles.calloutBox} style={{borderColor: 'rgba(26,28,28,0.2)'}}>
                                Committee members, coaches and managers are without exception all voluntary and they receive no remuneration for their services.
                            </div>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Grading</h2>
                            <p>Players need to attend all grading sessions for their age group.</p>
                            <p>Those players who miss grading will likely be assigned in the first instance to the lowest grade team of that age group.</p>
                            <p>The grading process is designed to group players with similar abilities as to maximise their enjoyment and opportunity to improve.</p>
                            <p>The BDSFA has the final decision regarding the level at which each age team plays.</p>
                            <p>Players are graded individually on their performance during grading and are also looked at within a game structure.</p>
                        </div>

                        <div className={styles.articleBlock}>
                            <h2>Small Sided Games and Referees</h2>
                            <p>There will be <strong>NO REFEREE</strong> as such in all small sided games.</p>
                            <p><strong>AGE GROUPS U5-7</strong> will be controlled by a GAME LEADER which will be a parent, coach or volunteer who has knowledge of the game and is aged 16 years or over.</p>
                            <p><strong>AGE GROUPS U8-9</strong> will have INSTRUCTING REFEREES which will also be a parent, coach or volunteer aged 16 years or over.</p>
                            <div className={styles.calloutBox}>
                                This decision is out of the clubs control. We hope that all parents, coaches and volunteers within this age group lend a helping hand.
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
