'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Plus, Trash2, Link as LinkIcon, UploadCloud, Save } from 'lucide-react'
import formStyles from '../forms.module.css'

type Sponsor = {
  id: number
  name: string
  image_url: string
  link_url?: string
}

export default function SponsorsAdminPage() {
  const supabase = createClient()
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [loading, setLoading] = useState(true)

  // Form states
  const [newName, setNewName] = useState('')
  const [newLinkUrl, setNewLinkUrl] = useState('')
  const [fileToUpload, setFileToUpload] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data } = await supabase.from('home_sponsors').select('*').order('created_at', { ascending: false })
    if (data) setSponsors(data)
    setLoading(false)
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFileToUpload(e.target.files[0])
    }
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!newName || !fileToUpload) {
      alert("Name and Logo are required!")
      return
    }

    setUploading(true)
    try {
      // 1. Upload Logo
      const fileExt = fileToUpload.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('sponsor-logos')
        .upload(filePath, fileToUpload)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('sponsor-logos')
        .getPublicUrl(filePath)

      // 2. Insert to DB
      const { error: dbError } = await supabase.from('home_sponsors').insert([
        { name: newName, image_url: publicUrl, link_url: newLinkUrl || null }
      ])

      if (dbError) throw dbError

      // Clear Form
      setNewName('')
      setNewLinkUrl('')
      setFileToUpload(null)
      const fileInput = document.getElementById('sponsor-logo-input') as HTMLInputElement
      if (fileInput) fileInput.value = ''
      
      fetchData()
    } catch (err: any) {
      alert("Error adding sponsor: " + err.message)
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Remove this sponsor from the homepage?')) return

    const { error } = await supabase.from('home_sponsors').delete().eq('id', id)
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
        <h1 className={formStyles.pageTitle}>Homepage Sponsors</h1>
        <p className={formStyles.pageSubtitle}>Manage the official sponsors dynamically displayed on the homepage active sponsor grid.</p>
      </div>

      <form onSubmit={handleAdd} className={formStyles.formCard}>
        <h2 className={formStyles.cardTitle}>Add New Sponsor</h2>
        <div className={formStyles.inputGridRow}>
          <div className={formStyles.inputGroup}>
            <label>Sponsor Name</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Doonside Pharmacy"
              value={newName} 
              onChange={(e) => setNewName(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className={formStyles.inputGroup}>
            <label>Sponsor Link URL (Optional)</label>
            <input 
              type="url" 
              placeholder="https://sponsor-site.com.au"
              value={newLinkUrl} 
              onChange={(e) => setNewLinkUrl(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className={formStyles.inputGroup}>
            <label>Sponsor Logo</label>
            <input 
              id="sponsor-logo-input"
              required
              type="file" 
              accept="image/*"
              onChange={handleFileSelect}
              disabled={uploading}
              style={{ padding: '8px', cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className={formStyles.formActions}>
          <button type="submit" className="btn btn-primary cursor-pointer" disabled={uploading}>
            {uploading ? 'Publishing...' : <><Plus size={16} /> Publish Sponsor</>}
          </button>
        </div>
      </form>

      <table className={formStyles.dataTable} style={{ marginTop: '24px' }}>
        <thead>
          <tr>
            <th style={{ width: '80px' }}>Logo</th>
            <th>Name</th>
            <th>Link URL</th>
            <th style={{ width: '100px', textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sponsors.map(s => (
            <tr key={s.id}>
              <td>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-surface-low)', borderRadius: '4px', overflow: 'hidden', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={s.image_url} alt={s.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'grayscale(100%)' }} />
                </div>
              </td>
              <td style={{ fontWeight: 600 }}>{s.name}</td>
              <td style={{ color: 'var(--color-secondary-text)', fontSize: 'var(--text-sm)' }}>
                {s.link_url ? <a href={s.link_url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>{s.link_url}</a> : 'No link'}
              </td>
              <td style={{ textAlign: 'right' }}>
                <button onClick={() => handleDelete(s.id)} className={formStyles.deleteBtn}>
                  <Trash2 size={16} /> Delete
                </button>
              </td>
            </tr>
          ))}
          {sponsors.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: '32px', textAlign: 'center', color: 'var(--color-secondary-text)' }}>No sponsors found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
