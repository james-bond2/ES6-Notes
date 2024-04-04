// Rest Operator

/** Rest is like Spread Operator. But Rest Operator is used in functions.
 * => It is also called Rest Parameter.
 * => We can pass multiple arguments, if we use Rest Parameter in function
 * => Rest Parameter returns data as array
 * */ 

// normal functions are like :
// function norm(a,b){
//     console.log(a+b);
// }
// norm(3,4)

// Rest Parameter applied functions like :
function restParam(...rest){
    console.log(...rest);
}
restParam(1,2,3,4,5,6)


/* you can set multiple parameter before "(...)" Rest Parameter/Operator. It is not allowed to use multiple
"(...)" Rest Parameters. But if you set Rest Parameter before any other parameter, then it will throw error. */

function second(a,b,...params) {              // this function is correct for calling
    console.log(a);
    console.log(b);
    console.log(...params);
    console.log(a,b,...params);
}
second(2,1,3,5,7)

// function third(...params,a) {               // this function is wrong and contains error & mistake
//     console.log(...params);
//     console.log(a);
//     console.log(...params,a);
// }
// third(9,2,4,6,8)

/**
 *  There this an alternative to take multiple arguments. That is "arguments" 
 * => keyword. If you set the "arguments" keyword into a function, then it will be 
 * => able to take multiple arguments. But it will return an Object, like the 
 * => following example.
 */

// function argumentsFunc(){
//     console.log(arguments);
// }
// argumentsFunc(2,3,4,5,6,7) /* It will return:[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7 } */