
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: '1', description: 'read', notes: 'read up on stuff', completed: true},
        {id: 2, project_id: '1', description: 'review', notes: 'review past challenges', completed: true},
        {id: 3, project_id: '2', description: 'test well', notes: '', completed: false},
        {id:4, project_id: '3', description: 'have a great time', completed: false}
      ]);
    });
};