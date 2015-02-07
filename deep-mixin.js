module.exports = deepMixin;

function mixin(a, b) {
  var keys = Object.keys(b);
  var key;
  for (var i = 0, l = keys.length; i < l; i += 1) {
    key = keys[i];
    if ('object' === typeof a[key])
      a[key] = mixin(a[key], b[key]);
    else
      a[key] = b[key];
  }
  return a;
}

function deepMixin(a) {
  for (var i = 1, l = arguments.length; i < l; i += 1) {
    if ('object' === typeof arguments[i])
      a = mixin(a, arguments[i]);
  }
  return a;
}
