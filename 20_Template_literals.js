// Template Literals

/* template literals gives flexibility to write strings. so however be string into the template literal, it will be the
 exact same / and unchanged except the variables when it will be used , like the following example @@ */

// example @@

let tmLiteral = `this is 
    an template 
            literal 
            `
console.log(tmLiteral)          // it will be the exact string with line breaks, and tabs. Because it is template string

// this is used for strings
let a = 'Jisan';
let b = 'Ali Akbar';
// now if I want to add the variables in any use case, I will have to use the '+' operator. like the following

console.log('I love ' + a +" and "+ b)

// But if I use template literal to the string, that will be easier
// after using template literals
console.log(`I love ${a} and ${b} as they are my bloods part.`)