

exports.up = function (knex, Promise) {
  return knex.schema.createTable('favourites', function (table) {
    table.increments('favourites_id').primary()
    table.integer('user_id')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('favourites')
}
