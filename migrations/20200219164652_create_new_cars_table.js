
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        //ads an id column that auto increments
        tbl.increments(); //primary key (id)
        tbl
            .string('VIN')
            .notNullable()
            .unique()
            .index(); // makes searching by name faster
        
        tbl
            .string('make', 128)
            .notNullable()
            .index();

        tbl 
            .string('model', 128)
            .notNullable()
            .index();
        tbl
            .integer('mileage')
            .notNullable()
        tbl
            .string('transmission', 128).defaultTo('unknown')
            .nullable();
        tbl
            .string('title', 128).defaultTo('unknown')
            .nullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
