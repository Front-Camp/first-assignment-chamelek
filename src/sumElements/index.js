/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  var result=0;
  for (var s : arr)
  {
       if(typeof s == "number" && isFinite(a)  &&  b==b )
       {
         result += s;
       }
  }
  return result;
};
  /* your logic here...*/

export default sumElements;
