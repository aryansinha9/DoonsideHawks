// Grounds directory data
export type Ground = {
    id: string
    name: string
    address: string
    suburb: string
    parkingNotes: string
    facilities: string[]
    mapsUrl: string
}

export const grounds: Ground[] = [
    {
        id: '1',
        name: 'Doonside Reserve (Home Ground)',
        address: 'Doonside Road, Doonside NSW 2767',
        suburb: 'Doonside',
        parkingNotes: 'Free street parking on Doonside Road and adjacent side streets. Limited disabled access bays available near the main gate.',
        facilities: ['Canteen', 'Change Rooms', 'Public Toilets', 'Grandstand Seating', 'Floodlights', 'First Aid Room'],
        mapsUrl: 'https://maps.google.com/?q=Doonside+NSW+2767',
    },
    {
        id: '2',
        name: 'Blacktown Park',
        address: 'Flushcombe Road, Blacktown NSW 2148',
        suburb: 'Blacktown',
        parkingNotes: 'Large car park on Flushcombe Road. Overflow parking available on Campbell Street.',
        facilities: ['Canteen', 'Change Rooms', 'Public Toilets'],
        mapsUrl: 'https://maps.google.com/?q=Blacktown+NSW+2148',
    },
    {
        id: '3',
        name: 'Seven Hills Reserve',
        address: 'Prospect Highway, Seven Hills NSW 2147',
        suburb: 'Seven Hills',
        parkingNotes: 'Street parking on Prospect Highway. Arrive early on match days.',
        facilities: ['Canteen', 'Change Rooms', 'Public Toilets', 'Floodlights'],
        mapsUrl: 'https://maps.google.com/?q=Seven+Hills+NSW+2147',
    },
    {
        id: '4',
        name: 'Rooty Hill Reserve',
        address: 'Rooty Hill Road North, Rooty Hill NSW 2766',
        suburb: 'Rooty Hill',
        parkingNotes: 'On-site car park. Entry via Rooty Hill Road North.',
        facilities: ['Canteen', 'Change Rooms', 'Public Toilets'],
        mapsUrl: 'https://maps.google.com/?q=Rooty+Hill+NSW+2766',
    },
]
