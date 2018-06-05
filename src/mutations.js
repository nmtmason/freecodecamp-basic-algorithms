module.exports = function(arr) {
  var str = arr[0].toLowerCase();
  var test = arr[1].toLowerCase();

  for (var i = 0; i < test.length; i++) {
    var letter = test[i];
    if (str.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
};
