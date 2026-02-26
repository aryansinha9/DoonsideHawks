// Committee data for Doonside Hawks Soccer Club

export type CommitteeMember = {
    id: string
    name: string
    role: string
    bio: string
    image?: string
    featured?: boolean
}

export const committeeMembers: CommitteeMember[] = [
    {
        id: '1',
        name: 'Michael Andreou',
        role: 'Club President',
        bio: 'Michael has been a pillar of the Doonside Hawks community for over 15 years, first as a player and now leading the club into an exciting new chapter. His passion for the game and commitment to the community is infectious and deeply felt by everyone who walks through our gates.',
        featured: true,
    },
    {
        id: '2',
        name: 'Sarah Thompson',
        role: 'Secretary',
        bio: 'Sarah keeps the Hawks running like clockwork — from registrations to correspondence to AGM minutes, her dedication behind the scenes makes everything possible. She joined the committee in 2021 and hasn\'t looked back.',
    },
    {
        id: '3',
        name: 'David Chen',
        role: 'Treasurer',
        bio: 'David brings 20 years of financial experience to the Hawks, ensuring the club is on solid ground for generations to come. Off the pitch, you\'ll find him cheering on his son\'s Under-12 team.',
    },
    {
        id: '4',
        name: 'Leanne Morrissey',
        role: 'Registrar',
        bio: 'From welcome packs to clearance forms, Leanne handles every registration detail with care and efficiency. She is often the first friendly face new families encounter, and she takes that responsibility seriously.',
    },
    {
        id: '5',
        name: 'James Papadopoulos',
        role: 'Football Operations Manager',
        bio: 'James coordinates everything that happens on the pitch: team allocations, coach liaisons, referee scheduling, and more. A former Hawks player himself, he brings both experience and genuine love for the club.',
    },
    {
        id: '6',
        name: 'Priya Nair',
        role: 'Social & Community Coordinator',
        bio: 'Priya is the heart of the Hawks\' community events — from end-of-season presentations to fundraiser nights, she ensures every gathering feels warm, inclusive, and memorable.',
    },
    {
        id: '7',
        name: 'Robert Gillies',
        role: 'Grounds Coordinator',
        bio: 'Robert is the first to arrive and the last to leave on match day. His meticulous care of Doonside Reserve ensures our home ground is always in outstanding condition for players and families alike.',
    },
    {
        id: '8',
        name: 'Anita Walsh',
        role: 'Child Safety Officer',
        bio: 'The wellbeing of every child at Doonside Hawks is Anita\'s highest priority. She oversees all Working with Children checks, code of conduct education, and ensures our club remains a safe environment for all.',
    },
]
