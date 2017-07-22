
exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('post_id').primary()
    table.integer('user_id')
    table.string('title')
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
}
