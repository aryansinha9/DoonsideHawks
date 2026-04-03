'use client'

import { useRef, useEffect, ReactNode } from 'react'
import styles from './ScrollReveal.module.css'

interface ScrollRevealProps {
    children: ReactNode
    variant?: 'fadeUp' | 'fadeLeft' | 'scaleIn'
    delay?: number
    className?: string
}

export default function ScrollReveal({ children, variant = 'fadeUp', delay = 0, className = '' }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // Check for reduced motion preference
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) {
            el.style.opacity = '1'
            el.style.transform = 'none'
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transitionDelay = `${delay}ms`
                    el.classList.add(styles.visible)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.12 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${styles[variant]} ${className}`}
        >
            {children}
        </div>
    )
}
