module.exports = mixin;

function mixin(a, b) {
  if (Array.isArray(b)) return mixinArray(a, b);
  else if (b && 'object' === typeof b) return mixinObj(a, b);
  else return a;
}

function objOrArray(value) {
  return Array.isArray(value) ? [] : {};
}

function mixinArray(a, b) {
  for (var key = 0; key < b.length; key += 1)
    setValue(a, key, b[key]);

  return a;
}

function setValue(ret, key, value) {
  if (value && 'object' === typeof value) {
    if (!ret[key] || 'object' !== typeof ret[key])
      ret[key] = objOrArray(value);

    mixin(ret[key], value);
  } else {
    ret[key] = value;
  }
}

function mixinObj(a, b) {
  var keys = Object.keys(b);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    setValue(a, key, b[key]);
  }

  return a;
}
