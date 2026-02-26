// Sponsors data
export type Sponsor = {
    id: string
    name: string
    tier: 'platinum' | 'gold' | 'silver'
    website?: string
    imageUrl?: string
}

export const sponsors: Sponsor[] = [
    // Major Sponsors (Platinum) - 4 total for a 2x2 grid
    { id: '1', name: 'Westpoint', tier: 'platinum', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop' },
    { id: '2', name: 'Blacktown Council', tier: 'platinum', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop' },
    { id: '3', name: 'Doonside Hotel', tier: 'platinum', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop' },
    { id: '4', name: 'Workers Club', tier: 'platinum', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop' },

    // Club Sponsors (Gold/Silver) - 5 total for a 3 + 2 grid
    { id: '5', name: 'Crawford Electrical', tier: 'gold', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop' },
    { id: '6', name: 'Hawks Physio', tier: 'gold', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop' },
    { id: '7', name: 'Doonside Bakehouse', tier: 'silver', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop' },
    { id: '8', name: 'Penrith Law Group', tier: 'silver', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop' },
    { id: '9', name: 'Jim\'s Mowing', tier: 'silver', website: '#', imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop' },
]
