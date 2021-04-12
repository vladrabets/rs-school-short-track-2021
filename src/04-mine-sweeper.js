/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sum = 0;
  const field = [];
  field.push([]);
  for (let i = 0; i < matrix.length; i++) {
    if (i !== matrix.length - 1) {
      field.push([]);
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (i > 0 && j > 0) {
        if (matrix[i - 1][j - 1] === true) {
          sum += 1;
        }
      }
      if (i > 0) {
        if (matrix[i - 1][j] === true) {
          sum += 1;
        }
      }
      if (i > 0 && j < matrix[i].length - 1) {
        if (matrix[i - 1][j + 1] === true) {
          sum += 1;
        }
      }
      if (j < matrix[i].length - 1) {
        if (matrix[i][j + 1] === true) {
          sum += 1;
        }
      }
      if (i < matrix.length - 1 && j < matrix[i].length - 1) {
        if (matrix[i + 1][j + 1] === true) {
          sum += 1;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j] === true) {
          sum += 1;
        }
      }
      if (i < matrix.length - 1 && j > 0) {
        if (matrix[i + 1][j - 1] === true) {
          sum += 1;
        }
      }
      if (j > 0) {
        if (matrix[i][j - 1] === true) {
          sum += 1;
        }
      }
      field[i].push(sum);
      sum = 0;
    }
  }
  return field;
}

module.exports = minesweeper;
