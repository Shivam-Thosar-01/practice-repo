// i learn about a function in js 
// function is define as a block of code which is used for a specific task .
// there a relinear function,arrow function & expression function.
// there is a keyword called 'return ' used to return value to the caller oof the function ,code or logic writtenn after the return are not executed it is ignored.
//  1.plain function
// syntax:-
//     function name(params) {
//         //logic
//     }

// 2.expression function
// syntax:-
//     let add=function(a,b){
//         return a+b;
//     }

// 3.arrow function
// syntax:-
//     let mul=(a,b)=>{
//         return a*b;
//     }

// imp -> before usin function you need to declare it ,then define it amd for use you need to call it.
// 1.define    ->
// funnction add(){
//     logic
// }

// 2.call function
// add();


//plain function
function add(a,b) {
    return a+b;
}

let addition=add(5,7);
console.log("addition:",addition);


//expression function ->in this using const is a best way
const multiplication=function name(x,y) {
    return x*y;
}
console.log("multiplication:",multiplication(9,9));

//arrow function
const div=(a,b)=>{
    return a/b;
}
console.log('division is :',div(50,5));