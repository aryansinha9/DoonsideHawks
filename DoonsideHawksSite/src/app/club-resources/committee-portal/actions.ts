'use server'

import { cookies, headers } from 'next/headers'

interface PortalResult {
    success: boolean
    error?: string
}

// ---------------------------------------------------------------------------
// Security: Simple in-process rate limiter (A07 Fix)
// 5 failed attempts per IP per 60 s window.
// ---------------------------------------------------------------------------
const portalAttempts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = portalAttempts.get(ip)

  if (!entry || now > entry.resetAt) {
    portalAttempts.set(ip, { count: 1, resetAt: now + 60_000 })
    return true // allowed
  }

  if (entry.count >= 5) return false // blocked

  entry.count++
  return true // allowed
}

export async function verifyPortalPassword(password: string): Promise<PortalResult> {
    const headersList = headers()
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headersList.get('x-real-ip') ??
      'unknown'

    if (!checkRateLimit(ip)) {
      console.warn(`[SECURITY] Rate-limit blocked Committee Portal access for IP: ${ip}`)
      return { success: false, error: 'Too many attempts. Please try again later.' }
    }

    // Small artificial delay to prevent brute force timing attacks
    await new Promise(r => setTimeout(r, 400))

    const correctPassword = process.env.COMMITTEE_PORTAL_PASSWORD

    if (!correctPassword) {
        // If no env var is set, portal is locked
        console.warn('[Committee Portal] COMMITTEE_PORTAL_PASSWORD environment variable is not set.')
        return { success: false, error: 'Portal is not configured. Please contact the web administrator.' }
    }

    if (password === correctPassword) {
        // A01 Fix: Set an HttpOnly cookie to establish a server-side session
        cookies().set('committee_auth', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        })
        console.log(`[SECURITY] Successful Committee Portal access for IP: ${ip}`)
        return { success: true }
    }

    console.warn(`[SECURITY] Failed Committee Portal access attempt for IP: ${ip}`)
    return { success: false, error: 'Incorrect password. Please try again.' }
}
