export const DB = {
    mac: {
        id: 'mac',
        name: 'Kraft Macaroni & Cheese Original',
        code: 1234,
        img: '/assets/mac.jpg',
        alt: 'Plate of mac and cheese',
        nutrition: 1,
        environment: 3,
        convenience: 5,
		description: `
		Mac and Cheese is a dish of English origin, consisting of cooked macaroni pasta and a cheese sauce, most commonly cheddar.
        `,
		where: `
		Pastas, dry foods
        `,

        vegetarian: true,

        benefits: [
            'Is good for your soul',
        ],

        risks: [
            'The cheese dust is a known carcinogen',
            'Contains inordinate amounts of sodium',
            'Contains inordinate amounts of saturated fat',
        ],

        allergens: [
        ],

        ingredients: [
            'mac',
            'cheese',
        ],
	},
	mac2: {
		id: 'mac2',
		name: 'Annie\'s Organic Classic Macaroni and Cheese',
		code: 2213,
		img: '/assets/mac2.png',
		alt: 'plate of annie mac',
		nutrition: 3,
		environment: 4,
		convenience: 5,
		description: `
		Macaroni and cheese, made Annie’s way. 100% real mild cheese, no artificial flavors, synthetic colors, or preservatives — and certified organic to boot. A classic for the family!
		`,
		where: 'Pastas, dry foods',
		vegetarian: true,
		benefits: [
			'Certified Organic', 
			'Non-GMO Project verified',
			'No artificial flavors, synthetic colors, or preservatives',
			'Organic cheese from cows raised without antibiotics or synthetic hormones',
			'Certified organic ingredients are grown without persistent pesticides',
		],
		risks: [],
		allergens: [],
		ingredients: [
			'mac',
			'cheese',
		],
	},

    kiwi: {
        id: 'kiwi',
        name: 'Kiwi fruit',
        code: 5678,
        img: '/assets/kiwi.jpg',
        alt: 'Some brown fruit',
        nutrition: 4,
        environment: 2,
        convenience: 3,
        description: 'Literally just a kiwi',
        where: '???',
        vegetarian: true,

        benefits: [
            'nutrients!!!',
        ],

        risks: [
        ],

        allergens: [
            'kiwi',
        ],

        ingredients: [
            'kiwi',
        ],
    },
};
