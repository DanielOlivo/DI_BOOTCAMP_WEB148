exports.seed = async function(knex){
    await knex('post').del();

    await knex('post').insert([
        {id: 1, title: 'title 1', content: 'content 1'},
        {id: 2, title: 'title 2', content: 'content 2'},
        {id: 3, title: 'title 3', content: 'content 3'},
    ])
}