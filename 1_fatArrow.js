

// The normal function can help creating class-constructor without 'class' keyword. like the following
// example. but arrow function can't do that 

function Student(name,roll,clas){
    this.name = name;
    this.roll = roll;
    this.clas = clas;
}

let firstBoy = new Student('Riyad',1,'ten');
// console.log(firstBoy)

// let dada = 'oikhane tor dadir kobor, dalim gacher tole. tirish bochor bhijiye rekhechi, dui noyoner jole'

// // console.log(dada[6]);
// console.log();