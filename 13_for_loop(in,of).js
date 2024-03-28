// for loop, for in, for of


// for loop

// type 1

// for(let i = 0; i<15; i++){
//     console.log(i)
// }

// type 2

// let i;
// for(i = 0; i<10; i++){
//     console.log(i)
// }

// type 3

// let j = 0;
// for(; ; j++){
//     if(j<=5){
//         console.log(j)
//     } else{
//         break;
//     }
// }



// for in

// for..in iterates in objects.


// const obj = {
//     name:'abdullah',
//     role:'learner',
//     salary:'5k'
// }

// for (prop in obj) {
//     console.log(prop)
// }



// for..in iterates in objects. but if you try to iterate for..in loop in a array / string, then it will give each item's index

// let arr = [2,4,3,1,5]
// for(item in arr){
//     console.log(item)
// }


// let str = 'amar sonar bngal ami toma valobashi'
// for(st in str){
//     console.log(st);
// }



// for of


// for of iterates in arrays even string

// let array= ['a','b','c','d']
// for(prop of array){
//     console.log(prop)
// }


// a little try to push items in a empty array
// let string = 'i am a little string.'
// let output = [];
// for (item of string) {
//     output.push(item)
//     console.log(output)
// }