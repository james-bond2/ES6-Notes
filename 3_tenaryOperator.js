// ternary operator is a shorted version of 'if...else' statement.

// here is the traditional 'if...else'

if(5>4){
    console.log('I will go to Jannah, Inshaallah!');
} else{
    console.log('No, first you will have to be punished!!!');
}



// here is ternary operator
let a = 5;
let b = 4;
// for one condition
5>4?console.log(`${a} is bigger.`):console.log(`${b} is bigger`);

// for two condition
let age=13;
let type = (age>=18) ? "adult" : (age>12) ? "young" : "child";
console.log(type);

// though 'ternary' operator has arrived to make programmer's life easier 
// *** IT IS RECOMMENDED TO USE 'TERNARY' OPERATOR JUST FOR ONE OR TWO CONDITIONS otherwise
// the condition will be complex to the coder. Then 'if...else' or 'switch..case' is better


// ternary operator in function

function getBig(a,b){
    a>b?console.log(`${a} is bigger.`):console.log(`${b} is bigger`);
}

getBig(8,10)