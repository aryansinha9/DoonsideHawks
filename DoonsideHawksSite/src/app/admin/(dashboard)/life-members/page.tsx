'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react'
import formStyles from '../forms.module.css'

type LifeMember = { id: number; name: string; year: string; type: 'S' | '15' | ''; isEditing?: boolean }

export default function LifeMembersAdminPage() {
  const supabase = createClient()
  const [members, setMembers] = useState<LifeMember[]>([])
  const [loading, setLoading] = useState(true)

  // Add form states
  const [newName, setNewName] = useState('')
  const [newYear, setNewYear] = useState('')
  const [newType, setNewType] = useState<'S' | '15' | ''>('S')
  const [isDeceased, setIsDeceased] = useState(false)

  // Edit states
  const [editName, setEditName] = useState('')
  const [editYear, setEditYear] = useState('')
  const [editType, setEditType] = useState<'S' | '15' | ''>('S')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data } = await supabase.from('life_members').select('*').order('id', { ascending: true })
    if (data) setMembers(data.map(m => ({ ...m, isEditing: false })))
    setLoading(false)
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!newName) return

    const finalName = isDeceased ? `*${newName}` : newName
    
    // Auto-compute the next logical ID based on length, just for visual representation
    // Although Postgres SERIAL sets the actual ID under the hood
    const { error } = await supabase.from('life_members').insert([
      { name: finalName, year: newYear, type: newType }
    ])

    if (!error) {
      setNewName('')
      setNewYear('')
      setNewType('S')
      setIsDeceased(false)
      fetchData()
    } else {
      alert('Error adding member: ' + error.message)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure you want to delete this Life Member?')) return
    
    const { error } = await supabase.from('life_members').delete().eq('id', id)
    if (!error) fetchData()
  }

  function startEdit(m: LifeMember) {
    setMembers(members.map(member => 
      member.id === m.id ? { ...member, isEditing: true } : { ...member, isEditing: false }
    ))
    setEditName(m.name)
    setEditYear(m.year || '')
    setEditType(m.type)
  }

  function cancelEdit(id: number) {
    setMembers(members.map(member => 
      member.id === id ? { ...member, isEditing: false } : member
    ))
  }

  async function saveEdit(id: number) {
    const { error } = await supabase.from('life_members').update({
      name: editName,
      year: editYear,
      type: editType
    }).eq('id', id)

    if (!error) {
      fetchData()
    } else {
      alert('Error updating: ' + error.message)
    }
  }

  if (loading) return <div style={{ padding: '32px', textAlign: 'center', color: 'var(--color-secondary-text)' }}>Loading data...</div>

  return (
    <div>
      <div className={formStyles.pageHeader}>
        <h1 className={formStyles.pageTitle}>Life Members</h1>
        <p className={formStyles.pageSubtitle}>Manage the 100-slot grid data for Life Members and 15 Year Players.</p>
      </div>

      <form onSubmit={handleAdd} className={formStyles.formCard}>
        <h2 className={formStyles.cardTitle}>Add New Member</h2>
        <div className={formStyles.inputGridRow}>
          <div className={formStyles.inputGroup}>
            <label>Name</label>
            <input 
              required
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className={formStyles.inputGroup}>
            <label>Year (Optional)</label>
            <input 
              type="text" 
              value={newYear} 
              onChange={(e) => setNewYear(e.target.value)}
            />
          </div>
          <div className={formStyles.inputGroup}>
            <label>Type</label>
            <select 
              value={newType} 
              onChange={(e) => setNewType(e.target.value as any)}
            >
              <option value="S">S (Service)</option>
              <option value="15">15 (15 Year Player)</option>
              <option value="">None / Blank</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-btn)' }}>
            <input 
              type="checkbox" 
              id="deceased" 
              checked={isDeceased}
              onChange={(e) => setIsDeceased(e.target.checked)}
              style={{ cursor: 'pointer' }}
            />
            <label htmlFor="deceased" style={{ cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
              Deceased (*)
            </label>
          </div>
        </div>
        <div className={formStyles.formActions}>
          <button type="submit" className="btn btn-primary cursor-pointer">
            <Plus size={16} /> Add to Grid
          </button>
        </div>
      </form>

      <table className={formStyles.dataTable}>
        <thead>
          <tr>
            <th style={{ width: '60px' }}>ID</th>
            <th>Name</th>
            <th style={{ width: '120px' }}>Year</th>
            <th style={{ width: '120px' }}>Type</th>
            <th style={{ width: '140px', textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
              <td style={{ color: 'var(--color-secondary-text)', fontFamily: 'monospace' }}>{m.id}</td>
              
              {m.isEditing ? (
                <>
                  <td>
                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} style={{ width: '100%', padding: '4px 8px' }} />
                  </td>
                  <td>
                    <input type="text" value={editYear} onChange={(e) => setEditYear(e.target.value)} style={{ width: '100%', padding: '4px 8px' }} />
                  </td>
                  <td>
                    <select value={editType} onChange={(e) => setEditType(e.target.value as any)} style={{ width: '100%', padding: '4px 8px' }}>
                      <option value="S">S</option>
                      <option value="15">15</option>
                      <option value="">Blank</option>
                    </select>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                     <button onClick={() => saveEdit(m.id)} style={{ color: 'green', cursor: 'pointer', marginRight: '8px' }}><Save size={16} /></button>
                     <button onClick={() => cancelEdit(m.id)} style={{ color: 'var(--color-secondary-text)', cursor: 'pointer' }}><X size={16} /></button>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ fontWeight: 600 }}>
                    {m.name.startsWith('*') ? (
                      <span><span style={{ color: 'var(--color-outline)', marginRight: '4px' }}>*</span>{m.name.substring(1)}</span>
                    ) : m.name}
                  </td>
                  <td>{m.year}</td>
                  <td>
                    {m.type === 'S' && <span style={{ backgroundColor: 'var(--color-primary)', color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>S</span>}
                    {m.type === '15' && <span style={{ backgroundColor: '#eab308', color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>15</span>}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button onClick={() => startEdit(m)} style={{ color: '#2563eb', cursor: 'pointer', marginRight: '16px' }}><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(m.id)} className={formStyles.deleteBtn}><Trash2 size={16} /></button>
                  </td>
                </>
              )}
            </tr>
          ))}
          {members.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: 'var(--color-secondary-text)' }}>No members found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
