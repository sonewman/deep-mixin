# Deep-Mixin

A super simple module for mixin in infinite infinitely deeply nested objects.

install:
```bash
$ npm install deep-mixin
```

#### Version 2.*

As of v2 the default mixin is immutable with the same use case as [xtend](https://github.com/Raynos/xtend).

The behaviour of v1 can be `require`d by using:
```javascript
require('deep-mixin/mutable')
```

Usage:
```javascript
var deepMixin = require('deep-mixin')

var o1 = {
  a: 1,
  b: {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2
    }
  }
}
var o2 = {
  b: {
    a: 0,
    c: {
      c: 3,
      d: 4,
      e: 5
    },
    d: 3,
    e: 4,
    f: 5,
  }
}

deepMixin(o1, o2) /* =>
  {
    a: 1,
    b: {
      a: 0,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
      },
      d: 3,
      e: 4,
      f: 5
    }
  }
*/
```
