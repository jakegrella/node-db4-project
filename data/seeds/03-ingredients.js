exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ ingredient_name: `basmati rice` }, //  id: 1
				{ ingredient_name: `broccoli` }, //  id: 2
				{ ingredient_name: `chicken broth` }, //  id: 3
				{ ingredient_name: `salmon fillet` }, //  id: 4
				{ ingredient_name: `brown sugar` }, //  id: 5
				{ ingredient_name: `chili-garlic sauce` }, //  id: 6
				{ ingredient_name: `cornstarch` }, //  id: 7
				{ ingredient_name: `rice vinegar` }, //  id: 8
				{ ingredient_name: `salt` }, //  id: 9
				{ ingredient_name: `toasted seasme oil` }, //  id: 10
				{ ingredient_name: `water` }, //  id: 11
			]);
		});
};
