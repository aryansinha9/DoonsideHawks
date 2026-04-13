'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

// ---------------------------------------------------------------------------
// Security: Simple in-process rate limiter
// 5 failed attempts per IP per 60 s window before the action hard-blocks.
// Resets on Vercel cold start — sufficient for a low-traffic club admin panel.
// For distributed rate limiting upgrade to Upstash Rate Limit + KV.
// ---------------------------------------------------------------------------
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = loginAttempts.get(ip)

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 60_000 })
    return true // allowed
  }

  if (entry.count >= 5) return false // blocked

  entry.count++
  return true // allowed
}

export async function login(formData: FormData) {
  // Resolve the caller's IP from Vercel / proxy headers
  const headersList = headers()
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    redirect('/admin/login?error=too_many_attempts')
  }

  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    // Security: use a generic error code — not the raw Supabase message —
    // to prevent user enumeration and to avoid leaking detail into access logs.
    redirect('/admin/login?error=invalid_credentials')
  }

  revalidatePath('/admin', 'layout')
  redirect('/admin')
}

