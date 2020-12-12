exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('steps')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('steps').insert([
				{
					step_text: `Preheat oven to 400°F. Line a large baking sheet pan with parchment paper.`,
					step_number: 1,
					recipe_id: 1,
				},
				{
					step_text: `Using a strainer or colander, rinse the rice under cold, running water, then drain and transfer to a medium saucepan. Add broth and bring the mixture to a boil over high heat.`,
					step_number: 2,
					recipe_id: 1,
				},
				{
					step_text: `Once the liquid comes to a boil, stir the mixture, cover the saucepan, and reduce the heat to low. Cook the rice until the liquid is fully absorbed, 15-18 minutes. Once done, remove the rice from the heat and let it stand, still covered, for 5 minutes.`,
					step_number: 3,
					recipe_id: 1,
				},
				{
					step_text: `Meanwhile, place vinegar, sugar, water, chili-garlic sauce, and salt in a large skillet. Whisking occasionally, bring to a boil over high heat.`,
					step_number: 4,
					recipe_id: 1,
				},
				{
					step_text: `In a small bowl, make a slurry by whisking water with cornstarch until smooth.`,
					step_number: 5,
					recipe_id: 5,
				},
				{
					step_text: `Add cornstarch slurry to the skillet in a steady stream while whisking quickly. Cook, whisking continuously, until the sweet chili sauce thickens, about 30 seconds. Remove from heat.`,
					step_number: 6,
					recipe_id: 1,
				},
				{
					step_text: `Place salmon, skin-side down, on the baking sheet. Spoon the sweet chili sauce evenly over each filet.`,
					step_number: 7,
					recipe_id: 1,
				},
				{
					step_text: `Place salmon in the oven and bake until opaque and flaky, 10-15 minutes.`,
					step_number: 8,
					recipe_id: 1,
				},
				{
					step_text: `Meanwhile, wash and dry broccoli. Separate into bite-sized florets and cut stems into smaller pieces.`,
					step_number: 9,
					recipe_id: 1,
				},
				{
					step_text: `Wipe skillet clean with paper towels and place over medium heat.`,
					step_number: 10,
					recipe_id: 1,
				},
				{
					step_text: `Once the skillet is hot, add oil and swirl to coat the bottom.`,
					step_number: 11,
					recipe_id: 1,
				},
				{
					step_text: `Add broccoli and stir-fry until bright green and tender-crisp, 5-7 minutes. Remove from heat.`,
					step_number: 12,
					recipe_id: 1,
				},
				{
					step_text: `To serve, divide rice, salmon, and broccoli between plates or bowls. Enjoy!`,
					step_number: 13,
					recipe_id: 1,
				},
			]);
		});
};
