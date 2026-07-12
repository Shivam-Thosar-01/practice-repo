//Temporal Dead Zone
//line 4&4 are a temporal dead zone
    // console.log("number:",a);
    // console.log("hello");
    // let a=10;

//Variableee Scoping

// 1.Block scope
    // {
    //     let a=10;
    //     console.log(a);
    // }

    // console.log(a); //this line show the error a is not defined in line 17


// 2.global scope
    // let b=10;
    // console.log(b);
    // {
    // console.log(b);    
    // }
    //the variable defined in file outside thee function and block that is treated as a global scoping variable,it is access in every where

// 3.function scope
    // let fun=()=>{
    //     let a=10;
    //     console.log(a);
    // }
    // console.log(a); //this line show the error of the a is not define because we cannot access the varible define inside the function ,is not accessable out side the function


