
module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('users.id', id)
  .join('profiles', 'users.name',"=", 'profiles.name')
  .select('*', 'profiles.name as profiles_name', 'users.name as user_name')
  .first()
}
