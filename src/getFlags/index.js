/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  var c = arr[0];
  var a = 0;
  for(var b : arr)
  {
    if(a == 0)
    {
           continue
         }
    else {
      c.concat(b);
    }
    a++;
    
  }
  return c;
};
export default getFlags;
