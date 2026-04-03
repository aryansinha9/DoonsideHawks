export type CommitteeMember = {
    id: string
    name: string
    role: string
    bio?: string
    image?: string
    email?: string
    featured?: boolean
}

export const committeeMembers: CommitteeMember[] = [
    // --- EXECUTIVE COMMITTEE ---
    {
        id: '1',
        name: "Sean O'Connor",
        role: "President",
        email: "president@doonsidehawks.com.au",
        featured: true,
    },
    {
        id: '2',
        name: "Roger O'Keefe",
        role: "Competition Secretary",
        email: "compsec@doonsidehawks.com.au",
        featured: true,
    },
    {
        id: '3',
        name: "Jackie Tate",
        role: "Secretary",
        email: "secretary@doonsidehawks.com.au",
        featured: true,
    },
    {
        id: '4',
        name: "Vacant",
        role: "Vice President",
        featured: true,
    },
    {
        id: '5',
        name: "Vacant",
        role: "Treasurer",
        featured: true,
    },
    {
        id: '6',
        name: "Vacant",
        role: "Registrar",
        featured: true,
    },
    // --- GENERAL COMMITTEE ---
    {
        id: '7',
        name: "Michelle O'Connor",
        role: "Member Protection Officer",
        email: "mpo@doonsidehawks.com.au",
        featured: false,
    },
    {
        id: '8',
        name: "Nicole Wheeler",
        role: "Equipment Manager",
        featured: false,
    },
    {
        id: '9',
        name: "Mark Cook",
        role: "Club Coach",
        featured: false,
    },
    {
        id: '10',
        name: "Elizabeth Baig",
        role: "Committee Member",
        featured: false,
    }
]
