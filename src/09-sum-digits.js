/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let nCopy = n;
  while (nCopy > 0) {
    sum += nCopy % 10;
    nCopy = Math.floor(nCopy / 10);
    if (nCopy === 0 && Math.floor(sum / 10) > 0) {
      nCopy = sum;
      sum = 0;
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
