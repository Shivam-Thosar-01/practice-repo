// in todays lecture i learn about a loops and string in js 
// type of loops are 
//     1.for loop
//     2.while loop
//     3.do-while loop
//     4.for in
//     5.for each
//     6.for off
// todai i onnly discuss about a first 3 loop and strings
//     1.loops
//         a)for loop 
//         syntax:-
//             for (inilization; condition;Updation) {
//                 //logic
//             }
//         ex:-
//             for (let index = 0; index <=10; index++) {
//                 //logic
//             }
        
//         when first time enter inilize the variable then check the condition if condition is true then it execute the body of loop  after that update the value then again check the condition,
//         if the condition is false then it exit from the loop.

//         b)while
//         syntax:-
//             while (condition) {
//                 //logic
//             }
//         ex:-
//             while (i==10) {
//                 //logic
//             }    

//         here we first initilize the value to variable outside the loop then it check the condition if the condition is true then it execute the body of the loop and then 
//         update the value then check agaoin the conditon if the conditon is false then it exit fronm the loop

//         c)do-while
//         syntax:-
//             do {
//                 //logic
//             } while (condition);

//         ex:-
//             do {
//                 //logic
//             } while (i!=3);

//             in this the very first time do while loop execute the body if the condition is false then incriment the value and check the condition again if 
//             it is true then it execute the body otherwise exit fronm the loop.
//             in first iteration condition is nit checked.

//         *keywords*
//         1.break
//             break is a  this keyword 
//             when the loop reach the break keywors then it exit from the loop even if all itertion is not completed.

//         2.continue
//         continue this is a keyword
//         when loop reach the continue word then it stop the execution of current iteration and execute next iteration.
//         when we are usin the continue keyword update the iteration count before the continue statment .if we not  do this then it goes to the infinite state.

//     2.string

//     string is the set of characters
//     string is represented in the "shivam",'shivam'or `shivam`.
//     operations on string.
//             1.concatinate(+)
//                 it adds the two string.
                //     let first_Name="shivam ";
                //     let last_Name="Thosar";
                //     console.log(first_Name+last_Name);

                //     let full_Name= `${first_Name} ${last_Name}`;
                //     console.log(full_Name);
                // 2.length    ->it is used to find the length of the String
                //     console.log(first_Name.length)
                // 3. (.toUppercase)   ->to make string in uppercase
                //     console.log(last_Name.toUpperCase())
                // 4. (.toLowerCase)   ->to make string in lowercase
                //     console.log(last_Name.toLowerCase())
                // 5. .subString(starting-index)   ->to geet smaller part of big String
                //     console.log(full_Name.substring(5).toUpperCase());
                //     console.log(full_Name.substring(5,10).toUpperCase());   
                //         ->in this iyt does not calculate the last index
                // 6. (.split(value))   ->to spllit the string based on value it does not print the spliting value
                //     let splitvalue=first_Name.split('i')
                //     console.log(splitvalue);
                // 7.(.join(value))   ->join the two string inn between value is given
                //     console.log(splitvalue.join('i'));

let first_Name="shivam ";
let last_Name="Thosar";
console.log(first_Name+last_Name);
let full_Name= `${first_Name} ${last_Name}`;
console.log(full_Name);

 console.log(first_Name.length)
console.log(last_Name.toUpperCase())
console.log(last_Name.toLowerCase())
console.log(full_Name.substring(5).toUpperCase());
console.log(full_Name.substring(5,10).toUpperCase());   
let splitvalue=first_Name.split('i')
console.log(splitvalue);
console.log(splitvalue.join('i'));

//for
    let element;
    let index;
    for (index = 0; index < first_Name.length; index++) {
        element = first_Name[index];
        console.log(element);
        
    }

//while
    index=0;
    while (index <first_Name.length) {
        element = first_Name[index];
        console.log(element);
        index++;
    }

//do-while
index=0;
do {
    console.log(first_Name[index]);
    index++;
} while (index<0);