// ------------------------> Important Object methods / Tricks <------------------------------ //

const friend = {
    name:'abdullah',
    home:'ramnagar',
    age:22,
    role:'learner',
    salary:'5k'
}


// Object.keys() method. This method returns the properties of the object into a new array
let keys = Object.keys(friend)
console.log(keys)

// Object.values() method. This method returns the values of the object into a new array
let values = Object.values(friend)
console.log(values)

// Object.entries() method. This method returns both, the properties and the values of the object in an array. And in the array each pair of data contains in small arrays
let entries = Object.entries(friend)
console.log(entries)


/* as the three methods, described above returns an array,  we can get benefit of this. now we 
can perform the Array methods to them, as they are Array now. So if we want to perform any 
method to any Object, we need to turn the Object into an Array. */



//------------------------------------> Object Shorthand <------------------------------------ //


/**
 * if you have an object with some properties, but you want to add some properties from some 
 * variables in the same file, then you can just add the variables name in the object and 
 * separate by commas like the following example
 * 
 */

let food = 'halal';
let isHSC = false;

let person = {
    name: 'jubayet' ,
    home: 'kanainagar' ,
    age: 21 ,
    role: 'bhoboghure' ,
    salary: '7k',
    food,
    isHSC
}

let entries1 = Object.entries(person)
console.log(entries1)