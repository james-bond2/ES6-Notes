// Array.map() method: this method returns an array but it doesn't change the main array






// Array.prototype.map()
let num = [2,3,4,5,6,7,8]
let newArr = num.map((item)=>{
    return item*2;
});
console.log(`This is newArr : ${newArr}`)
console.log(`This is num : ${num}`)
