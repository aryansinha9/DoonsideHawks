import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import AdminSidebar from './components/AdminSidebar'
import styles from './layout.module.css'
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  // Protect internal /admin routes. If no active session, send back to login.
  const { data: { session }, error } = await supabase.auth.getSession()

  // Wait, Nextjs App Router with Supabase recommends using getUser() for route protection guarantees over getSession()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className={styles.dashboardLayout}>
      <AdminSidebar userEmail={user.email || 'Admin'} />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
}
