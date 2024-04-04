// Array.find() method: This method doesn't change the main array.

/**                            <------------ Description --------------->
 * => this method works to find any item in the Array when the condition becomes true.
 * => this method takes two parameters, if you use the normal function. first one is an function(), and 
 * the second one is 'this' keyword
 * => but if you use the '() => {}' arrow function, then you will be able to use just the arrow function. 
 * and then 'this' keyword is not used
 * => That is why, arrow function is beautiful.
 * 
 * ----------------> Remember this array method gives just one particular item or data <-----------------
 * 
 * =>   so now you can ask, which item will return? well, the answer is: which item will match with the 
 * condition, that item will return.
 */



// Array.prototype.find()
let numArr = [9,3,6,2,4,1];

let result = numArr.find(function(currentValue){
    return currentValue<4;
})

console.log(result)