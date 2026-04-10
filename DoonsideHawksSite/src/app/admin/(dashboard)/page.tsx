import Link from 'next/link'
import { LayoutDashboard, Users, Image as ImageIcon, MessageSquare, Trophy, Star, Heart } from 'lucide-react'
import styles from './page.module.css'

export const metadata = { title: 'Admin Dashboard — Doonside Hawks' }

export default function AdminPage() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <p className={styles.dashboardSubtitle}>Manage the Doonside Hawks web content safely without breaking the design.</p>
      </div>

      <div className={styles.grid}>
        
        {/* Honourboard Card */}
        <Link href="/admin/honourboard" className={styles.card}>
          <div className={styles.cardIcon}>
            <Trophy size={24} />
          </div>
          <h3 className={styles.cardTitle}>Honourboard</h3>
          <p className={styles.cardDesc}>Add or edit Golden and Silver Goals for Junior and Senior divisions.</p>
        </Link>

        {/* Gallery Card */}
        <Link href="/admin/gallery" className={styles.card}>
          <div className={styles.cardIcon}>
            <ImageIcon size={24} />
          </div>
          <h3 className={styles.cardTitle}>Gallery</h3>
          <p className={styles.cardDesc}>Upload images to the club gallery or embed YouTube video highlights.</p>
        </Link>

        {/* Life Members Card */}
        <Link href="/admin/life-members" className={styles.card}>
          <div className={styles.cardIcon}>
            <Heart size={24} />
          </div>
          <h3 className={styles.cardTitle}>Life Members</h3>
          <p className={styles.cardDesc}>Manage the official 100-slot grid of Life Members and 15-Year Players.</p>
        </Link>

        {/* Sponsors Card */}
        <Link href="/admin/sponsors" className={styles.card}>
          <div className={styles.cardIcon}>
            <Star size={24} />
          </div>
          <h3 className={styles.cardTitle}>Sponsors</h3>
          <p className={styles.cardDesc}>Manage the official sponsors dynamically on the homepage.</p>
        </Link>

      </div>
    </div>
  )
}
