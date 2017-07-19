exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('age')
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
