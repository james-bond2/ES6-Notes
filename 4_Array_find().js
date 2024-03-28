// Array.find() method: This method doesn't change the main array.

/**                ------------ Description ---------------
 * => this method works to find any item in the Array when the condition becomes true.
 * => this method takes two parameters, if you use the normal function. first one is an function(), and the second one is 'this' keyword
 * => but if you use the '() => {}' arrow function, then you will be able to use just the arrow function.
 * => That is why, arrow function is beautiful.
 * => Remember this array method gives just one particular item or data
 */



// Array.prototype.find()
let numArr = [9,3,6,2,4,1];

let result = numArr.find(function(currentValue){
    return currentValue<4;
})

console.log(result)