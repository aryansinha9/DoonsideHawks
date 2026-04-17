'use server'

interface ContactFormData {
    name: string
    email: string
    company?: string
    subject: string
    message: string
    honeypot?: string
}

interface ActionResult {
    success: boolean
    error?: string
}

const WEB3FORMS_ACCESS_KEY = '2c8c871a-c320-4c3f-8bb8-5d8c0f37ce00'

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
    // Spam bot check (Honeypot) - If it's filled out, it's a bot.
    // We silently return success so the bot thinks it succeeded.
    if (data.honeypot) {
        console.log('[Contact Form] Honeypot triggered, throwing away submission.')
        return { success: true }
    }

    // Server-side validation
    if (!data.name?.trim()) return { success: false, error: 'Name is required.' }
    if (!data.email?.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
        return { success: false, error: 'A valid email address is required.' }
    }
    if (!data.subject) return { success: false, error: 'Please select a subject.' }
    if (!data.message?.trim() || data.message.length < 10) {
        return { success: false, error: 'Message must be at least 10 characters.' }
    }

    // Security: enforce upper-bound length limits to prevent oversized payloads
    if (data.name.length > 100) return { success: false, error: 'Name must be under 100 characters.' }
    if (data.email.length > 254) return { success: false, error: 'Email address is too long.' }
    if (data.company && data.company.length > 100) return { success: false, error: 'Company name is too long.' }
    if (data.message.length > 5000) return { success: false, error: 'Message must be under 5,000 characters.' }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "User-Agent": "DoonsideHawksSite/1.0 (Next.js Node)",
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `[Hawks Website] ${data.subject} — from ${data.name}`,
                from_name: "Hawks Website Form",
                name: data.name,
                email: data.email,
                company: data.company || "Not provided",
                message: data.message,
            }),
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('[Contact Form] Web3Forms rejected the request. Status:', response.status, 'Body:', errorText);
            return { success: false, error: 'Failed to communicate with the mail server. Please try again or email us directly.' }
        }

        const result = await response.json();
        
        if (result.success) {
            return { success: true }
        } else {
            console.error('[Contact Form] Web3Forms Error:', result)
            return { success: false, error: 'Failed to send message. Please try again later.' }
        }
    } catch (err) {
        console.error('[Contact Form] Network or parsing crash failed to send email via Web3Forms:', err)
        return { success: false, error: 'Failed to send message. Please try again or email us directly.' }
    }
}
