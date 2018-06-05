module.exports = function(arr, size) {
  var groups = [];
  for (var i = 0; i < arr.length; i += size) {
    groups.push(arr.slice(i, i + size));
  }
  return groups;
};
