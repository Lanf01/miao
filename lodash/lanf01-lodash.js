var lanf01 = {

  chunk: function (ary, size = 1) {
    var result = []
    var tmp = []

    if (size == 0) {
      return result
    }

    if (size == ary.length) {
      return ary
    }
    for (var i = 0; i < ary.length; i++) {
      tmp.push(ary[i])
      if (tmp.length == size) {
        result.push(tmp)
        tmp = []
      }

    }
    if (tmp[0]) {
      result.push(tmp)
    }
    return result
  },

  compact: function (ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] !== false && ary[i] !== null && ary[i] !== "" && ary[i] !== undefined && ary[i] !== NaN) {
        result.push(ary[i])
      }
    }
    return result
  },

  difference: function (ary, ...values) {
    var map = {}
    var result = []

    for (var i = 0; i < ary.length; i++) {

    }

  },

  drop: function (ary, n = 1) {
    var result = []
    for (var i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  },

  fill: function (ary, value, start = 0, end = ary.length - 1) {
    var result = []
    for (var i = start; i <= end; i++) {
      ary[i] = value
      result.push(ary[i])
    }
    return result
  },

}
