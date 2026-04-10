'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Image as ImageIcon, MessageSquare, Trophy, LogOut, Star } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import styles from '../layout.module.css'

export default function AdminSidebar({ userEmail }: { userEmail: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
    router.push('/admin/login')
  }

  const links = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/honourboard', icon: Trophy, label: 'Honourboard' },
    { href: '/admin/gallery', icon: ImageIcon, label: 'Gallery' },
    { href: '/admin/life-members', icon: Users, label: 'Life Members' },
    { href: '/admin/sponsors', icon: Star, label: 'Sponsors' },
  ]

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarBrand}>
          HAWKS<span style={{ color: '#D32F2F' }}>ADMIN</span>
        </h2>
        <div className={styles.sidebarEmail}>
          {userEmail}
        </div>
      </div>

      <nav className={styles.sidebarNav}>
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href

          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              <Icon size={20} />
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        <button 
          onClick={handleLogout}
          className={styles.logoutBtn}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  )
}
