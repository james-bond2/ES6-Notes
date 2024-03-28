// Function default parameter

function myfunc(num) {
    return num;
}
console.log(myfunc(3));   // here I give the value of 'num' parameter. but if I don't pass the argument then it will return 'undefined'


/** to avoid this problem, you can set the value of parameter, and then you don't need to pass any 
argument. because you set the default parameter. if you pass any argument, it will simply return. but if 
you don't pass any argument then it wil return the default value. see the following example  */

function myfunc1(num = 10) {
    return num;
}
console.log(myfunc1(9))   /** here I give the value of 'num' parameter so it will return the given / 
passed argument. but if I don't pass any argument / if I pass 'undefined' as argument,the the function 
will return 10. because I have set '10' as the "Default Parameter" .  */

console.log(myfunc1());          // this will return the Default value of parameter, answer is : 10
console.log(myfunc1(undefined))  // this will also return the Default value of parameter, answer is : 10
console.log(myfunc1(null));      // this will return 'null', because null is a value
console.log(myfunc1('aslam sheikh'));      // this will return 'aslam sheikh', because null is a value
