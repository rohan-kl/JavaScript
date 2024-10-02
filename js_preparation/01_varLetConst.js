// In this we will talk about var, let and const keywords in the javascript.
// what is shadowing, hoisting,scoping

//1. Variable shadowing or name masking: When the variable in inner scope overwrite the variable of the outer scope.
function test(){
    let a = "hello";
    if(true){
        let a = "hi";
        console.log(a);
    }
    console.log(a);
}
test();

//2. Illegal shadowing: In this, if we try to shadow "var" variable with "let", it will work totally fine, but vice-versa is not possible. that' why it is called illegal shadowing. 

function test2(){
    var a = "hi";
    let b = "hello";
    if(true){
        let a = "welcome";
        // var b  = "not welcome";
        console.log(a)
        console.log(b)
    }
}
test2()

//3. Declaration
// var vs let vs const

//1. We cannot re-declare "let" variable, but with "var" we can do that. 
//2. "const" keyword can only be declared at once and need to be initialize at the moment of declaration.
//3. We can re-initialize the let and var, but const does not allow that.
//4. But we can do like this

let a 
{
    let a;
}


//4. Hoisting: During creation phase js engine moves function declarations and variable to top of the code. 

//i) Before this, the js have creation phase and execution phase. In creation phase, it keeps track of all the variables and functions. In execution phase, line by line code will be executed.

//ii) var variables are obv hoisted let variables are not (in normal sense they are hoisted in temporal dead zone). var does not warn us, but let overcome the limitations of the var.

//iii) Temporal dead zone : a state in which let and const variables specifically are in scope but have not been declared yet.


