// ----------------------------------> Tagged Template Literals <-------------------------------------------

// This is just a function that sets before the Template Literal, and can modify the whole string.

/* This is so powerful. because, if you have a single 10 lines Template literal you can modify the whole just using the
 modifying function, or you can use the function in multiple Template Literals */

function modify(string,...value){
    const m = string.reduce((prev,current)=>{
        return prev+current + (value.length?  value.shift() + " (Rah.)" : "")
    } ,"")
    return m
}

let mujahid1 = 'Usama Bin Laden';
let mujahid2 = 'Mollah Umar'
console.log(modify`${mujahid1} and ${mujahid2} are the stars of Islamic Jihad of this century`)


