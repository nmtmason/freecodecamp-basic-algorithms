module.exports = function(arr1, arr2, n) {
  let result = arr2.slice();
  result.splice(n, 0, ...arr1.slice());
  return result;
};
