// Array.splice() method: -----> this method changes the main array. <-------------





/**    ----------------------- How this works? ------------------------
 * => the splice() method takes 3 parameters. The first one is the startIndex, second is the deleteCount, and the third is a list of items which will add to the main array after the deleted items.
 * => now if you put this spliced array into a variable and print the variable, then the variable will show the deleted items.
 * => but if you print the main array after doing splice(), then it will print the array excluding the deleted items.
 * => You can pass 2 parameters, then it will delete the specified items. first param is the starting of deletion, and the second param is the number of items to delete
 */




// Array.prototype.splice()
let newArr = [1,2,3,4,5,6,7,8,9]
let result = newArr.splice(3,3)
console.log(result);
console.log(`This is the main array: ${newArr}`);