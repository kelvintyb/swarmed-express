var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {
    name: 'Kelvin Tan',
    randArr: ['hi', 'world', 'yoyo']
  })
})

//set routes
// var routes = require('./routes/index');
var userRoutes = require('./routes/users');
// var postsRoutes = require('./routes/posts');
//set middleware for routes
// app.use('/', routes)
app.use('/static', express.static('static'));
app.use('/users', userRoutes)
  // app.use('/posts', postsRoutes)

app.listen(port);
console.log('Server started on ' + port);
