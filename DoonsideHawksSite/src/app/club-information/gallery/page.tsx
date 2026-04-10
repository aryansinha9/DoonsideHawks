import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { createClient } from '@/utils/supabase/server'
import styles from './page.module.css'

import GalleryClient from './components/GalleryClient'

export const metadata = { title: 'Gallery — Doonside Hawks Soccer Club' }

export default async function GalleryPage() {
    const supabase = createClient()
    const { data: galleryData } = await supabase.from('gallery_items').select('*').order('created_at', { ascending: false })
    const items = galleryData || []

    return (
        <div>
            <PageHero
                title="Club Gallery" subtitle="Moments from the pitch and beyond."
                breadcrumbs={[{'label': 'Home', 'href': '/'}, {'label': 'Gallery'}]}
            />

            <GalleryClient items={items} />
        </div>
    )
}
