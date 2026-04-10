import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { createClient } from '@/utils/supabase/server'
import styles from './page.module.css'

export const metadata = { title: 'Life Members — Doonside Hawks Soccer Club' }

type MemberType = 'S' | '15' | '';

type LifeMember = {
    id: number | string;
    name: string;
    year: string;
    type: MemberType;
};

export default async function LifeMembersPage() {
    const supabase = createClient()
    const { data } = await supabase.from('life_members').select('*').order('id', { ascending: true })
    
    // Ensure 100 slots are preserved. If there's less from the DB, pad it out.
    // So if the DB has 80 rows, we append 20 empty ones so the visual columns structure aligns perfectly.
    const fetchedMembers: LifeMember[] = data || []
    
    // Safety check just in case the db has no items yet.
    let allMembers: LifeMember[] = [...fetchedMembers]
    const needed = 100 - allMembers.length
    if (needed > 0) {
        // Append blank slots
        for(let i=0; i<needed; i++) {
           allMembers.push({ id: `temp-${i}`, name: '', year: '', type: '' })
        }
    }
    // Hard fallback just in case:
    allMembers[allMembers.length - 1] = { id: '79-100', name: '', year: '', type: '' } // Maintain existing last row visual layout 

    // Slice helper to chunk columns correctly 1-25 | 26-50 | 51-75 | 76-100
    const columns = [
        allMembers.slice(0, 25),
        allMembers.slice(25, 50),
        allMembers.slice(50, 75),
        allMembers.slice(75, 79) // Stops precisely at the end block per original data
    ]

    return (
        <div>
            <PageHero
                title="Honour Board" subtitle="Doonside Hawks Soccer Club Life Members"
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Life Members'}]}
            />

            <section className="section bg-warm-fog">
                <div className="container" style={{ maxWidth: '1400px' }}>
                    
                    <div className={styles.intro}>
                        <span className="section-label">The Highest Honour</span>
                        <h2 className="section-heading">Life Membership</h2>
                        <p className="section-intro">
                        Life Membership is the greatest honour the Doonside Hawks Soccer Club can bestow. It is awarded by the committee to individuals whose contributions to the club have been extraordinary, sustained, and selfless.
                        </p>
                    </div>

                    {/* Massive 4-Column Board Grid */}
                    <div className={styles.boardContainer}>
                        {columns.map((colData, colIndex) => (
                            <div key={colIndex} className={styles.boardCol}>
                                <div className={styles.colHeader}>
                                    <div>#</div>
                                    <div>Life Member</div>
                                    <div style={{textAlign: 'center'}}>Year</div>
                                    <div style={{textAlign: 'center'}}>Type</div>
                                </div>
                                {colData.map((m) => {
                                    const isDeceased = m.name.startsWith('*');
                                    const cleanName = isDeceased ? m.name.substring(1) : m.name;

                                    return (
                                        <div key={m.id} className={styles.boardRow}>
                                            <div className={styles.cellId}>{m.id}</div>
                                            <div className={styles.cellName}>
                                                {isDeceased && <span className={styles.asterisk}>* </span>}
                                                {cleanName}
                                            </div>
                                            <div className={styles.cellYear}>{m.year}</div>
                                            <div className={styles.cellType}>
                                                {m.type === 'S' && <span className={styles.badgeS}>S</span>}
                                                {m.type === '15' && <span className={styles.badge15}>15</span>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Legend Component */}
                    <div className={styles.legend}>
                        <h4 className={styles.legendTitle}>Legend</h4>
                        <div className={styles.legendRow}><span className={styles.asterisk}>*</span> Deceased</div>
                        <div className={styles.legendRow}><span className={styles.badgeS}>S</span> Service to Club</div>
                        <div className={styles.legendRow}><span className={styles.badge15}>15</span> 15 Year Player</div>
                    </div>

                </div>
            </section>
        </div>
    )
}
