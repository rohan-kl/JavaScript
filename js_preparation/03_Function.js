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
        console.log(x);
    })(2);
})(1); // this gives the output 1.

//Closure: the ability of the functions to access functions and variables that are lexically out of its scope are called closure.

//Q.6 What is Function Scope?
//It is defined as the space where the variable exists.


//Q.7 Function Scope - O/P based question
for(let i = 0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
}

// when taking i as a let, it will pring normally as it will create another block scope everytime "for" loop runs, but when we take i as a var, then it will only print 5 because var does not have a block scope

//Q.8 Function Hoisting