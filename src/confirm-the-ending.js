module.exports = function(str, target) {
  return str.substr(str.length - target.length) === target;
};
