module.exports = immutableMixin;
var mixin = require('./_mixin.js');

function immutableMixin() {
  var x = {};
  for (var i = 0; i < arguments.length; i += 1)
    mixin(x, arguments[i]);

  return x;
}
