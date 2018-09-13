/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
var reverseString = "";
for (var i = str.length - 1; i >= 0; i--) { 
        reverseString += str[i];
}

return reverseString;

export default turnMeBaby;
