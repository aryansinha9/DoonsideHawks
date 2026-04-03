// Fixtures data for Doonside Hawks Soccer Club

export type Fixture = {
    id: string
    date: string
    time: string
    competition: string
    homeTeam: string
    awayTeam: string
    venue: string
    isHome: boolean
    result?: string
}

export const fixtures: Fixture[] = [
    {
        id: '1',
        date: '2026-03-07',
        time: '10:00 AM',
        competition: 'NWFFA Premier League',
        homeTeam: 'Doonside Hawks',
        awayTeam: 'Penrith City FC',
        venue: 'Doonside Reserve, Doonside',
        isHome: true,
    },
    {
        id: '2',
        date: '2026-03-14',
        time: '1:00 PM',
        competition: 'NWFFA Premier League',
        homeTeam: 'Blacktown FC',
        awayTeam: 'Doonside Hawks',
        venue: 'Blacktown Park, Blacktown',
        isHome: false,
    },
    {
        id: '3',
        date: '2026-03-21',
        time: '11:30 AM',
        competition: 'NWFFA Premier League',
        homeTeam: 'Doonside Hawks',
        awayTeam: 'Seven Hills FC',
        venue: 'Doonside Reserve, Doonside',
        isHome: true,
    },
    {
        id: '4',
        date: '2026-03-28',
        time: '3:00 PM',
        competition: 'NWFFA Cup',
        homeTeam: 'Rooty Hill RSL',
        awayTeam: 'Doonside Hawks',
        venue: 'Rooty Hill Reserve, Rooty Hill',
        isHome: false,
    },
    {
        id: '5',
        date: '2026-04-04',
        time: '10:00 AM',
        competition: 'NWFFA Premier League',
        homeTeam: 'Doonside Hawks',
        awayTeam: 'St Marys FC',
        venue: 'Doonside Reserve, Doonside',
        isHome: true,
    },
    {
        id: '6',
        date: '2026-04-11',
        time: '12:00 PM',
        competition: 'NWFFA Premier League',
        homeTeam: 'Windsor FC',
        awayTeam: 'Doonside Hawks',
        venue: 'Windsor Oval, Windsor',
        isHome: false,
    },
]

export function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-AU', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
    })
}
