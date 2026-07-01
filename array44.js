// // today i learnabout a Reference type:object,Array & loops in javascript 

// // There are two type of memory in javascript
// //     1.stack
// //         this memory is consume by the primitive data types variable.
// //     2.Heap
// //         -REFEERENCE TYPE consume the heap memory
// //         -to acces the heap memory pointer is required,which was created in stack.
// //     ex:- let arr=[1,2,3,4]
// //         arr->store in stack memory
// //         [1,2,3,4]->store in heap memory.
// //         --variable is reference to the data--

// // 1.Object

// //     it is the collection of key and value pair
// //     Syntax:-
// //         let obj1={
// //             'name':'shivam thosar'
// //             'age':'16'
// //         }
// //         let obj2;
// //         if we do (obj2=obj1) it create shallow copy
// // 2.Array
// //     -array is a collection of items(Number,function,String,Boolean,etc)
// //     -we can create array by using array constructor and array letrl
// //     built in method in array
// //         1.push      ->  it add data at the end of array
// //         2.pop       ->  it remove the element from the end of the array
// //         3.shift     ->  remove leftmost element
// //         4.unshift   ->  add data at most leftmost
// //                         ex:-arr.unshift("22");
// //         5.slice     ->  create a slice of the main array,it exclude the last index
// //         6.splice    ->  it is used to insert element in array
// //                     Syntax:- arr.splice(startIndex,deletecountnumber,value);
// //         7.map       ->  arr.map((number)=>{
// //             //logic;
// //         });

// //         8.filter    ->  it is used to filter the data present in array
// //                     syntax:-arr.filter((number)=>{
// //                         if(number%2==0){
// //                             return true;
// //                         }else{
// //                             return false;
// //                         }
// //                     });
// //         9.Reduce    -> it has a two variable accumulator->initilize by user,current->it take next index of accumulator in  array
// //                     syntax:-arr.Reduce((acc,current)=>{
// //                         return acc+current;
// //                     },0);
// //                     0=initilize  value of accumulator.
// //         10.sort     ->used for to make sortingacending,decending
// //         11.indexof  ->to find the index of value present in array
// //         12find      -=>to find the data in array
// // 2.loops
// //                     1.forEach
// //                         syntax:-
// //                         array.forEach(element => {
// //                             //logic
// //                         });
// //                         work for each single value
                    
// //                     2.forin
// //                     syntax:-
// //                         for (const key in object) {
// //                             if (!Object.hasOwn(object, key)) continue;
                            
// //                             const element = object[key];
                            
                            
// //                         }
// //                         iterate on enumerable property like object

// //                     3.forof
// //                     syntax:-
// //                         for (const element of object) {
                            
// //                         }
// //                         iterate on objectcarray,string,etc


// object
// let obj={
//     name:'shivam',
//     age:'12',
//     height:'170',
//     weight:'58',
//     bioData:function(){
//         console.log("Name:",obj.name);
//         console.log("Age:",obj.age);
//     }
// }

// // obj.bioData();

// //array

// let arr=[9,3,7,1,4,8,9,2,4];
// // console.log(arr);

// //array built in function
// // arr.push(9);
// // console.log(arr);

// // arr.pop();
// // console.log(arr);


// // console.log(arr.slice(2,7));



// // arr.shift();
// // console.log(arr);

// // arr.unshift("shivam");
// // console.log(arr);


// // arr.splice(1,2,"shivam");



// // let ansarr=arr.map((number)=>{
// //     return number*number;
// // });
// // console.log(ansarr);


// // let odd=arr.filter((number)=>{
// //     if(number%2!=0){
// //         return true;
// //     }
// //     else{
// //         return false;
// //     }
// // });
// // console.log(odd);


// // let sum=arr.reduce((acc,curr)=>{
// //     return acc+curr;
// // },0);

// // console.log(sum);


// // arr.sort();
// // console.log(arr);
// console.log(arr);
// // console.log(arr.indexOf(3));

let arr=[1,2,3,4,5,5,6]

//loops
for (let key of arr) {
    console.log(key);
    
    
}

let obj={
    name:'shivam',
    age:'22'
}

for (const key in obj) {    
    console.log(obj[key]);    
}

arr.forEach(element => {
    console.log(element);
});