exports.seed = async function(knex){
    await knex('books').del();

    await knex('books').insert([
        {title: 'Alice in Wonderland', author: 'Lewis Carrol', publishedYear: 1865},
        {title: 'Player of Games', author: 'Iain M. Banks', publishedYear: 1988},
    ])
}