// 1. What is map?
// Map is a method to create a new array from a existing array by applying the function to each of the element present in the first array
// It has three parameters:
//i) Taking the each array element
//ii) Taking starting index
//iii) Finally, taking the main array to traverse

const nums = [1,2,3,4]
const multiply = nums.map((num,i,arr)=>{
    return num*3;
});
// console.log(multiply);

//2. What is filter?
//Filter is a method takes each element in an array and it applies a conditional statment.
const arr2 = [1,2,3,4]
const newArray =arr2.filter((num)=>{
    return num >2;
})
// console.log(newArray)

//3. what is reduce method?
//Unlike other methods, this method reduce the size of the array to one only.
// If there is no initial value, then accumulator takes the first element of the array as initial value.
const nums2 = [1,2,3,4]
const sum = nums2.reduce((acc,curr,i,arr)=> {
    return acc + curr;
},0)
// console.log(sum);

//4. Polyfill for map(): It adds the methods to the currect js file

Array.prototype.myMap = function(cb){
    let temp = [];
    for (let index = 0; index < this.length; index++) {
       temp.push(cb(this[index],index,this));
    }
    return temp;
}

const nums3 = [1,2,3,4]
const multiply3=nums3.myMap((num,i,arr)=>{
    return num*3;
})
// console.log(multiply3)

//5. Polyfill for filter(): It adds the methods to the currect js file

Array.prototype.myMap = function(cb){
    let temp = [];
    for (let index = 0; index < this.length; index++) {
       if(cb(this[index],index,this)) temp.push(this[index]);
    }
    return temp;
}

const nums4 = [1,2,3,4]
const filter=nums3.myMap((num)=>{
    return num>2;
})
// console.log(filter)

//6. Polyfill for reduce(): It adds the methods to the currect js file

Array.prototype.myReduce = function(cb,initialValue){
    var acc = initialValue;
    for (let index = 0; index < this.length; index++) {
       acc = acc?cb(acc,this[index],index,this):this[index];
    }
    return acc;
};

const nums6 = [7,4,3,3]
const reduce=nums6.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
})
console.log(reduce)