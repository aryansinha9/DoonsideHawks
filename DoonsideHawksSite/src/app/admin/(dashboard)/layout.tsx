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

  // Security: getUser() makes a network call to Supabase to verify the token
  // server-side. getSession() only reads the local cookie and must NOT be used
  // for access control as it can be spoofed.
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
