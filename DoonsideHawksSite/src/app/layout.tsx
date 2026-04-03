import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HawksPattern from '@/components/HawksPattern'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-display',
})

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
})

export const metadata: Metadata = {
    title: 'Doonside Hawks Soccer Club — #ProudToBeAHawk',
    description: 'Doonside Hawks Soccer Club — More than a football club, a community. Join us for the 2026 season in Doonside, NSW.',
    keywords: ['Doonside Hawks', 'Soccer', 'Football', 'Doonside', 'NWFFA', 'Youth Football', 'NSW'],
    openGraph: {
        title: 'Doonside Hawks Soccer Club — #ProudToBeAHawk',
        description: 'More than a football club. A community since 1981.',
        type: 'website',
        locale: 'en_AU',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable}`}>
            <body>
                {/* Global geometric background pattern — fixed, behind all content */}
                <HawksPattern className="site-bg-pattern" />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

