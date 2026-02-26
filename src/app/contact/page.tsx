'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, CheckCircle, AlertCircle } from 'lucide-react'
import { sendContactEmail } from './actions'
import styles from './page.module.css'


export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [submitted, setSubmitted] = useState(false)
    const [serverError, setServerError] = useState('')
    const [isPending, startTransition] = useTransition()

    const subjects = [
        'General Enquiry',
        '2026 Registration',
        'Sponsorship',
        'Volunteer Opportunities',
        'Media Enquiry',
        'Other',
    ]

    const validate = () => {
        const e: Record<string, string> = {}
        if (!form.name.trim()) e.name = 'Please enter your name.'
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address.'
        if (!form.subject) e.subject = 'Please select a subject.'
        if (!form.message.trim() || form.message.length < 10) e.message = 'Please enter a message (at least 10 characters).'
        return e
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setErrors({})
        setServerError('')

        startTransition(async () => {
            const result = await sendContactEmail(form)
            if (result.success) {
                setSubmitted(true)
            } else {
                setServerError(result.error || 'Something went wrong. Please try again.')
            }
        })
    }

    return (
        <div>
            {/* Hero */}
            <section className={`hero hero-half ${styles.hero}`}>
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop" alt="Contact" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Contact</span>
                    </p>
                    <h1 className={`display ${styles.heroTitle}`}>Get in Touch</h1>
                    <p className={styles.heroSub}>We would love to hear from you.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <div className={styles.formSide}>
                            <h2 className="section-heading">Send a Message</h2>
                            <p className="section-intro" style={{ marginBottom: 'var(--space-5)' }}>
                                Fill in the form below and a member of the committee will be in touch within 2–3 business days.
                            </p>

                            {submitted ? (
                                <div className={styles.successMsg}>
                                    <CheckCircle size={40} className={styles.successIcon} />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We will get back to you shortly. <strong>#ProudToBeAHawk</strong></p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                                    <div className={styles.formRow}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input id="name" type="text" className={`form-input ${errors.name ? styles.inputError : ''}`}
                                                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                                placeholder="Your full name" />
                                            {errors.name && <span className="form-error"><AlertCircle size={12} /> {errors.name}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email Address *</label>
                                            <input id="email" type="email" className={`form-input ${errors.email ? styles.inputError : ''}`}
                                                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                                placeholder="you@example.com" />
                                            {errors.email && <span className="form-error"><AlertCircle size={12} /> {errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className={styles.formRow}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">Phone (optional)</label>
                                            <input id="phone" type="tel" className="form-input"
                                                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                                placeholder="04xx xxx xxx" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="subject">Subject *</label>
                                            <select id="subject" className={`form-select ${errors.subject ? styles.inputError : ''}`}
                                                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                                                <option value="">Select a subject…</option>
                                                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                            {errors.subject && <span className="form-error"><AlertCircle size={12} /> {errors.subject}</span>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">Message *</label>
                                        <textarea id="message" className={`form-textarea ${errors.message ? styles.inputError : ''}`}
                                            value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                            placeholder="How can we help?" />
                                        {errors.message && <span className="form-error"><AlertCircle size={12} /> {errors.message}</span>}
                                    </div>
                                    {serverError && (
                                        <div className={styles.serverError}>
                                            <AlertCircle size={16} /> {serverError}
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn-primary" disabled={isPending} style={{ width: '100%', justifyContent: 'center' }}>
                                        {isPending ? 'Sending…' : 'Send Message →'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Info Side */}
                        <div className={styles.infoSide}>
                            <h2 className="section-heading">Contact Details</h2>
                            <div className={styles.contactCard}>
                                <div className={styles.contactDetail}>
                                    <MapPin size={18} className={styles.dIcon} />
                                    <div>
                                        <strong>Ground Address</strong>
                                        <p>Doonside Reserve<br />Doonside Road, Doonside NSW 2767</p>
                                    </div>
                                </div>
                                <div className={styles.contactDetail}>
                                    <Mail size={18} className={styles.dIcon} />
                                    <div>
                                        <strong>Email</strong>
                                        <p><a href="mailto:info@doonsidehawks.com.au" className={styles.emailLink}>info@doonsidehawks.com.au</a></p>
                                    </div>
                                </div>
                                <div className={styles.contactDetail}>
                                    <Phone size={18} className={styles.dIcon} />
                                    <div>
                                        <strong>Phone</strong>
                                        <p>Contact us via email or social media for the fastest response.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.miniMap}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1!2d150.85!3d-33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sDoonside%20NSW%202767!5e0!3m2!1sen!2sau!4v1700000000"
                                    width="100%" height="220" style={{ border: 0, borderRadius: 12 }} allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" title="Doonside Hawks location"
                                />
                            </div>

                            <div className={styles.socialSection}>
                                <h4 className={styles.socialTitle}>Follow the Hawks</h4>
                                <div className={styles.socialBtns}>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                                        <Facebook size={16} /> Facebook
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                                        <Instagram size={16} /> Instagram
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                                        <Youtube size={16} /> YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
