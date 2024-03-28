// Array.reduce() method: The reduce() method does not reduce the original array.





/**
 * => The reduce() method runs a function on each array element to produce (reduce it to) a single value.
 * => The reduce() method works from left-to-right in the array. See also reduceRight().
 */

/*
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}
*/

/**
 * Note that the function takes 4 arguments:

    The total (the initial value / previously returned value)
    The item value
    The item index
    The array itself
 */


// The example above does not use the index and array parameters. It can be rewritten to:
/*
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}
*/



// The reduce() method can accept an initial value:
/*
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;
}
*/




// Array.prototype.reduce()
let num = [1,2,3,4,5,6,7,8,9]

let newArr = num.reduce((previous,current)=>{
    return previous + current
})

console.log(newArr)
