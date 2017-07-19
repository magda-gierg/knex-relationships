var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      // console.log(users)
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/form', function (req, res) {
res.render('form')
})

router.post('/myForm', function(req, res) {
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
      res.render('profiles', user[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
