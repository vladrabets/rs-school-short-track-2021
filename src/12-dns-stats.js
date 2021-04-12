/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dom = [];
  for (let i = 0; i < domains.length; i++) {
    dom.push(domains[i]);
  }
  const res = {};
  let p;
  let flag = '';
  if (dom !== []) {
    for (let j = 0; j < dom.length; j++) {
      p = 1;
      for (let i = 0; i < dom[j].length - 1; i++) {
        if (dom[j][i] === '.') {
          p++;
        }
      }
      let i = dom[j].length - 1;
      for (let k = 0; k < p; k++) {
        dom[j] = dom[j].split('');
        if (dom[j].includes('.')) {
          let len = 0;
          while (dom[j][i + 1] !== '.') {
            len++;
            i--;
          }
          flag += dom[j].splice(dom[j].lastIndexOf('.'), len).join('');
        } else {
          flag += '.';
          flag += dom[j].splice(0, dom[j].length).join('');
        }
        dom[j] = dom[j].join('');
        if (flag in res) {
          res[flag] += 1;
        } else {
          res[flag] = 1;
        }
      }
      flag = '';
    }
  }
  return res;
}

module.exports = getDNSStats;
