module.exports = function (arr) {
  return arr.map(function (numbers) {
    return numbers.reduce(function (largest, number) {
      return largest === undefined ? number : Math.max(largest, number);
    });
  });
};
