exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('step_ingredients')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('step_ingredients').insert([
				{
					step_id: 2,
					ingredient_id: 1,
					quantity: `1 cup`,
				},
				{
					step_id: 2,
					ingredient_id: 3,
					quantity: `16 fl oz (2 cups)`,
				},
				{
					step_id: 4,
					ingredient_id: 8,
					quantity: `1/4 cup`,
				},
				{
					step_id: 4,
					ingredient_id: 5,
					quantity: `1/4 cup`,
				},
				{
					step_id: 4,
					ingredient_id: 11,
					quantity: `1/4 cup`,
				},
				{
					step_id: 4,
					ingredient_id: 6,
					quantity: `1 tsp`,
				},
				{
					step_id: 4,
					ingredient_id: 9,
					quantity: `1 tsp`,
				},
				{
					step_id: 5,
					ingredient_id: 11,
					quantity: `2 tbsp`,
				},
				{
					step_id: 5,
					ingredient_id: 7,
					quantity: `1 tbsp`,
				},
				{
					step_id: 7,
					ingredient_id: 4,
					quantity: `1 1/2 lbs`,
				},
				{
					step_id: 9,
					ingredient_id: 2,
					quantity: `2 crowns`,
				},
				{
					step_id: 11,
					ingredient_id: 10,
					quantity: `1/4 cup`,
				},
			]);
		});
};
