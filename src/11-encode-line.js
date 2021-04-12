/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = str.split('').reverse().join('');
  let i = 0;
  let j = 0;
  let counter = 0;
  let flag;
  while (i < string.length - 1) {
    flag = string[i];
    while (string[j] === flag) {
      counter++;
      j++;
    }
    if (counter > 1) {
      string = string.split('');
      string.splice(i, counter, flag + counter);
      string = string.join('');
      i += 2;
    } else {
      i++;
    }
    j = i;
    counter = 0;
  }
  return string.split('').reverse().join('');
}

module.exports = encodeLine;
