exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', (table) => {
			//  PK
			table.increments('recipe_id');
			//  name: string, required
			table.string('recipe_name', 128).notNullable();
		})
		.createTable('steps', (table) => {
			//  Pk
			table.increments('step_id');
			//  text: string, required
			table.string('step_text').notNullable();
			//  step_number: integer, required
			table.integer('step_number').notNullable();
			//  recipe_id: FK, integer, required
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
		})
		.createTable('ingredients', (table) => {
			//  PK
			table.increments('ingredient_id');
			//  name: string, required
			table.string('ingredient_name', 128).notNullable();
		})
		.createTable('step_ingredients', (table) => {
			//  PK
			table.increments();
			//  step_id: FK, int, req
			table
				.integer('step_id')
				.unsigned()
				.notNullable()
				.references('step_id')
				.inTable('steps')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			//  ingredient_id: FK, int, req
			table
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredient_id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			//  quantity: string, required
			table.string('step_ingredient_quantity').notNullable();
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('step_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes');
};
