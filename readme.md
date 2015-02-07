# Deep-Mixin

A super simple module for mixin in infinite infinitely deeply nested objects.

install:
```bash
$ npm install deep-mixin
```

Usage:
```javascript
var deepMixin = require('deep-mixin')

var o1 = { a: 1 }
var o2 = {
  b: {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2
    }
  }
}
var o3 = {
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

deepMixin(o1, o2, o3) // => o1
/*
  o1 === {
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
