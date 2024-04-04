// copyWithin() method:

/* this method actually copy one or multiple items and sets the items in the targeted place, and
then the targeted place of item is replaced by the copied items
 */
// this method takes three '3' parameters. like the following line
// cpWith.copyWith(target,start,end)
let cpWith = ['JS','PY','PHP','RUBY','C','C#',]
// here the 'target' is the place, where we want to paste the copied item/items
// and the 'start' is the index of starting
// and the 'end' is the index of ending the copy

// the Target parameter is required

// the start parameter's default value is 0

// the End parameter's default value is array.length

/* In this method, the length of array always stays same. so if you pasted multiple items in the
one target item, then the array length will stay same size and the items after the limit of the
array's length will not be stored and be deleted. */

// overwrites the main array

// and at last returns the modified array


let afCPW = cpWith.copyWith(6,4,5)
console.log(afCPW)


let arre = ['abdullah','amina','muttalib','abu talib','khadija','abu bakr','fatima','ali','aisha']
console.log(arre.copyWithin(5,4,5));
console.log(arre.copyWithin(-2,-3,-2));

