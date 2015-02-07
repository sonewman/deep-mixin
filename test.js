var desc = require('macchiato')
var deepMixin = require('./')

desc('deepMixin')
.it('should mixin deep objects', function () {
  var result = deepMixin({}, {
    a: {
      b: { 
        c: 1,
        d: {
          e: 1,
          f: 2, 
          g: 3
        }
      }
    }
  }, {
    a: { 
      a: 1,
      b: { 
        a: 0,
        b: 1,
        c: 3,
        d: { 
          a: 0, 
          b: 0.25, 
          c: 0.5, 
          d: 0.75 
        }
      }
    },
    c: 2
  }, {
    a: {
      b: {
        d: {
          h: 4,
          i: 5,
          j: 6,
          k: 7
        },
        e: 4,
        f: 5,
        g: 6
      },
      c: 2,
      d: 3
    },
    b: 1
  })

  this.expect(result).deepEquals({
    a: {
      a: 1,
      b: { 
        a: 0,
        b: 1,
        c: 3,
        d: { 
          a: 0,
          b: 0.25,
          c: 0.5,
          d: 0.75,
          e: 1,
          f: 2,
          g: 3,
          h: 4,
          i: 5,
          j: 6,
          k: 7
        },
        e: 4,
        f: 5,
        g: 6
      },
      c: 2,
      d: 3
    },
    b: 1,
    c: 2
  })

  this.end()
})
