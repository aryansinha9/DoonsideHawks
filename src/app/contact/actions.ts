'use server'

import { Resend } from 'resend'

interface ContactFormData {
    name: string
    email: string
    phone?: string
    subject: string
    message: string
}

interface ActionResult {
    success: boolean
    error?: string
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
    // Server-side validation
    if (!data.name?.trim()) return { success: false, error: 'Name is required.' }
    if (!data.email?.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
        return { success: false, error: 'A valid email address is required.' }
    }
    if (!data.subject) return { success: false, error: 'Please select a subject.' }
    if (!data.message?.trim() || data.message.length < 10) {
        return { success: false, error: 'Message must be at least 10 characters.' }
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@doonsidehawks.com.au'
    const toEmail = process.env.RESEND_TO_EMAIL || 'info@doonsidehawks.com.au'

    // If no API key set, log and return success so the form UX works in development
    if (!apiKey) {
        console.log('[Contact Form] No RESEND_API_KEY set. Logging submission:', data)
        return { success: true }
    }

    try {
        const resend = new Resend(apiKey)
        await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            replyTo: data.email,
            subject: `[Hawks Website] ${data.subject} — from ${data.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <div style="background: #6A1012; padding: 24px; border-radius: 8px 8px 0 0;">
                        <h2 style="color: #fff; margin: 0; font-size: 20px;">
                            New Contact Form Submission
                        </h2>
                        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">
                            Doonside Hawks Soccer Club Website
                        </p>
                    </div>
                    <div style="border: 1px solid #e0dbd3; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px; font-size: 14px;">Name</td>
                                <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px;">${data.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555; font-size: 14px;">Email</td>
                                <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px;"><a href="mailto:${data.email}" style="color: #6A1012;">${data.email}</a></td>
                            </tr>
                            ${data.phone ? `
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555; font-size: 14px;">Phone</td>
                                <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px;">${data.phone}</td>
                            </tr>` : ''}
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555; font-size: 14px;">Subject</td>
                                <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px;">${data.subject}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 16px; border-top: 1px solid #e0dbd3; padding-top: 16px;">
                            <p style="font-weight: bold; color: #555; font-size: 14px; margin: 0 0 8px;">Message</p>
                            <p style="color: #2C2C2C; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${data.message}</p>
                        </div>
                        <div style="margin-top: 24px; padding: 16px; background: #f0eeeb; border-radius: 6px;">
                            <p style="margin: 0; font-size: 12px; color: #888;">
                                Sent via the Doonside Hawks Soccer Club website contact form.
                                Reply directly to this email to respond to ${data.name}.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        })
        return { success: true }
    } catch (err) {
        console.error('[Contact Form] Failed to send email:', err)
        return { success: false, error: 'Failed to send message. Please try again or email us directly.' }
    }
}
