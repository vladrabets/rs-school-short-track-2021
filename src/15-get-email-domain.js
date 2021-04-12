/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = '';
  let i = email.length - 1;
  while (email[i] !== '@') {
    domain = email[i] + domain;
    i--;
  }
  return domain;
}

module.exports = getEmailDomain;
