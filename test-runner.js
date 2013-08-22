/**
 * Module dependencies.
 */

var stylus = require('stylus')
  , fs = require('fs')
  , autoprefixer = require('autoprefixer')
  , glob = require('glob')
  , whatToTest = process.env.npm_package_config_whatToTest || '**';

// test cases

glob.sync("./" + whatToTest + "/tests/*.styl").forEach(function(test){
  var name = test.replace(/\.?[\/]/g, ' ').replace(' tests',':').replace('.styl','');
  it(name, function(){
    var css = fs.readFileSync(test.replace('.styl', '.css'), 'utf8').replace(/\r/g, '').trim();
    var style = stylus('@import "node_modules/stylobate"; @import "index.styl"; set-skin-namespace("islands"); @import "' + test + '"');
   
    style.render(function(err, actual){
      if (err) throw err;
      actual = autoprefixer.compile(actual);
      actual.trim().should.equal(css);
    });
  })
});

