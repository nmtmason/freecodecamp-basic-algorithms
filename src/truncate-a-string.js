module.exports = function(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num > 3 ? num - 3 : num) + '...';
};
