
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser
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

function addUser(user, connection) {
  console.log({user});
  var newUser= {name: user.name, email: user.email}
  return connection('users').insert(newUser)
  .then(function(response) {
    var newProfileObject = {name: user.name, age: user.age}
    return connection('profiles')
      .insert(newProfileObject)
    console.log({response});
  })
}
