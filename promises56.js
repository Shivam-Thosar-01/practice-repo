// Promise
//     it is a object representthe eventual failure of the asynchronouus code & its returning CSSMathValue.
//     promise has three phases
//         1.fulfill/resolve
//         2.reject
//         3.pending
//     Syntax:-
//     let promVar=new Promise((resolve,reject)={
//         //asyncronous code
//     });

//     then()
//     it execute when the promise is fulfill
//     Syntax:-
//         promise.then((message)=>{
//             //code
//         });
    
//     catch()
//     it execute when the promise is reject
//     Syntax:-
//         promise.catch((message)=>{
//             //code
//         });

//     finally()
//     it execute both time when the promise is fulfill & reject
//     Syntax:-
//         promise.finally((message)=>{
//             //code
//         });


//     prmise.all();
//     it is resolve when the the all promises are resolve.









function sayMyName(){
    console.log("Shivam Ashok Thosar");
}

let promise=new Promise((resolve,reject)=>{
    setTimeout(sayMyName,5000);
    resolve("promise is resolve");
    
})

// console.log(promise);

promise.then((Message)=>{
    console.log(Message);
}).catch((message)=>{
    console.log(message);
}).finally((message)=>{
    console.log("all ok");
})


// Promise.all();