module.exports = function(grunt) {

  var rootDirectory = __dirname

  grunt.registerTask('build', 'Build static website', function() {

    var fs = require('fs');
    var path = require('path');
    var pug = require('pug');
    var buildDirectory = path.join(rootDirectory, '/.build');
    var templatesDirectory = path.join(rootDirectory, '/views');

    if (!fs.existsSync(buildDirectory)) {
      fs.mkdirSync(buildDirectory);
    }

    var covers = fs.readdirSync('public/covers').filter(function(file) {
      return path.extname(file) === '.png';
    });

    var actions = [
      {route: '/index.html', template: 'about.jade'},
      //{route: '/komunikaty', template: 'news.jade'},
      {route: '/publikacje', template: 'publications.jade', variables: {covers: covers}},
      //{route: '/obszary-badawcze', template: 'research.jade'},
      {route: '/raporty-i-ekspertyzy', template: 'reports.jade'},
      {route: '/kontakt', template: 'contact.jade'}
    ];

    actions.forEach(function(action) {
      console.log('Saving ' + action.template + ' as ' + action.route);
      var templatePath = path.join(templatesDirectory, action.template);
      var template = pug.compileFile(templatePath, {basedir: templatesDirectory});
      var html = template(action.variables || {});
      fs.writeFileSync(path.join(buildDirectory, action.route), html, {flag: 'w'});
    });
  });
};