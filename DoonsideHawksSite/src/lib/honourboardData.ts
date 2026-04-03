// Honourboard data
export type Award = {
    category: string
    winners: { year: number; name: string }[]
}

export const honourboard: Award[] = [
    {
        category: 'Club Player of the Year',
        winners: [
            { year: 2025, name: 'Jordan Martinez' },
            { year: 2024, name: 'Tom Nguyen' },
            { year: 2023, name: 'Alex Kowalski' },
            { year: 2022, name: 'Marcus Webb' },
            { year: 2021, name: 'Daniel Park' },
        ],
    },
    {
        category: 'Best & Fairest',
        winners: [
            { year: 2025, name: 'Sam Elliott' },
            { year: 2024, name: 'Chris Baxter' },
            { year: 2023, name: 'Ryan Tran' },
            { year: 2022, name: 'Luke Ferrara' },
            { year: 2021, name: 'Aiden McLeod' },
        ],
    },
    {
        category: "Coaches' Award",
        winners: [
            { year: 2025, name: 'Jesse Williams' },
            { year: 2024, name: 'Demi Alexopoulos' },
            { year: 2023, name: 'Patrick Sullivan' },
            { year: 2022, name: 'Omar Hassan' },
            { year: 2021, name: 'Ethan Burke' },
        ],
    },
    {
        category: 'Top Goal Scorer',
        winners: [
            { year: 2025, name: 'Jordan Martinez (23 goals)' },
            { year: 2024, name: 'Tom Nguyen (18 goals)' },
            { year: 2023, name: 'Marcus Webb (21 goals)' },
            { year: 2022, name: 'Dylan Rowe (16 goals)' },
            { year: 2021, name: 'Alex Kowalski (19 goals)' },
        ],
    },
    {
        category: 'Volunteer of the Year',
        winners: [
            { year: 2025, name: 'Robert Gillies' },
            { year: 2024, name: 'Leanne Morrissey' },
            { year: 2023, name: 'Sandra Papas' },
            { year: 2022, name: 'Frank Taurean' },
            { year: 2021, name: 'Mary Whelan' },
        ],
    },
]
