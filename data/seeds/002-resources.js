
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'TK', description:'Training Kit'},
        {id: 2, name: 'docs', description:'Online docs'},
        {id: 3, name: 'lectures', description:'videos of the lectures'},
        {id: 4, name: 'PC', description:'My computer'},
        {id: 5, name: 'family', description:'hang out with my wife and kiddo'}
      ]);
    });
};
