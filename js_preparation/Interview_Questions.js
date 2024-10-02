// Difference between map and forEach
const arr = [2,3,4,5]
const newArray = arr.map((ar)=>{
    return ar+3;
})
console.log(newArray);

const forEachResult  = arr.forEach((ar,i)=>{
    arr[i] = ar +3;
})
console.log(forEachResult,arr);
//1. Map returns the new array with modifications(if) while forEach does not return anything. We can modify the current array with the help of forEach method.
//2. As map returns the new array, we can apply more methods to the end of the map like filter, reduce, etc. While forEach does not contain these type of features as it does not return anything.
