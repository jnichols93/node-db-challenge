
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'study', description: 'study for the node db sprint', completed: true},
        {id: 2, name: 'complete the sprint', description: 'finish the node db sprint', completed: false},
        {id: 3, name: 'relax', description: 'enjoy the weekend before next weeks classes', completed: false}
      ]);
    });
};
