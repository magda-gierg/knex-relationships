
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser:addUser
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('users.id', id)
  .join('profiles', 'users.profiles_id', '=', 'profiles.id')
}

function addUser (body, connection) {
  var newProfile= {age: body.age, image: body.image}
  return  connection('profiles').insert(newProfile)
  .then(function(profileId) {
   var newUser= {name: body.name, email: body.email, profiles_id: profileId[0] }
   return connection('users').insert(newUser)
  })
}
