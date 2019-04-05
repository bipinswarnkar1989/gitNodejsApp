var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/auth', function(req, res, next) {
  fetch('https://api.github.com/users/bipinswarnkar1989/repos')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      return res.json(json)
    });
  // return res.json({
  //   success: true,
  //   message: 'Login'
  // })
});

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  const username = req.params.username;
  fetch('https://api.github.com/users/'+username)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return res.send(json)
    });
});

/* GET users listing. */
router.get('/:username/repos', function(req, res, next) {
  const username = req.params.username;
  fetch('https://api.github.com/users/'+username+'/repos')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return res.json(json)
    });
});

module.exports = router;
