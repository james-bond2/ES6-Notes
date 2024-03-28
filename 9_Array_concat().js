// Array.concat() method: this method doesn't change the main array



/**
 * => this method helps to combine / add multiple arrays into one array
 */




// Array.prototype.concat()

let arr1 = ['a','b','c','d']
let arr2 = ['e','f','g','h']
let arr3 = ['i','j','k','l']
let arr4 = ['m','n','o','p']


// concating one array to the main array 
const result = arr1.concat(arr2)


// concating multiple array to the main array
const result2 = arr1.concat(arr2,arr3,arr4)


console.log(`This is result : ${result}`);

console.log(`This is result2 : ${result2}`)