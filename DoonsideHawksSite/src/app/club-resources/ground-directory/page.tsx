import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { groundsDirectory } from '@/lib/groundsDirectoryData'
import styles from './page.module.css'

export const metadata = { title: 'Ground Directory — Doonside Hawks Soccer Club' }

export default function GroundDirectoryPage() {
    return (
        <div>
            {/* The standard top hero styling */}
            <PageHero
                title="Ground Directory" subtitle="Find the exact locations for all our visiting and home fixtures."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Ground Directory'}]}
            />

            {/* Main Table Content */}
            <section className="section bg-warm-fog">
                <div className="container" style={{ maxWidth: '1400px' }}>
                    <div className={styles.intro}>
                        <span className="section-label">Where We Play</span>
                        <h2 className="section-heading">Directory Map List</h2>
                        <p className="section-intro">
                            Click <strong style={{color: 'var(--color-primary)'}}>Get Directions</strong> to immediately open Google Maps and receive live routing to the selected park. 
                        </p>
                    </div>

                    {/* Responsive table wrapper */}
                    <div className={styles.tableWrapper}>
                        <table className={styles.directoryTable}>
                            <thead>
                                <tr>
                                    <th>Club Name</th>
                                    <th>Park Name</th>
                                    <th>Address</th>
                                    <th>Suburb</th>
                                    <th style={{ textAlign: 'center' }}>Map</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groundsDirectory.map((ground, idx) => {
                                    const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(ground.fullAddress)}`;
                                    
                                    return (
                                        <tr key={idx}>
                                            <td className={styles.colClub}>{ground.clubName}</td>
                                            <td className={styles.colPark}>{ground.parkName}</td>
                                            <td className={styles.colAddress}>{ground.address}</td>
                                            <td>{ground.suburb}</td>
                                            <td style={{ textAlign: 'center', width: '160px' }}>
                                                <a 
                                                    href={googleMapsUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className={`btn btn-ghost ${styles.btnDirection}`}
                                                >
                                                    Get Directions →
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
