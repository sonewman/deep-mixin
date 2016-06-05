module.exports = mutableMixin;
var mixin = require('./_mixin.js');

function mutableMixin(x) {
  for (var i = 1; i < arguments.length; i += 1)
    mixin(x, arguments[i]);

  return x;
}

