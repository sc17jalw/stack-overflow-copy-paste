export default isEmail

/*
 * Original Source: https://stackoverflow.com/a/46181
 *
 * This utility function takes a string as a parameter
 * and returns a boolean value representing whether the string is a valid email address.
 *
 * @param {string} func - The string to be checked
 * @return {Boolean} - True for valid email. False for invalid email.
 */
function isEmail(email) {
   const re = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.' +
   ',;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]' +
   '{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
   return re.test(String(email).toLowerCase())
 }
