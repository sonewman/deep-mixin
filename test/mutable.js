var desc = require('macchiato');
var deepMixin = require('../mutable');

desc('deep-mixin - mutable')
.it('should mixin deep objects', function () {
  var out = {};
  var result = deepMixin(
    out,
    {
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
      c: {
        a: {
          b: 1
        }
      }
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
    }
  );

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
    c: {
      a: {
        b: 1
      }
    }
  });
  this.expect(result).equals(out);

  this.end();
})
.it('should mixin deep objects', function () {
  var ob1 = {
    a: {
      b: {
        a: [ 0, 0, 0 ],
        c: 1,
        d: { e: 1, f: 2, g: 3 }
      }
    },
    b: [ { a: 3, b: 1 }, { a: 4 } ]
  };
  var ob2 = {
    a: {
      a: 1,
      b: { a: [ 1, 2, 3 ] }
    },
    c: { a: { b: 1 } }
  };
  var ob3 = {
    a: {
      b: {
        a: [ 4, 5, 6, 7, 8 ]
      },
      c: 2,
      d: 3
    },
    b: [ { a: 1 }, { a: 2 } ]
  };

  var result = deepMixin(ob1, ob2, ob3);
  this.expect(result).deepEquals({
    a: {
      a: 1,
      b: {
        a: [ 4, 5, 6, 7, 8 ],
        c: 1,
        d: { e: 1, f: 2, g: 3 }
      },
      c: 2,
      d: 3
    },
    b: [ { a: 1, b: 1 }, { a: 2 } ],
    c: { a: { b: 1 } }
  });

  this.expect(ob1.b).equal(result.b);

  this.end();
})
.it('should mixin readme example correctly', function () {
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
  };
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
      f: 5
    }
  };

  deepMixin(o1, o2);

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
  });
  this.end();
})
.it('should override non objects if an object is being mixed in', function () {
  var o1 = {
    a: 'abc'
  };

  var o2 = {
    a: {
      b: {
        c: 3
      }
    }
  };

  deepMixin(o1, o2);

  this.expect(o1).deepEquals({
      a: {
        b: {
          c: 3
        }
      }
    });
  
  this.end();
});
