/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let mid;
  let r = array.length;
  let l = 0;
  while (l < r) {
    mid = Math.floor((r + l) / 2);
    if (array[mid] >= value) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

module.exports = findIndex;
