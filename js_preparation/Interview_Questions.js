//1. Difference between map and forEach
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
//2. As map returns the new array, we can apply more methods to the end of the map like filter, reduce, etc, known as "chaining". While forEach does not contain these type of features as it does not return anything.


//2. Output based questions based on map,filter and reduce
//Q.1 Take out the names of the students from the array
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 }
];

//i) by using for loop
let names = [];
for (let index = 0; index < students.length; index++) {
    names.push(students[index].name.toUpperCase());
    
} 

//ii) By using map method
const names2 = students.map(student => student.name.toUpperCase());

console.log(names); // Output: ["PIYUSH", "JENNY", "KAUSHAL", "DILPREET"]

//Q.2 Return only those who scored more than 60 marks
const pass = students.filter(stu =>stu.marks>60);
console.log(pass);

//Q.3 More than 60 marks and roll number greater than 16
const twoConditions = students.filter(stu => (stu.marks > 60 && stu.rollNumber > 16))
console.log(twoConditions)

//Q.4 sum of all the marks
const sum = students.reduce((acc,stu)=> acc + stu.marks,0);
console.log(sum);

//Q.5 Return only name of students who scored more than 60 
const twoMethods = students.filter(stu=>stu.marks > 60).map(stu => stu.name)
// console.log(twoMethods)

//Q.6  Return total marks of students with more than 60. After 20 have been added to those who scored less than 60
const threeMethods = students.map((stu)=>{
    if(stu.marks<60){
        stu.marks +=20;
    }
    return stu
}).filter(stu=> stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0)

console.log(threeMethods)