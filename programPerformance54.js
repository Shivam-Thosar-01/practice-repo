// const { Fragment } = require("react/jsx-runtime")

//     performance
//     the time taken by program to run 
//     to measure the time taken by program method used called performance.now();it return current time of page

//     reflow &repaint is used to display the things onn screen
//     1.reflow->it is the process of the calculating the CaretPosition,it required the high compitation
//     2.Repaint->it is the process of displaying the conntent pixel by pixel.it required less time than reflow.
    
//     Document Fragment
//     it is light weight document Object
//     it dosent do reflow and repaint when loding directly into the document.




// for (let i = 0; i < 101; i++) {
//     let para=document.createAttribute('p');
//     para.textContent="Shivam "+i;
//     document.body.appendChild("para");     
// }