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

router.get('/edit', function(req, res) {
  res.render('editForm')
})

  router.post('/edit', function(req, res) {
  db.addUser(req.body, req.app.get('connection'))
    .then(function(users) {
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})






router.get('/:id', function (req, res) {
  db.getUser(req.params.id, req.app.get('connection'))
    .then(function (userProfile) {
      console.log({userProfile});
      // if (userProfile.length == 0) res.redirect('/')
      // else
      res.render('userProfile', userProfile)
    })

    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })







module.exports = router
