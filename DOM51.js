// const { jsx } = require("react/jsx-runtime")

// terminology
//     1.Window Object
//         -it is global object,golbal variable &functions are lie under the window object.DOM
//         -it is created by the browser
//         -window control DOM,BOM and core JS


//     2.DOM (document object model)
//         tags ➡️ token ➡️ node ➡️ from multiple node created ➡️ DOM
//         EX->
//                 html
//               ↙️   ↘️  
//           head        body
//         #acces the element of html in js
//             -it can be acces by ID , CLASS & TAG.
//             can get responnse in single o/p or multiple o/p
//             a.ID    -> document.getElementById('elementid');
//             b.CLASS -> document.getElementsByClassName('elementid');
//             c.TAG   -> document.getElementsByTagName('elementid');
//              for all ID , CLASS & TAG there is a one common method is used called '.queryselector()';
            
//             QUERYSELECTOR( )    -> it only return first object find except all other
//                 a.ID    -> document.querySelector('#elementId');
//                         ex:let sdiv=document.querySelector('#myDiv');
//                 b.CLASS -> document.querySelector('.className');
//                 c.TAG   -> document.querySelector('tagName');

//                 to solve the problem of queryselector() , method is used called .queryselectorAll();
//             queryselectorAll();
//                 a.ID    -> document.querySelectorAll('#elementId');
//                         ex:let sdiv=document.querySelectorAll('#myDiv');
//                 b.CLASS -> document.querySelectorAll('.className');
//                 c.TAG   -> document.querySelectorAll('tagName');
        

//         #Update the Existing HTML
//             1.innerHTML
//             2.outerHTML
//             3.textContent
//             4.innerText

//             1.innerHTML -> used to acces the data present inside the any html tag
//                 syntax:-
//                 1]tag.innerHTML                 ->to get data
//                 2]tag.innerHTML="<p> hii</p>";  ->to set data
//             2.outerHTML


//             3.innerText
//                 -It show acording to the UI
//                 -it show the text with the Enter(\n) but it show '\n' no of Times,the number of times in which content is available
//             4.textContent
//                 -it show data accordin to the code
//                 -with text it also show the enters and tab
        
//         //#add element
//             to add element steeeps are 
//             1.first fetch the element which a side the element you want to add element
//             2.create the new element you want to add
//             3.insert data inside the element
//             4.add element by using the .appendChild()&insertAdjusentElement(para1,para2);

//             Methods
//                 1.createElement()   ->used to create the element
//                 2.textContent()     ->it is used to add the data inside the element
//                 3.appendChild()   -> this add the element at the end of the parent
//                 4.insertAdjusentElement(position,content)   ->it add the new content according to user preference
//                     position value are:-1.beforebegin
//                                         2.beforeend
//                                         3.afterbegning
//                                         4.afterend

//             1.let parent=document.querySelector('parentTag');
//             2.let newChild=document.createElement('h1');
//             3.newChild.textContent="shivam";
//             4.parent.appendChild(newChild);,parent.insertAdjacentElement("beforeend",newChild);
        
//         removal
//             parent .removeChild(child);
//                 it is oppose to the appendChild()
            
//             steps:
//             1.get parent
//             2.cget child
//             3.parent .removeChild(child);




//     3.BOM(Browser Object Model)
//         -it interact with the browser ,except html context
        


// let elementId=document.getElementById("innerdiv");
// console.log(elementId);

// let elementClass=document.getElementsByClassName("main");
// console.log(elementClass);


// let elementTag=document.getElementsByTagName("div");
// console.log(elementTag);

// let elementID2=document.querySelectorAll('.main');
// console.log(elementID2);


// let elementID=document.querySelector('#innerdiv')
// console.log(elementID);

// let elementSpan=document.querySelector('span');
// console.log(elementSpan);



// let parent=document.querySelectorAll('.main');
// let child=document.createElement("h2");
// child.textContent="Tatya";






