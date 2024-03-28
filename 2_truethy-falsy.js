// truthy will be considered when the value will not like as the followings
// ------>  1  false
// ------>  2  0 , not "0"
// ------>  3  "", not " "
// ------>  4 null
// ------>  5 undefined
// ------>  6 NaN


// but the followings are truthy values;

// ------> @@ []
// ------> @@ {}


let real = null;

if (real) {
    console.log('this is true!');   
} else {
    console.log('this is false!');
}


// if you want to use truthy as falsy, then use (!) 'not' operator as like the following 
if (!real) {
    console.log('this is mainly true, but I want to use it as false.');
} else {
    console.log('this is mainly false, but I want to use it as true.');
}