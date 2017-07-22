
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser:addUser,
  addPost: addPost,
  getPost: getPost

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

function addPost (id, body, connection) {
  var newPost= {user_id: id, title: body.title, content: body.content}
  return connection('posts').insert(newPost)
}
function getPost (id, connection) {
  return connection('posts').where('user_id', id)
}
