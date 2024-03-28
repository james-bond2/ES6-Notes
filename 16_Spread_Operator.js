// ---------------------------------> spread operator (...) <----------------------------------------

// ---------------------------------> spread operator in Array <----------------------------------------

/* spread operator is a simple but very essential operator in JavaScript. If you want to combine two or 
more Arrays and make a new array, then 'spread operator' is a good choice to do the task. because it 
has some benefits. see the following example to understand */


/* this 'spread operator' doesn't change the main array, it creates / clones new array. so you can do 
with the new array whatever you want, and the main array will not be effected.*/


let arr1 = [1,3,5,7]
let arr2 = [2,4,6,8]
let arr3 = [...arr1,...arr2]
console.log(arr3);


let list1 = ['aam','jaam','kola']
console.log(list1);
let list =[...list1,'kathal','lichu','aata']
console.log(list);


/*  the following process will create a exact copy of 'list1' array, but the main array 'list1' will be 
untouched.*/

let list2 = [...list1]
console.log(list2);

// ------------------------------------> Spread operator in Objects <-------------------------------------

// Almost everything same as like as the 'Spread Operator in Arrays'


let nObj = {
    a:1,
    b:2,
    c:3
}

let mObj = {
    d:4,
    e:5,
    f:6
}

let obj = {...nObj,...mObj}
console.log(obj)