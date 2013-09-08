/**
 * Module dependencies.
 */

var stylus = require('stylus');
var fs = require('fs');
var csso = require('csso');
var autoprefixer = require('autoprefixer');
var glob = require('glob');
var Comb = require('csscomb');
var whatToTest = process.env.npm_package_config_whatToTest || '**';
var comb = new Comb();
comb.configure(require('./.csscomb.json'));

// test cases

glob.sync("./" + whatToTest + "/tests/*.styl").forEach(function(test){
  var name = test.replace(/\.?[\/]/g, ' ').replace(' tests',':').replace('.styl','');

  it(name, function(){
    var css = fs.readFileSync(test.replace('.styl', '.css'), 'utf8').replace(/\r/g, '').trim();
    var style = stylus('@import "node_modules/stylobate"; @import "index.styl"; set-skin-namespace("islands"); @import "' + test + '"');

    style.render(function(err, actual){
      if (err) throw err;
      // Change the order of csso and autoprefixer when
      // we would able to set selector list code style
      actual = csso.justDoIt(actual);
      actual = autoprefixer.compile(actual);
      actual = comb.processString(actual);

      // Remove those hardfixes when there would be a way to do this in csscomb
      actual = actual.replace(/([^\+>])([\+>])\./g,'$1 $2 .');
      actual = actual.replace(/\),([^ ])([^\+>])/g,'), $1$2');
      actual = actual.replace(',sans-serif',', sans-serif');
      actual = actual.replace(/\)rgba/g,') rgba');
      actual.trim().should.equal(css);
    });
  })
});

