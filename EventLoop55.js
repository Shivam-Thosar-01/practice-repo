// synchronious
//     code execute one line after another at a same time 

// ayschronious
//     code execute randomly means all code will not run at a same time

// blocking
//     blocking happen if any ayschronious code execute the next line need to weight the weighting lines are in blocked stage.
    
// Event Loop
//     1.callStack ->it store the function call in stack format
//     2.Browser   ->if any ayschronious code come in callstack then ot will go to browser
//     3.callback Queue    ->after the time complete of ayschronious code then it will go to callback Queue ,then it will do event loop and the ayschronious code then go to the call stack


console.log("hi");
console.log("hello");
setTimeout(function sayMyName(){
    console.log("SHIVAM");
},5000);
console.log("bye");