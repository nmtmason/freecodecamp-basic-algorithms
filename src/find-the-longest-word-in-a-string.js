module.exports = function (str) {
  return str.split(' ').reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
};
