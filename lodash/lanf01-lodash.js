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
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },

  difference: function (ary, ...values) {
    var result = []
    var tem = []
    tem.compact(...values)

    for (var i = 0; i < tem.length; i++) {
      if (!(ary[i] in tem)) {
        result.push(ary[i])
      }
    }
    return result

  },

  drop: function (ary, n = 1) {
    var result = []
    for (var i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  },

  fill: function (ary, value, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  },

  findIndex: function (ary, predicate = _.identity, froIndex = 0) {

  },

  dropRight: function (ary, n = 1) {
    if (n > ary.length) {
      return []
    }
    var result = []
    for (i = 0; i < ary.length - n; i++) {
      result.push(ary[i])
    }
    return result

  },

  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]

      if (Array.isArray(item)) {
        for (var j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result

  },

  flattenDeep: function (ary) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = ary[i]

      if (Array.isArray(item)) {
        var flatten = flattenDeep(item)
        for (var j = 0; j < flatten.length; j++) {
          result.push(flatten[j])
        }
      } else {
        result.push(item)
      }
    }
    return result

  },


  flattenDepth: function (ary, depth = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      while (depth > 0) {
        if (Array.isArray(item)) {
        var flatten = flattenDeep(item)
        for (var j = 0; j < flatten.length; j++) {
          result.push(flatten[j])
          depth--
        }
      } else {
        result.push(item)
        }
      }
    }
    return result

  },

  fromPairs: function (pairs) {
    var result = {}
    for (var i = 0; i < pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][i]
    }
    return result
  },


  head: function (ary) {
    if (!ary[0]) {
      return undefined
    } else {
      return ary[0]
    }
  },


  indexOf: function (ary, value, fromIndex = 0) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }.






}
