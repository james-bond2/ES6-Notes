// Array.findIndex()

/**                ------------ Description ---------------
 * => this method finds the index of the needed value
 * => this method also works like the previous method, but the 'find()' method give the needed value, and the 'findIndex()' method gives the needed index
 * => this method also works by the instructions of 'conditions'
 * => if the method doesn't find the expected / needed index or you set a unreal condition for the Array, then the 'findIndex()' method will return " -1 "
 * => Remember this array method also gives just one particular item or data
 */



// Array.prototype.findIndex()

let number = [10,53,14,95,36,77,98,29];


let result = number.findIndex((currentValue,index,arr)=>{
    // return !(currentValue % 9);
    return !(currentValue%20);
})

console.log(result)
