// Today i learn aboyt a operators in javascript
// types of operator are 
//     1.arthmetic
//         a)uniary    ->required only one operand
//             1.pre-incriment
//             ex:- ++a,--b
//             2.post-incriment
//             ex:a++,a--
//         b)binary ->required two operand
//             1.add(+)
//             2.subtract(-)
//             3.multiplication(*)
//             4.division(/)
//             5.module(%)
//             6.power(**)->it is ued to power the number ex-2**2=4
//     2.assignment(=)
//     3.comparision operator
//         ex:-  > , < , >= , <= , == ,!= ,=== ,!==

//         strict equality(===) & loose equality(==)

//         1.strict equality   
//             it demonstrate two values have same datatype and value must be same
//         2.loose equality
//             it demonstrate values are same but the datatype are not same
    
//     4.ternery operator
//         Syntax:-
//             condition?statment1:statment2;
//                 if the condition is true then the statment1 prints,if it is not true then it print statment2.
    
//     5.logical operator
//         1.AND(&&) -> it return true when the all condition is true otherwise it return false 
//         2.OR(||) -> it return true if any one condition is true ,when all condition are false then it return false
//         3.NOT (!) -> it oppose the value if valye is true it will negaate it to false or visevrsa.AND

//             working of logical operator with non Boolean value
//                 1.truthy
//                     any thing is not falsy
//                 2.falsy
//                     undefined variable,null,0,false,NaN,' '

//             SHORT CIRCUITING
//                 (false || true || false || false)
//                  if this is condition  it check the first condition if it is false then it check the next condition if it is true then it stop check for next condition.
//      6.Bitwise operator
//         this operator work with the binary bits.
//         1.AND   (&)
//         2.NOT   (~)
//         3.OR    (|)for add
//         4.LEFTSHIFT     (<<)
//         5.RIGHTSHIFT    (>>)
//         6.XOR   (it says if both value are same then output is true)


// conditional
//     1.if-else
//         if(condition){

//         }else{

//         }
//     2.else-if
//         if(condition1){

//         }else-if(condition2){

//         }elseif(conditionN){

//         }else{

//         }
//     3.Nested if else
//         if(condition1){
//             if(condition){

//             }else{

//             }
//         }
//     4.switch
//         switch (key) {
//             case value:
                
//                 break;
        
//             default:
//                 break;
//         }



let a=100;
let b=20;

    // arthmetic operator
        console.log("addition:",a+b);
        console.log("substraction:",a-b);
        console.log("multiplication:",a*b);
        console.log("division:",a/b);
        console.log("modulus:",a%b);
        console.log("power:",a**b);
    //uniary
        console.log("pre-incriment ++a:",++a);
    //comparision   & conditional
        if(10<20){
            console.log("20 is greter than 10");
        }

    //bitwise
        switch(10<20){
            case true:console.log("true");
            break;
        }
    //logocal
        if (10==10&& 20==20) {
            console.log("true ->10==10 and 20==20")
        } else {
            console.log("false")
        }


    //bitwise remaning to do practice


