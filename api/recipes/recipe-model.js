const db = require('../../data/db-config');

module.exports = {
	find() {
		//  --SQL--
		//  select
		//      *
		//  from recipes
		//  -------
		return db('recipes');
	},
	findById(id) {
		//  --SQL--
		//  select
		//      *
		//  from recipes
		//  where id = 1;
		//  -------
		return db('recipes').where('id', id).first();
	},
	findSteps(id) {
		//  --SQL--
		//
		//  -------
		return db('recipes as r');
		// FINISH
	},
	add(recipe) {
		//  --SQL--
		//
		//  -------
		return db('recipes').insert(recipe);
		// FINISH
	},
	update(changes, id) {
		//  --SQL--
		//
		//  -------
		return db('recipes').where('id', id).update(changes);
	},
	remove(id) {
		//  --SQL--
		//  DELETE FROM recipes
		//  WHERE id = 7;
		//  -------
		return db('recipes').where('id', id).del();
	},
};
