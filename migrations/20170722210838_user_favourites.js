
exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_favourites', function (table) {
    table.integer('user_id')
    table.integer('favourites_id')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_favourites')
}
