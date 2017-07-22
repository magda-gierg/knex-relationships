var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/post/:id', function (req, res) {
res.render('posts', {id: req.params.id})
})

router.post('/post/:id', function(req, res) {
  db.addPost(req.params.id, req.body, req.app.get('connection'))
    .then(function () {
      res.redirect('/' + req.params.id)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/form', function (req, res) {
res.render('form')
})

router.post('/newUser', function(req, res) {
  db.addUser(req.body, req.app.get('connection'))
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/:id', function (req, res) {
  db.getUser(req.params.id, req.app.get('connection'))
  .then(function (user) {
    db.getPost(req.params.id, req.app.get('connection'))
    .then(function (userPosts) {
      res.render('profiles', {id: user[0].id, name: user[0].name, age: user[0].age, image: user[0].image, posts: userPosts})

    })
  })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
