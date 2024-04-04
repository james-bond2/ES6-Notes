// Array.slice()


// --------------- How this works? --------------------
// => first of all what is slice? the answer is : if you cut something with two chops, then the thing between the chops is a slice
// => the chop starts at the start of index. 
// => now how to slice? => well it's easy, set / pass two index as parameters. the first index is the first chop and the other index is the last chop
// => now where the chop exactly falls? => the chop falls at the initial of any index. now focus on the following line
// => to slice item from any array, the chops must have valid start and end. if you set any negative number like '-3' with any positive number, then ensure that they have crossed each other.
// => if I set first index 2, and the second is 4 at the num array then it will return [3,4]
// because the the chop falls just before the array item. such as, '23' is an array item, now the chop will fall before '23', not after '23'.
// => if the slice() is empty, then it will return the full array
// => if you set just one index then it will automatically set the second chop

let num = [1,2,3,4,5,6,7]
let result = num.slice(2,4)     // the result will be : [ 3, 4 ]
console.log(result)


// => when the index is minus index like '-2','-4' etc. then the the count will be reversed. and the count will start from the last. And now the chop will fall after the array item.
let result2 = num.slice(-4,4)      // the result2 will be : [4]
console.log(result2)
console.log(`This is the main array: ${num}`)

let brry = ['abu-bakr','omar','osman','ali','abdullah','abdur-rahman']
let besult = brry.slice(0,4)
console.log(besult)
let cesult = brry.slice(-6,6)
console.log(cesult);
cesult = brry.slice(-2,6)
console.log(cesult);