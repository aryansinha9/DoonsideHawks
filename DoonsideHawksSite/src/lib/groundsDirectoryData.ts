export type GroundEntry = {
    clubName: string;
    parkName: string;
    address: string;
    suburb: string;
    fullAddress: string;
};

export const groundsDirectory: GroundEntry[] = [
    { 
        clubName: 'Rooty Hill RSL', 
        parkName: 'Angus Park', 
        address: 'Beames Ave', 
        suburb: 'Rooty Hill', 
        fullAddress: 'Angus Park, Watt St, Rooty Hill NSW 2766' 
    },
    { 
        clubName: 'Blacktown St. Patricks', 
        parkName: 'Anne Aquilina Reserve', 
        address: 'Eastern Rd', 
        suburb: 'Doonside', 
        fullAddress: 'Anne Aquilina Reserve, Eastern Rd, Rooty Hill NSW 2766' 
    },
    { 
        clubName: 'Lourdes', 
        parkName: 'Best Road Reserve', 
        address: 'Best Rd', 
        suburb: 'Seven Hills', 
        fullAddress: 'Doug Bollinger Reserve/ Best rd reserve, Best Rd, Seven Hills NSW 2147' 
    },
    { 
        clubName: 'BDSFA/Spartans', 
        parkName: 'Blacktown Football Park', 
        address: 'Eastern Rd', 
        suburb: 'Rooty Hill', 
        fullAddress: 'Blacktown Football Park, Gate B, Eastern Rd, Rooty Hill NSW 2766' 
    },
    { 
        clubName: 'Polonia Rams', 
        parkName: 'Chopin Park', 
        address: 'Bungalow Rd', 
        suburb: 'Plumpton', 
        fullAddress: 'Chopin Park, 22 Aaron Pl, Plumpton NSW 2761' 
    },
    { 
        clubName: 'Rooty Hill RSL', 
        parkName: 'Cor Brouwer Reserve', 
        address: 'Cawarra St', 
        suburb: 'Eastern Creek', 
        fullAddress: 'Cor Brouwer Reserve, Cawarra St, Eastern Creek NSW 2766' 
    },
    { 
        clubName: 'Oakville', 
        parkName: 'Colbee Park', 
        address: 'Old Hawkesbury Rd', 
        suburb: 'McGraths Hill', 
        fullAddress: 'Colbee Park, Old Hawkesbury Rd, McGraths Hill NSW 2756' 
    },
    { 
        clubName: 'Doonside Hawks', 
        parkName: 'Glendenning Reserve', 
        address: 'Golding Dr', 
        suburb: 'Glendenning', 
        fullAddress: 'Glendenning Reserve, Richmond Street, Glendenning NSW 2761' 
    },
    { 
        clubName: 'Glenwood Redbacks', 
        parkName: 'Glenwood Reserve', 
        address: 'Forman Ave', 
        suburb: 'Glenwood', 
        fullAddress: 'Glenwood Reserve, Forman Ave, Glenwood NSW 2768' 
    },
    { 
        clubName: 'Newbury Bulls', 
        parkName: 'Connor Greasby Park', 
        address: 'Perfection Ave', 
        suburb: 'Stanhope Gardens', 
        fullAddress: 'Connor Greasby Park, Perfection Ave, Stanhope Gardens 2155' 
    },
    { 
        clubName: 'Blacktown Workers', 
        parkName: 'HE Laybutt Reserve', 
        address: 'Reservoir Rd', 
        suburb: 'Arndell Park', 
        fullAddress: 'HE Laybutt Reserve, 170 Reservoir Rd, Arndell Park NSW 2148' 
    },
    { 
        clubName: 'Plumpton/Oakhurst', 
        parkName: 'Hanna Reserve', 
        address: 'Hyatts Rd', 
        suburb: 'Oakhurst', 
        fullAddress: 'Plumpton/Oakhurst Soccer Club, Hanna Reserve, Hyatts Rd, Oakhurst NSW 2761' 
    },
    { 
        clubName: 'Marayong Sports', 
        parkName: 'Harvey Park', 
        address: 'Benalla Cres', 
        suburb: 'Marayong', 
        fullAddress: 'Harvey Park, 32 Benalla Cres, Marayong NSW 2148' 
    },
    { 
        clubName: 'Polonia Rams', 
        parkName: 'Heber Park', 
        address: 'Pringle Rd', 
        suburb: 'Hebersham', 
        fullAddress: 'Heber Park, 174 Jersey Rd, Hebersham NSW 2770' 
    },
    { 
        clubName: 'Kings Langley', 
        parkName: 'Lynwood Park', 
        address: 'Stephen St', 
        suburb: 'Blacktown', 
        fullAddress: 'Lynwood Park, Blacktown NSW 2148' 
    },
    { 
        clubName: 'Blacktown Premier Spurs', 
        parkName: 'Marayong Oval', 
        address: 'Davis Rd', 
        suburb: 'Marayong', 
        fullAddress: 'Marayong Oval, Davis Rd, Marayong NSW 2148' 
    },
    { 
        clubName: 'Riverstone/Schofields', 
        parkName: 'Mill Street Park', 
        address: 'Mill St', 
        suburb: 'Riverstone', 
        fullAddress: 'Mill Street Park, Mill St, Riverstone NSW 2765' 
    },
    { 
        clubName: 'Minchinbury Jets', 
        parkName: 'Minchinbury Oval', 
        address: 'Minchin Dr', 
        suburb: 'Minchinbury', 
        fullAddress: '22 Minchin Dr, Minchinbury NSW 2770' 
    },
    { 
        clubName: 'Parklea', 
        parkName: 'Morgan Power Reserve', 
        address: 'Vardys Rd', 
        suburb: 'Kings Langley', 
        fullAddress: 'Morgan Power Reserve, Vardys Rd, Blacktown NSW 2147' 
    },
    { 
        clubName: 'Eastern Creek', 
        parkName: 'Morreau Reserve', 
        address: 'Church St', 
        suburb: 'Eastern Creek', 
        fullAddress: 'Morreau Reserve, Rooty Hill NSW 2766' 
    },
    { 
        clubName: 'Quakers Hill Tigers', 
        parkName: 'Paterson Reserve', 
        address: 'Torbert Ave', 
        suburb: 'Quakers Hill', 
        fullAddress: 'Paterson Reserve, Torbert Ave, Quakers Hill NSW 2763' 
    },
    { 
        clubName: 'The Ponds FC', 
        parkName: 'Ponds Reserve', 
        address: 'The Ponds Blvd', 
        suburb: 'The Ponds', 
        fullAddress: 'Ponds FC, The Ponds Blvd, The Ponds NSW 2769' 
    },
    { 
        clubName: 'Town Rangers FC', 
        parkName: 'Popondetta Park', 
        address: 'Popondetta Rd', 
        suburb: 'Emerton', 
        fullAddress: 'Popondetta Park, 175A Popondetta Rd, Blackett NSW 2770' 
    },
    { 
        clubName: 'Quakers Hill', 
        parkName: 'Quakers Hill Park', 
        address: 'Walker St', 
        suburb: 'Quakers Hill', 
        fullAddress: 'Quakers Hill Park, Hambledon Rd, Quakers Hill NSW 2763' 
    },
    { 
        clubName: 'Riverstone/Schofields', 
        parkName: 'Schofields Park', 
        address: 'Station St', 
        suburb: 'Schofields', 
        fullAddress: 'Schofields Park, Station St, Schofields NSW 2762' 
    },
    { 
        clubName: 'Rooty Hill RSL', 
        parkName: 'Whalan Reserve', 
        address: 'Samari Rd', 
        suburb: 'Whalan', 
        fullAddress: 'Whalan Reserve, Ellsworth Dr, Whalan NSW 2770' 
    },
    { 
        clubName: 'Prospect', 
        parkName: 'William Lawson Park', 
        address: 'Myrtle St', 
        suburb: 'Prospect', 
        fullAddress: 'William Lawson Park, LOT 12 Myrtle St, Prospect NSW 2148' 
    },
    { 
        clubName: 'Ropes Crossing Strikers', 
        parkName: 'Ropes Crossing', 
        address: 'Guild Pl', 
        suburb: 'Ropes Crossing', 
        fullAddress: 'Ropes Crossing Strikers, Guild Pl, Ropes Crossing NSW 2760' 
    }
];
