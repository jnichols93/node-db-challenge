
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl
          .increments();

          tbl
          .string('name', 255)
          .notNullable();

          tbl
          .text('description');

          tbl
          .boolean('completed')
          .defaultTo(false);
      })
      
      .createTable('resources', tbl => {
          tbl
          .increments();

          tbl
          .string('name', 255)
          .notNullable();

          tbl
          .text('description');
      })

      .createTable('project_resources', tbl => {
          tbl
          .increments();

          tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');

          tbl
          .integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources');

        //   tbl
        //   .unique('project_id', 'resource_id');
      })

      .createTable('tasks', tbl => {
          tbl
          .increments();

          tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');

          tbl
          .text('description')
          .notNullable();

          tbl
          .text('notes')

          tbl
          .boolean('completed')
          .defaultTo(false)

        //   tbl
        //   .unique('project_id');
      })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
  
};
