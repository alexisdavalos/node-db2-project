
exports.up = function(knex) {
  //changes to apply to database
exports.up = function(knex) {
    //DO NOT FORGET TO RETURN
    return knex.schema.createTable('cars', tbl => {
        //ads an id column that auto increments
        tbl.increments(); //primary key (id)
        tbl
            .string('VIN')
            .notNullable()
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
            .string('mileage', 128)
            .notNullable()
            .index();
        tbl
            .string('transmission', 128).defaultTo('unknown')
            .nullable();
        tbl
            .string('title', 128).defaultTo('unknown')
            .nullable();
    })
};
//how to undo the changes
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

};

exports.down = function(knex) {
  
};
