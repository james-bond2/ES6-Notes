/*
* -----------------------------------------------> Destructuring <-----------------------------------------------

* To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your
* sandwich? No, you only take out the items you would like to use on your sandwich.


* Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some
* of the items contained in these.


* Destructuring is to use any Object's property or Array's item in new variables.



Destructuring makes it easy to extract only what is needed.*/


//                                              destructuring Array



// Here is the old way of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];


// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log(car)



// Here is the new way of assigning array items to a variable:

const vehicles1 = ['mustang', 'f-150', 'expedition'];

const [car1, truck1, suv1] = vehicles1;
console.log(truck1)


// though there are two ways to destructure, both have different use-case



// When destructuring arrays, the order that variables are declared is important.

// If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles3 = ['mustang', 'f-150', 'expedition'];

const [car3,, suv3] = vehicles3;
console.log(suv3)

// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);



//                                              destructuring Object

// Here is the old way of using an object inside a function:

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

// Here is the new way of using an object inside a function:
const vehicleOne1 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle1(vehicleOne1);

function myVehicle1({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

// Notice that the object properties do not have to be declared in a specific order.


// We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

const vehicleOne3 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle3(vehicleOne3)

function myVehicle3({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
}


//                                Practicing & learn more about the Destructuring Methods

//              First Destructure Objects

const person1={
    name:'abdullah',
    role:'learner',
    salary:'5k',
    age:22,
    hasDegree:true,
    hasCar:true,
    address:{
        district:{
            name: 'narayangonj',
            union:{
                name: 'bocktaboli',
                village:{
                    name: 'ramnagar'
                }
            }
        }
    }
}

// to assign single variable at one time
const {age} = person1;
console.log(age)

// to assign multiple variables at one time
const {name,role} = person1;
console.log(`This is destructured name : ${name}, and This is destructured role : ${role}.`);

// if you want assign the variable with a new name not with the property name, then set the new variableName after ':'
// try following example

const {role: proffesion} = person1;
console.log(proffesion)

// now let's see with nested object

// simple

const {address:{district:{name:disName}}} = person1
console.log('district name : ',disName)

// more nested

const {address:{district:{union:{village:{name:personVillage}}}}} = person1
console.log('village name : ', personVillage)

/*** sometimes when we fetch data with API it can create problem to load fully or properly, then if we don't set any
default value , it can crash the server / application because of not loading the data properly. Then it will return
 just 'undefined', but not crash the app / server. see the following example. */

const lok = {
    name2:'sujon',
    role: 'dokandar',
    salary: '10k',
    // address: {
    //     district: {
    //         name: 'narayanganj'
    //     }
    // }
}
// const {address:{district:{name2}} = {} } = lok;
// console.log(name2)


//              Now Destructure Array

const rollOfClassTwo = [2,3,4,5,6]

// 1
const [abdullarRoll,amarRoll] = rollOfClassTwo
console.log(abdullarRoll,amarRoll)

// 2
const [,,karjani,abr,asif] = rollOfClassTwo
console.log(karjani,abr,asif)

// destructure with nested Array

const nestedArr = [50,40,56,[10,30,40],35,45];
const [,,,[,yourTaka,hisTaka]] = nestedArr
console.log(`your Taka is : ${yourTaka} , and his Taka is : ${hisTaka}`)