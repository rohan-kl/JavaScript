//Q.1 What is function declaration?
//In JavaScript, a function declaration is a way to define a named function. This function can be invoked by its name later in the code. Function declarations are hoisted, which means they are available in the code before they are defined.
function square1 (num){
    return num*num;
}

//Q.2 What is function expression?
//When you store a function in a variable, then it is called function expression
const square = function (num){
    return num*num;
};

// A function without name is called anonymous function or it can be used a callback function.

//Q.3 What is first class functions?
//Those functions treated like a variable. These can be passed in another function, manipulated, return from those functions.
function square2(num){
    return num*num;
}
function display(fn){
    console.log("Sqaure is "+ fn(4))
}
// display(square);

//Q.4 What is IIFE (Immediately Invoked Function Expression)
// With the help of this, we can directly call the function by putting parenthesis to the whole function.
(function square3(num){
    console.log(num*num)
})(4);

//Q.5 IIFE - O/P based questions
(function(x){
    return (function(y){
        // console.log(x);
    })(2);
})(1); // this gives the output 1.

//Closure: the ability of the functions to access functions and variables that are lexically out of its scope are called closure.

//Q.6 What is Function Scope?
//It is defined as the space where the variable exists.


//Q.7 Function Scope - O/P based question
for(let i = 0;i<5;i++){
    setTimeout(function(){
        // console.log(i);
    },i*1000)
}

// when taking i as a let, it will pring normally as it will create another block scope everytime "for" loop runs, but when we take i as a var, then it will only print 5 because var does not have a block scope

//Q.8 Function Hoisting
//Functions are hoisted completely i.e., if we call the function first and then declare the function, it will run normally and vice-versa..

//Q.9 Function Hoisting - O/P based question
// var x = 21;
var fun = function(){
    // console.log(x)
    // var x = 20;
};
fun(); // Result is undefined because if local scope is present then we will not check the global scope.

//Q.10 Params vs Arguments
// When we call a function, then the values that we pass inside of the function is called arguments.
// When we receive these values in the function, then it is called as params.
function square3(num){ // Params
    console.log(num*num);
}
// square(5); // Arguments

//Q.11 Spread operator vs rest operator
function multiply(...nums){ // rest operator
    // console.log(nums[0]*nums[1]);
};
var arr = [5,6];
multiply(...arr) // spread operator


//Q.12  Params vs Arguments Output based question
// We have to use rest operator atlast of the function params.
/* Code:
    const fn = (a,x,y,...numbers)=>{
    console.log(a,x,numbers);
    }
    var arr= [2,3,4,5,6,7]
    fn(...arr);
    fn(2,3,4,5,6,7); */

//Q.13 What is Callback function?
// A callback function is a function which is passed as an argument in another function, which is then invoked inside the outer function to complete some kind of routine or action.


//Q.14 What is arrow function?  arrow function vs regular function
//1. Syntax 
//2. Implicit return keyword if function is a one liner
//3. Arguments keyword is not present in arrow function.
        //Example of a regular function
        function regularFunction() {
            console.log(arguments);
        }
        
        regularFunction(1, 2, 3);  // Output: [1, 2, 3]

        //Example of arrow function
        const arrowFunction = () => {
            // console.log(arguments);  // Error: arguments is not defined
        };
        
        arrowFunction(1, 2, 3);  // This will throw an error
        
//4. "this" keyword
let user = {
    username: "Roadside Coder",
    //arrow function
    rc1: () => {
        console.log("Subscribe to " + this.username); // 'this' will not work as expected. It will point to the global object. Arrow functions do not have their own this context.
    },
    //regular function
    rc2() {
        console.log("Subscribe to " + this.username); // 'this' will refer to the 'user' object.
    }
};

user.rc1(); // Undefined or incorrect 'this'
user.rc2(); // Correct 'this'

// user.rc1(); likely outputs Subscribe to undefined or throws an error if in strict mode.
// user.rc2(); correctly outputs Subscribe to Roadside Coder.



