
exports.up = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.integer('profiles_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropColumn('profiles_id')
}
