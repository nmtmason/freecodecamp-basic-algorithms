module.exports = function (arr, num) {
  arr.sort(function (a, b) { return a - b; });
  return arr.reduce(function (position, element) {
    return num > element ? position + 1 : position;
  }, 0);
};
