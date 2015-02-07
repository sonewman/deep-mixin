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
.it('should mixin readme example correctly', function () {
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
  this.expect(o1).deepEquals({
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
  })
  this.end()
})
