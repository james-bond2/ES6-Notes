// Sets are like Arrays but Sets are not Arrays. I read about "Set & Function" in class 8 Math book.
// Set is list of unique values
// To do any operation in any set, we make the set into an array first, and then we do the operation
// Set is an iterable object
// Set always stores unique values

function log(anything){     // I made this function to log something, without writing 'console.log()'
    return console.log(anything)
}

let arr1 = ['this array is created by Literal syntax'];      // this array is created by Literal syntax
log(arr1)

let arr2 = new Array('this is created by Constructor syntax')      // this is created by Constructor syntax
log(arr2)

// first of all , If we want to create a Set, we must use the Constructor syntax

let set1 = new Set()
log(set1)

// set methods

set1.add('Naim')
set1.add(10);
set1.add("Taka");

// in set, we cannot add one item multiple time. Because Set always stores unique values

set1.add('Naim')            // this item will not be added, because it already exists
set1.add(10);               // this item will not be added, because it already exists
set1.add("Taka");           // this item will not be added, because it already exists


// you can add one raw object multiple time. like the following

set1.add({a:2,b:3})
set1.add({a:2,b:3})
set1.add({a:2,b:3})

// but if you want to add any Object's-variable multiple time, it is not possible

let objs = {a:4,b:5}
set1.add(objs)
set1.add(objs)           // this item will not be added, because it already exists
set1.add(objs)           // this item will not be added, because it already exists

log(`This is the set named: ${set1}`)
console.log(set1);

// set1.delete("Taka")      // to remove single item
// set1.clear()             // to remove all items
// log(set1.has("Taka"))
// log(set1.size)

// log(set1)


// set from array

// let narry = [1,2,3]
// let nset = new Set(narry)
// log(nset)


// set is an iterable object
// we can pass any iterable in set and set itself an iterable
// let mset = new Set(narry)
// for (const number of mset) {
//     log(number)
// }


// array from set

// to use the set, you will need to make it an array

// to make array from set, use (...) spread operator

// log([...mset])      // Method 1
// log(Array.from(mset))       // Method 2

/* we can keep any array's unique items, and store it into a new array by using the set method. */

// example
let anoArr = [10,15,15,15,12,14,16,18]
let anoArrUniq = [...new Set(anoArr)]
log(anoArrUniq)

// set union: class 8th Math, Chapter:'set & functions'

// there is no built-in operator to do set union in JavaScript. so we can manually do Union using the following technic

let j = new Set([2,3,4])
let k= new Set([3,4,5])
let union1 = new Set([...j,...k])
log(union1)

// set intersection: class 8th Math, Chapter:'set & functions'

/* there is no built-in operator to do set intersection in JavaScript. so we can manually do Intersection using the
following technic. intersection means the common items in the both Arrays.  */

let intersection = new Set([...j].filter(x=>k.has(x)))
log(intersection)

// difference means, which items of 'j' array are not in the k array

let difference = new Set([...j].filter(x=>!k.has(x)))
log(difference)





//   ------------------------------------------------> Weak Set <---------------------------------------------------

// Weak Set always can take and store Objects and unregistered symbol
// Weak Set is not an iterable
// It takes iterable values, but itself not an iterable


let ws = new WeakSet([{a:1},{b:2},{c:3}])
// ws.add()
log(ws)

// Usage of Weak Set

class someClass {
    constructor() {
        ws.add(this)
    }
    newFunction(){
        if (!ws.has(this)){
            throw new Error('Go to the home & try again.')
        } else {
            return 'you touched the class function inside the class!'
        }
    }
}

let nclass = new someClass();
log(nclass.newFunction())

// if we do not use the 'this' keyword from a Weak Set, anyone can access the items inside the class. like the following line
// console.log(someClass.prototype.newFunction())
