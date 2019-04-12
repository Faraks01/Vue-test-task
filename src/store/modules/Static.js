export const Static = {
	state: {
		dishesMenu: {
			list1: [{
					headline: "Voluptate cillum fugiat.",
					note: "Cheese, tomato, mushrooms, onions.",
					price: 50
				},
				{
					headline: "Metus varius laoreet.",
					note: "Chicken, mozzarella cheese, onions.",
					price: 62
				},
				{
					headline: "Donec sodales magna.",
					note: "Tuna, Sweetcorn, Cheese.",
					price: 25
				},
				{
					headline: "Saugue velit cursus.",
					note: "Pineapple, Minced Beef, Cheese.",
					price: 30
				}
			],
			list2: [{
					headline: "Arcu pede enim justo.",
					note: "Tuna, Sweetcorn, Cheese.",
					price: 45
				},
				{
					headline: "Cras dapibussemper nisi.",
					note: "Pineapple, Minced Beef, Cheese.",
					price: 32
				},
				{
					headline: "Quam semper libero.",
					note: "Cheese, tomato, mushrooms, onions.",
					price: 15
				},
				{
					headline: "Nam eget dui Etiam.",
					note: "Chicken, mozzarella cheese, onions.",
					price: 35
				}
			],
			list3: [{
					headline: "Arcu pede enim justo.",
					note: "Tuna, Sweetcorn, Cheese.",
					price: 45
				},
				{
					headline: "Cras dapibussemper nisi.",
					note: "Pineapple, Minced Beef, Cheese.",
					price: 32
				},
				{
					headline: "Quam semper libero.",
					note: "Cheese, tomato, mushrooms, onions.",
					price: 15
				},
				{
					headline: "Nam eget dui Etiam.",
					note: "Chicken, mozzarella cheese, onions.",
					price: 35
				}
			],
			list4: [{
					headline: "Arcu pede enim justo.",
					note: "Tuna, Sweetcorn, Cheese.",
					price: 45
				},
				{
					headline: "Cras dapibussemper nisi.",
					note: "Pineapple, Minced Beef, Cheese.",
					price: 32
				},
				{
					headline: "Quam semper libero.",
					note: "Cheese, tomato, mushrooms, onions.",
					price: 15
				},
				{
					headline: "Nam eget dui Etiam.",
					note: "Chicken, mozzarella cheese, onions.",
					price: 35
				}
			]
		},
		dishesCards: [{
				caption: "Fugiat nulla sint",
				price: 30,
				rating: 4,
				pic: require("../../assets/dish-1.jpg")
			},
			{
				caption: "Daute irure dolor",
				price: 30,
				rating: 3,
				pic: require("../../assets/dish-2.jpg")
			},
			{
				caption: "Officia deserunt mollit",
				price: 30,
				rating: 5,
				pic: require("../../assets/dish-3.jpg")
			},
			{
				caption: "Pim minim veniam",
				price: 30,
				rating: 4,
				pic: require("../../assets/dish-4.jpg")
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		// У меня получилось использовать геттер
		dishesData(state) {
			return state.dishesMenu;
		}
	}
}