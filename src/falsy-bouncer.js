module.exports = function(arr) {
  return arr.filter(function(x) {
    return !!x;
  });
};
