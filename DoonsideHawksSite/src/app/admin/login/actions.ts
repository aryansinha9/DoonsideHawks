'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // Extract form data
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Call Supabase to authenticate
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // If there's an error, realistically we should return it to the UI.
  // For brevity/simplicity in this initial setup, we will redirect back to login if it fails.
  if (error) {
    // A robust app would return structured `{ error: error.message }`
    redirect('/admin/login?error=Invalid Credentials')
  }

  // Success: redirect to admin dashboard
  revalidatePath('/admin', 'layout')
  redirect('/admin')
}
