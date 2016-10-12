var express = require('express');
//instantiate new instance of router
var port = 3000;
var router = express.Router()
console.log('user in console');
//create a route
router.get(function(req, res) {
  console.log('global get is working')
});

console.log('im inbetween get')

router.get('/', function(req, res) {
  console.log('1st get is firing')
  res.send('list of users here')
});

router.get('/:name', function(req, res) {
  res.send('this is ' + req.params.name + '\'s profile page');
})

module.exports = router;
