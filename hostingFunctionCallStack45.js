// 1.Hosting
//     There are two tye of Hosting

//         It is the process of shifting the declaration of the "function &variable" at top of their scope.
//         a)Function Hosting  ->It only work on plane function ,it move the entire function with body to the top
//         b)Variable Hosting  ->it only work with the var variable ,it move the declaration of the variable to the top.It not move value.

// 2.Function Call Stack 
//     Stack is a data structure which store data in "LIFO" format.
//     1.Why function call is called 'first class citizen'?
//     --->Because it can be 1)assigned to the variable  2)pass as an argument  3)can return the function  4)store funtion in a Array
//     5)function  can used nside Object.


//         dig:                  ↗Lat In First Out
//                         // |        |
//                         // ----------
//                         // | funE() |
//                         // ----------
//                         // | funD() |
//                         // ----------
//                         // | funC() |
//                         // ----------
//                         // | funB() |
//                         // ----------
//                         // | funA() |
//                         // ----------
//                                 ↘
//                               First In Last Out






//Function Hoasting

        // Sample();

        // function Sample(){
        //     console.log("say Hii...")
        // }

        // sayHii();

        // let sayHii=function(){
        //     console.log("Say Hii........")
        // }

//Variable Hosting
        
        // let name="Shivam Thosar";
        // console.log(name);
        // console.log(name);
        // var name="Shivam Thosar";

//Functionn Call Stack

        // function a(){
        //     console.log("it is a function 'a'.");
        //     b();
        // }
        // function f(){
        //     console.log("it is a function 'f'.");
        // }
      
        // function c(){
        //     console.log("it is a function 'c'.");
        //     d();
        // }

        //    function e(){
        //     console.log("it is a function 'e'.");
        //     f();
        // }

        // function b(){
        //     console.log("it is a function 'b'.");
        //     c();
        // }

        //   function d(){
        //     console.log("it is a function 'd'.");
        //     e();
        // }

        
        
        // a();

        // console.log("all function are executed.");

//Function as a Argument

        // let myName=function (work){
        //     console.log("Hi Shivam");
        //     work();
        // }

        // let work=function (){
        //     console.log("What are you doing ?");
        // }

        // myName(work);

//Return Function

        // let myName=function (){
        //     console.log("Hii shivam...");
        //     return function (){
        //         console.log("What are you doing ?");
        //     }
        // }
        
        
        // let copy=myName();
        // copy();

//Store in a Arrya

        // let funArr=[
        //     function(){
        //         console.log("function at index  0 is called. ")
        //     },
        //     function(){
        //         console.log("function at index  1 is called. ")
        //     },
        //     function(){
        //         console.log("function at index  2 is called. ")
        //     },
        //     function(){
        //         console.log("function at index  3 is called. ")
        //     }
        //     ,function(){
        //         console.log("function at index  4 is called. ")
        //     }
        // ];

        // // for (let index = 0; index < funArr.length; index++) {
        // //     console.log(funArr[index]);
            
        // // }

        // console.log(funArr[0]);

        

