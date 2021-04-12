/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nCopy = n;
  const digitsArr = [];
  while (nCopy > 0) {
    digitsArr.push(nCopy % 10);
    nCopy = Math.floor(nCopy / 10);
  }
  digitsArr.reverse();
  for (let i = 0; i < digitsArr.length; i++) {
    if (i === digitsArr.length - 1) {
      digitsArr.splice(i, 1);
      break;
    } else if (digitsArr[i] < digitsArr[i + 1]) {
      digitsArr.splice(i, 1);
      break;
    }
  }
  let final = 0;
  for (let i = 0; i < digitsArr.length; i++) {
    final = final * 10 + digitsArr[i];
  }
  return final;
}

module.exports = deleteDigit;
