'use server'

interface PortalResult {
    success: boolean
    error?: string
}

export async function verifyPortalPassword(password: string): Promise<PortalResult> {
    // Small artificial delay to prevent brute force timing attacks
    await new Promise(r => setTimeout(r, 400))

    const correctPassword = process.env.COMMITTEE_PORTAL_PASSWORD

    if (!correctPassword) {
        // If no env var is set, portal is locked
        console.warn('[Committee Portal] COMMITTEE_PORTAL_PASSWORD environment variable is not set.')
        return { success: false, error: 'Portal is not configured. Please contact the web administrator.' }
    }

    if (password === correctPassword) {
        return { success: true }
    }

    return { success: false, error: 'Incorrect password. Please try again.' }
}
