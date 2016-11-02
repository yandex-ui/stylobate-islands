/**
 * Module dependencies.
 */

var stylus = require('stylus');
var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var glob = require('glob');
var whatToTest = process.env.npm_package_config_whatToTest || '**';

// test cases

glob.sync("./lib/*/" + whatToTest + "/tests/*.styl").forEach(function(test){
  var name = test.replace(/\.?[\/]/g, ' ').replace(' tests',':').replace('.styl','');
  if(name.indexOf(' old_') != -1) {
    return;
  }

  it(name, function(){
    var css = fs.readFileSync(test.replace('.styl', '.css'), 'utf8').replace(/\r/g, '').trim();
    var style = stylus('@require "node_modules/stylobate"; @require "lib/index"; @require "' + test + '"');

    style.render(function(err, actual){
      if (err) throw err;

      actual = postcss()
          .use( autoprefixer({browsers: ['last 2 versions', 'ios 5', 'ie 9', 'fx 28', 'fx 21']}).postcss )
          .process(actual);

      actual.root.eachRule(function (rule) {
          // Insert an extra newline before each non-first rule
          if (rule.parent.rules[0] !== rule) {
              rule.before = '\n\n';
          }
      });

      actual.css.trim().should.equal(css);
    });
  })
});

