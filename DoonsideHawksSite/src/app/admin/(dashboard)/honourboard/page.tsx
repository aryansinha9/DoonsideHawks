'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Trash2, Plus } from 'lucide-react'
import formStyles from '../forms.module.css'

type Award = { id: number; year: string; team: string; type: 'Golden' | 'Silver' }

export default function HonourboardAdminPage() {
  const supabase = createClient()
  const [juniorAwards, setJuniorAwards] = useState<Award[]>([])
  const [seniorAwards, setSeniorAwards] = useState<Award[]>([])
  const [loading, setLoading] = useState(true)

  // Form states
  const [newYear, setNewYear] = useState('')
  const [newTeam, setNewTeam] = useState('')
  const [newType, setNewType] = useState<'Golden' | 'Silver'>('Golden')
  const [newDivision, setNewDivision] = useState<'junior' | 'senior'>('junior')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data: junior } = await supabase.from('honourboard_junior').select('*').order('year', { ascending: false })
    const { data: senior } = await supabase.from('honourboard_senior').select('*').order('year', { ascending: false })
    
    if (junior) setJuniorAwards(junior)
    if (senior) setSeniorAwards(senior)
    setLoading(false)
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!newYear || !newTeam) return

    const table = newDivision === 'junior' ? 'honourboard_junior' : 'honourboard_senior'
    
    const { error } = await supabase
      .from(table)
      .insert([{ year: newYear, team: newTeam, type: newType }])

    if (!error) {
      setNewYear('')
      setNewTeam('')
      fetchData()
    } else {
      alert('Error saving record: ' + error.message)
    }
  }

  async function handleDelete(id: number, division: 'junior' | 'senior') {
    if (!confirm('Are you sure you want to delete this record?')) return

    const table = division === 'junior' ? 'honourboard_junior' : 'honourboard_senior'
    const { error } = await supabase.from(table).delete().eq('id', id)

    if (!error) {
      fetchData()
    } else {
      alert('Error deleting record: ' + error.message)
    }
  }

  if (loading) return <div style={{ padding: '32px', textAlign: 'center', color: 'var(--color-secondary-text)' }}>Loading data...</div>

  return (
    <div>
      <div className={formStyles.pageHeader}>
        <h1 className={formStyles.pageTitle}>Honourboard Editor</h1>
        <p className={formStyles.pageSubtitle}>Manage the Golden and Silver goal records.</p>
      </div>

      {/* Add New Record Form */}
      <form onSubmit={handleAdd} className={formStyles.formCard}>
        <h2 className={formStyles.cardTitle}>Add New Record</h2>
        <div className={formStyles.inputGridRow}>
          <div className={formStyles.inputGroup}>
            <label>Division</label>
            <select 
              value={newDivision} 
              onChange={(e) => setNewDivision(e.target.value as any)}
            >
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <div className={formStyles.inputGroup}>
            <label>Type</label>
            <select 
              value={newType} 
              onChange={(e) => setNewType(e.target.value as any)}
            >
              <option value="Golden">Golden Goals</option>
              <option value="Silver">Silver Goals</option>
            </select>
          </div>
          <div className={formStyles.inputGroup}>
            <label>Year</label>
            <input 
              required
              type="text" 
              placeholder="e.g. 2024"
              value={newYear} 
              onChange={(e) => setNewYear(e.target.value)}
            />
          </div>
          <div className={formStyles.inputGroup}>
            <label>Team</label>
            <input 
              required
              type="text" 
              placeholder="e.g. U14/2"
              value={newTeam} 
              onChange={(e) => setNewTeam(e.target.value)}
            />
          </div>
        </div>
        <div className={formStyles.formActions}>
          <button type="submit" className="btn btn-primary cursor-pointer">
            <Plus size={16} /> Add Record
          </button>
        </div>
      </form>

      {/* Data Tables */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        
        {/* JUNIOR DIVISION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={{ fontSize: 'var(--text-h3)', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', borderBottom: '1px solid var(--color-outline)', paddingBottom: '8px' }}>Junior Division</h2>
          
          <table className={formStyles.dataTable}>
            <thead>
              <tr>
                <th className={formStyles.goldHeader} colSpan={2}>Golden Goals</th>
                <th className={formStyles.goldHeader} style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {juniorAwards.filter(a => a.type === 'Golden').map(award => (
                 <tr key={award.id}>
                   <td style={{ fontWeight: 'bold' }}>{award.year}</td>
                   <td>{award.team}</td>
                   <td>
                     <button onClick={() => handleDelete(award.id, 'junior')} className={formStyles.deleteBtn}>
                       <Trash2 size={16} />
                     </button>
                   </td>
                 </tr>
              ))}
            </tbody>
          </table>

          <table className={formStyles.dataTable}>
            <thead>
              <tr>
                <th className={formStyles.silverHeader} colSpan={2}>Silver Goals</th>
                <th className={formStyles.silverHeader} style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {juniorAwards.filter(a => a.type === 'Silver').map(award => (
                 <tr key={award.id}>
                   <td style={{ fontWeight: 'bold' }}>{award.year}</td>
                   <td>{award.team}</td>
                   <td>
                     <button onClick={() => handleDelete(award.id, 'junior')} className={formStyles.deleteBtn}>
                       <Trash2 size={16} />
                     </button>
                   </td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SENIOR DIVISION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={{ fontSize: 'var(--text-h3)', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', borderBottom: '1px solid var(--color-outline)', paddingBottom: '8px' }}>Senior Division</h2>
          
          <table className={formStyles.dataTable}>
            <thead>
              <tr>
                <th className={formStyles.goldHeader} colSpan={2}>Golden Goals</th>
                <th className={formStyles.goldHeader} style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {seniorAwards.filter(a => a.type === 'Golden').map(award => (
                 <tr key={award.id}>
                   <td style={{ fontWeight: 'bold' }}>{award.year}</td>
                   <td>{award.team}</td>
                   <td>
                     <button onClick={() => handleDelete(award.id, 'senior')} className={formStyles.deleteBtn}>
                       <Trash2 size={16} />
                     </button>
                   </td>
                 </tr>
              ))}
            </tbody>
          </table>

          <table className={formStyles.dataTable}>
            <thead>
              <tr>
                <th className={formStyles.silverHeader} colSpan={2}>Silver Goals</th>
                <th className={formStyles.silverHeader} style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {seniorAwards.filter(a => a.type === 'Silver').map(award => (
                 <tr key={award.id}>
                   <td style={{ fontWeight: 'bold' }}>{award.year}</td>
                   <td>{award.team}</td>
                   <td>
                     <button onClick={() => handleDelete(award.id, 'senior')} className={formStyles.deleteBtn}>
                       <Trash2 size={16} />
                     </button>
                   </td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
