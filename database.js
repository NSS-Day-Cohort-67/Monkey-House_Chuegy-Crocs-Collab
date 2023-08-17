const database = {
    crocs: [
        {
            id: 1,
            name: "Classic Pokemon",
            styleId: 4,
            color: "White and Yellow"
        },
        {
            id: 2,
            name: "Taco Bell Mellow",
            styleId: 6,
            color: "Black and Purple"
        },
        {
            id: 3,
            name: "Bistro Graphic",
            styleId: 4,
            color: "Black and Multicolor"
        },
        {
            id: 4,
            name: "Classic Metallic",
            styleId: 4,
            color: "Silver"
        },
        {
            id: 5,
            name: "Printed Camo",
            styleId: 4,
            color: "Multicolor"
        },
        {
            id: 6,
            name: "Bumble Bee",
            styleId: 5,
            color: "Yellow"
        },
        {
            id: 7,
            name: "Sonic the Hedgehog",
            styleId: 4,
            color: "Red"
        },
        {
            id: 8,
            name: "Lisa Frank Unicorn",
            styleId: 4,
            color: "Pink and Multicolor"
        },
        {
            id: 9,
            name: "Neo",
            styleId: 2,
            color: "White"
        },
        {
            id: 10,
            name: "Western",
            styleId: 5,
            color: "Brown"
        },
        {
            id: 11,
            name: "Out of this World",
            styleId: 6,
            color: "Blue and Purple"
        },
        {
            id: 12,
            name: "Classic Cozzzy",
            styleId: 6,
            color: "Black"
        },
        {
            id: 13,
            name: "Mega Crush Realtree",
            styleId: 3,
            color: "Multicolor"
        },
        {
            id: 14,
            name: "Hotpink Mega",
            styleId: 3,
            color: "Pink"
        },
        {
            id: 15,
            name: "Bayaband",
            styleId: 1,
            color: "White"
        },
        {
            id: 16,
            name: "Animal Print",
            styleId: 1,
            color: "Multicolor"
        },
        {
            id: 17,
            name: "Winter",
            styleId: 2,
            color: "Black"
        }
    ],
    styles: [
        {
            id: 1,
            style: "Flip Croc"
        },
        {
            id: 2,
            style: "Puff Boot"
        },
        {
            id: 3,
            style: "Crush Sandal"
        },
        {
            id: 4,
            style: "Classic Clog"
        },
        {
            id: 5,
            style: "Classic Boot"
        },
        {
            id: 6,
            style: "Slide"
        } 
    ]
}

export const getCrocs = () => {
    return database.crocs.map(croc => ({...croc}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}