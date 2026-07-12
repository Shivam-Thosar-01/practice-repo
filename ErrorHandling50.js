//Error Handling
    // 1.Compile Time Error
    // 2.Run Time Error

    // syntax:-
    // try{
    //     //the code which probably contain error
    // }catch(error){
    //     //code to handle the error occure in try block
    // }finally{
    //     //this block execute every time when the error happen or not happen
    // }


// let age=12;

// if(age>=18) {
//     console.log("You can vote now....")
// } else {
//     throw new Error("Beta pehle tu 18 ka hoja fir jana vote karne");
// }

try{
    console.log("My name is :",name);
}catch(error){
    console.log("this error happen:",error)
}finally{
    console.log("all done");
}

