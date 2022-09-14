var maio = {

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
      tmp.push(ary)
      if (tmp.length == size) {
        result.push(tmp)
        tmp = []
      }
    }
    result.push(tmp)
    return result
  },

  compact: function (ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] == false || ary[i] == null || ary[i] == "" || ary[i] == undefined || ary[i] == NaN) {

      }
    }


  },

  fill: function() {},

}
