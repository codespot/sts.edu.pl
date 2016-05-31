#!/usr/bin/env node

var express = require('express');
var port = process.env.PORT | 3000;
var app = express();
var fs = require('fs');
var path = require('path');

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.static('public'));

var covers = fs.readdirSync('public/covers').filter(function(file) {
  return path.extname(file) === '.png';
});

var actions = [
  {route: '/', template: 'about'},
  //{route: '/komunikaty', template: 'news'},
  {route: '/publikacje', template: 'publications', variables: {covers: covers}},
  //{route: '/obszary-badawcze', template: 'research'},
  {route: '/raporty-i-ekspertyzy', template: 'reports', variables: {reports: reports}},
  {route: '/kontakt', template: 'contact'}
];

actions.forEach(function(action) {
  app.get(action.route, function(req, res) {
    return res.render(action.template, action.variables || {});
  });
});


app.listen(port);

console.log('Listening on port ' + port);
