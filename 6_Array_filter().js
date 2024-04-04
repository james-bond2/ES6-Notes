// Array.filter() method: this method gives new array



/**                ------------ Description ---------------
 * => this method will filter the array items following the instruction of the condition / when the given 
 * condition is true 
 * => this method gives a new array of items not just one particular item
 */



// Array.prototype.filter()
let number = [1,2,3,4,5,6,7,8,9,10];
let result = number.filter((currentValue,index,arr)=>{
    console.log(index)
    console.log(arr)
    return currentValue>5;
})

console.log(result)
// console.log(number)