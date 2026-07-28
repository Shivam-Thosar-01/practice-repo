// To create a closure required fun and its data
//     funnction=lexical scope
//     its data=sorrounding state

//     Closure is a combination of its function and its data



function myName(){
    let name = "Shivam";
    function sayMyName(){
        console.log("My name is:",name);
    }

    return sayMyName
}


let returnFun=myName();
returnFun();