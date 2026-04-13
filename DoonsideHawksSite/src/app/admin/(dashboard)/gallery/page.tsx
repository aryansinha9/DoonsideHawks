'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Trash2, Plus, UploadCloud, Film } from 'lucide-react'
import formStyles from '../forms.module.css'

type GalleryItem = { id: number; type: 'image' | 'video'; src: string; alt?: string; title?: string }

export default function GalleryAdminPage() {
  const supabase = createClient()
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  // Form states
  const [itemType, setItemType] = useState<'image' | 'video'>('image')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 })

  const [altText, setAltText] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data } = await supabase.from('gallery_items').select('*').order('created_at', { ascending: false })
    if (data) setItems(data)
    setLoading(false)
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return
    
    const files = Array.from(e.target.files)
    if (files.length > 15) {
      alert(`You selected ${files.length} files. Only the first 15 will be added to ensure a stable upload.`)
      setSelectedFiles(files.slice(0, 15))
    } else {
      setSelectedFiles(files)
    }
  }

  async function handleImageSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (selectedFiles.length === 0) return

    setUploading(true)
    setUploadProgress({ current: 0, total: selectedFiles.length })

    // Security: validate every file's MIME type and size before starting uploads
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const MAX_SIZE_MB = 10
    for (const file of selectedFiles) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        alert(`"${file.name}" is not an accepted image type. Only JPEG, PNG, WebP, and GIF are allowed.`)
        setUploading(false)
        setUploadProgress({ current: 0, total: 0 })
        return
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        alert(`"${file.name}" exceeds the ${MAX_SIZE_MB}MB maximum file size.`)
        setUploading(false)
        setUploadProgress({ current: 0, total: 0 })
        return
      }
    }
    
    let successCount = 0

    try {
      for (const file of selectedFiles) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${crypto.randomUUID()}.${fileExt}`
        const filePath = `${fileName}`

        // Upload to Storage
        const { error: uploadError } = await supabase.storage
          .from('gallery-images')
          .upload(filePath, file)

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from('gallery-images')
          .getPublicUrl(filePath)

        // Insert to DB
        const { error: dbError } = await supabase.from('gallery_items').insert([
          { type: 'image', src: publicUrl, alt: altText || null }
        ])

        if (dbError) throw dbError
        
        successCount++
        setUploadProgress(prev => ({ ...prev, current: successCount }))
      }

      setAltText('')
      setSelectedFiles([])
      fetchData()
    } catch (error: any) {
      alert(`Upload stopped. ${successCount} images saved successfully before encountering an error: ${error.message}`)
      fetchData()
    } finally {
      setUploading(false)
      setUploadProgress({ current: 0, total: 0 })
      // Reset input element
      const fileInput = document.getElementById('gallery-file-input') as HTMLInputElement
      if (fileInput) fileInput.value = ''
    }
  }

  async function handleAddVideo(e: React.FormEvent) {
    e.preventDefault()
    if (!videoUrl) return

    // Security: validate and restrict to YouTube/YouTube-nocookie domains only.
    // Also converts to youtube-nocookie.com embeds (privacy-preserving — no tracking
    // cookies until the user clicks play).
    let embedUrl: string
    try {
      const parsed = new URL(videoUrl)
      const allowedHosts = ['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com']
      if (!allowedHosts.includes(parsed.hostname)) {
        alert('Only YouTube URLs are accepted (youtube.com or youtube-nocookie.com).')
        return
      }
      if (parsed.searchParams.has('v')) {
        // Standard watch URL — convert to privacy-friendly embed
        embedUrl = `https://www.youtube-nocookie.com/embed/${parsed.searchParams.get('v')}`
      } else if (parsed.pathname.startsWith('/embed/')) {
        embedUrl = videoUrl // already an embed URL
      } else {
        alert('Could not parse the YouTube URL. Please use a standard watch URL (e.g. https://www.youtube.com/watch?v=...)')
        return
      }
    } catch {
      alert('Invalid URL format. Please enter a valid YouTube URL.')
      return
    }

    const { error } = await supabase.from('gallery_items').insert([
      { type: 'video', src: embedUrl, title: altText || 'Gallery Video' }
    ])

    if (!error) {
      setVideoUrl('')
      setAltText('')
      fetchData()
    } else {
      alert('Error adding video: ' + error.message)
    }
  }

  async function handleDelete(id: number, type: string, src: string) {
    if (!confirm('Delete this media item?')) return

    // If it's an image from our bucket, we could also try to delete the file from storage
    // But for simplicity, we just remove the DB row for now.
    
    const { error } = await supabase.from('gallery_items').delete().eq('id', id)
    if (!error) {
      fetchData()
    } else {
      alert('Error deleting: ' + error.message)
    }
  }

  if (loading) return <div style={{ padding: '32px', textAlign: 'center', color: 'var(--color-secondary-text)' }}>Loading data...</div>

  return (
    <div>
      <div className={formStyles.pageHeader}>
        <h1 className={formStyles.pageTitle}>Gallery Editor</h1>
        <p className={formStyles.pageSubtitle}>Upload images or embed videos to the public gallery.</p>
      </div>

      <div className={formStyles.formCard}>
        <h2 className={formStyles.cardTitle}>Add New Media</h2>
        
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <button 
            type="button"
            onClick={() => { setItemType('image'); setSelectedFiles([]); setAltText(''); }}
            className={`btn ${itemType === 'image' ? 'btn-primary' : 'btn-ghost'}`}
          >
            <UploadCloud size={16} /> Mode: Add Images
          </button>
          <button 
            type="button"
            onClick={() => { setItemType('video'); setAltText(''); setVideoUrl(''); }}
            className={`btn ${itemType === 'video' ? 'btn-primary' : 'btn-ghost'}`}
          >
            <Film size={16} /> Mode: Add Video
          </button>
        </div>

        {itemType === 'image' ? (
          <form onSubmit={handleImageSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
            <div className={formStyles.inputGridRow}>
              <div className={formStyles.inputGroup}>
                <label>Select Image File(s) (Max 15)</label>
                <input 
                  id="gallery-file-input"
                  type="file" 
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  disabled={uploading}
                  style={{ cursor: 'pointer', padding: '8px' }}
                />
              </div>
              <div className={formStyles.inputGroup}>
                <label>Image Description (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Under 10s celebrating a goal"
                  value={altText} 
                  onChange={(e) => setAltText(e.target.value)}
                  disabled={uploading}
                />
              </div>
            </div>

            {selectedFiles.length > 0 && (
              <div style={{ backgroundColor: 'var(--color-surface-low)', padding: '12px', borderRadius: 'var(--radius-btn)' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Selected Files ({selectedFiles.length}):
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedFiles.map((f, i) => (
                    <span key={i} style={{ fontSize: '10px', backgroundColor: 'var(--color-surface-lowest)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--color-outline)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>
                      {f.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={formStyles.formActions} style={{ margin: 0, justifyContent: 'flex-start', alignItems: 'center', gap: '16px' }}>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={uploading || selectedFiles.length === 0}
                  style={{ cursor: (uploading || selectedFiles.length === 0) ? 'not-allowed' : 'pointer' }}
                >
                  <UploadCloud size={16} /> Start Upload
                </button>

                {uploading && (
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: 'var(--text-sm)' }}>
                    Uploading {uploadProgress.current} of {uploadProgress.total}... Please wait.
                  </span>
                )}
            </div>
          </form>
        ) : (
          <form onSubmit={handleAddVideo} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <div className={formStyles.inputGroup}>
              <label>Video Title</label>
              <input 
                required
                type="text" 
                value={altText} 
                onChange={(e) => setAltText(e.target.value)}
              />
            </div>
            <div className={formStyles.inputGroup}>
              <label>YouTube URL</label>
              <input 
                required
                type="url" 
                placeholder="https://www.youtube.com/watch?v=..."
                value={videoUrl} 
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>
            <div className={formStyles.formActions} style={{ margin: 0, justifyContent: 'flex-start' }}>
                <button type="submit" className="btn btn-primary cursor-pointer">
                <Plus size={16} /> Add Video
                </button>
            </div>
          </form>
        )}
      </div>

      <div>
        <h2 style={{ fontSize: 'var(--text-h3)', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', marginBottom: '16px' }}>Current Gallery Items</h2>
        <div className={formStyles.mediaGrid}>
          {items.map(item => (
            <div key={item.id} className={formStyles.mediaCard}>
              <div style={{ position: 'relative', width: '100%', height: '150px', backgroundColor: 'var(--color-surface-low)' }}>
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt || ''} className={formStyles.mediaImage} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', color: 'white', padding: '16px', textAlign: 'center' }}>
                    <Film size={32} style={{ opacity: 0.5, marginBottom: '8px' }} />
                    <p style={{ fontSize: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>{item.title}</p>
                  </div>
                )}
                
                <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
                  <button 
                    onClick={() => handleDelete(item.id, item.type, item.src)}
                    className={formStyles.deleteBtn}
                    style={{ backgroundColor: 'var(--color-surface-lowest)' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className={formStyles.mediaInfo}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-secondary-text)' }}>{item.type}</span>
                <span style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }} title={item.alt || item.title}>{item.alt || item.title}</span>
              </div>
            </div>
          ))}
          {items.length === 0 && <div style={{ gridColumn: '1 / -1', padding: '32px', textAlign: 'center', color: 'var(--color-secondary-text)' }}>No media uploaded yet.</div>}
        </div>
      </div>
    </div>
  )
}
