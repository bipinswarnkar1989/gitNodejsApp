var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Api Working Please read the Readme file of the repo for Api Usage');
});

/* GET user data. */
router.get('/:username', function(req, res, next) {
  const username = req.params.username;
  fetch('https://api.github.com/users/'+username)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return res.send(json)
    });
});


/* GET user repos. */
router.get('/:username/repos', function(req, res, next) {
  const username = req.params.username;
  fetch('https://api.github.com/users/'+username+'/repos')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return res.json(json)
    });
});

/* GET user repo issues. */
router.get('/:username/:repo/issues', function(req, res, next) {
  const username = req.params.username;
  const repo = req.params.repo;
  //https://api.github.com/repos/bipinswarnkar1989/prepare-online-Mern-App/issues
  fetch('https://api.github.com/repos/'+username+'/'+repo+'/issues')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return res.json(json)
    });
});

module.exports = router;
