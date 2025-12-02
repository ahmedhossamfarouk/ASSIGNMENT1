//*************************************************************************************************** */
                                         // assignment//
//Convert the string "123" to a number and add 7. (0.5 Grade)
//• Output Example: 130


// let x= "123";

// let sum= Number(x)+7;

// console.log(sum);

                              //..............................................//

//Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
//• Input Example: 0
//• Output Example: "Invalid"


// const type = function (q) {
//     if (q!=0) {
//          console.log("right");
        
//     }else{
//         console.log("false");
        
//     }
    
// }

// type(0);

                              //..............................................//

//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
//• Output Example:1, 3, 5, 7, 9

// for (let i = 0; i < 11; i++) {
//     if (i%2==0) {
//         continue
//     }else{
//         console.log(i);
        
//     }
    
// }

                              //..............................................//

//4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
//• Input Example: [1, 2, 3, 4, 5]
//• Output Example: [2,4]

// let v=[1, 2, 3, 4, 5];
// for (let i = 0; i < v.length; i++) {
//     if (v[i]%2==0 && i!=0) {
//         console.log(v[i]);
        
//     }
    
// }

                              //..............................................//

//5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
//• Input Example: [1, 2, 3], [4, 5, 6]
//• Output Example: [1, 2, 3, 4, 5, 6]


// let f=[1, 2, 3];
// let p=[4, 5, 6];

// let s=[...f,...p]
// console.log(s);


                              //..............................................//

//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
//• Input Example: 2
//• Output Example: “Monday”

// const l=function (j) {


// switch (j) {
//     case 1:
//         console.log("Saturday");
        
//         break;
//     case 2:
//         console.log("Sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("Tuesday");
//         break;
//     case 5:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thursday");
//         break;
//     case 7:
//         console.log("Friday");
//         break;


// }
// }

// l(1)

                              //..............................................//

//7. Create an array of strings and return their lengths using map method (0.5 Grade)
//• Input: ["a", "ab", "abc"]
//• Output Example: [1, 2, 3]

// let arr = ["a", "ab", "abc"];
// let lengths = arr.map((str) =>{
//     return str.length
// } );
// console.log(lengths);





                              //..............................................//

//8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
//• Input Example: 15
//• Output Example: “Divisible by both”

// let t=function (u) {
//     if (u%3==0 & u%5==0) {
//         console.log("Divisible by both");
        
//     }
// }

// t(15)


                              //..............................................//

//9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
//• Input Example: 5
//• Output Example: 25

// let k=(g)=>{
// g*=g
// return g
// }

// console.log(k(5));


                              //..............................................//

// //10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// //• Input Example: const person = {name: 'John', age: 25}
// //• Output Example: 'John is 25 years old'

// function speach(kiki) {
//     let {name,age}=kiki;
//     console.log(name , "is", age , "years old");
    
// }

// let kiki={
//     name: "John",
//     age: 25
// }
// console.log(speach(kiki));


                              //..............................................//

//11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
//• Input Example: 1, 2, 3, 4, 5
//• Output Example: 15

// function sum(...n) {
//     let s=0;
    
    
//     for (let i = 0; i < n.length; i++) {
        
//         s=s+n[i]
//     }
// console.log(s);

// }

// sum(1,2,3,4,5)



                              //..............................................//

//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
//• Output Example: “Success”


// function x(degree) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (degree>50) {
//                 resolve("success")
//             }else{
//                 reject("not success")
//             }
//         }, 3000);
//     })
    
// }

// let y = async ()=>{
//     let result = await x(55).then((x) =>{
//         return x
//     }).catch((x)=>{
//         console.log(x);
//         return x
//     })
//     console.log(result);
    
// }
// y()


                              //..............................................//


//13. Write a function to find the largest number in an array. (0.5 Grade)
//• Input Example: [1, 3, 7, 2, 4]
//• Output Example: 7

// function qu13(params) {
//     let arr=[1, 3, 7, 2, 4]

// function bignumber(arr) {
//     let {}=arr;
//     let d=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>d) {
//             d=arr[i]
//         }
        
//     }
//     console.log(d);
    
    
// }

// bignumber(arr)
// }

// qu13()


                              //..............................................//

//14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
//• Input Example: name: "John", age: 30}
//• Output Example: ["name", "age"]

// function qu14(params) {
//     let obj={
//     name: "John",
//     age: 30
// }
// function key(p) {
//     return console.log(Object.keys(p));
    
// }
// key(obj)
// }
// qu14()



                              //..............................................//
//15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
//• Input: "The quick brown fox"
//• Output: ["The", "quick", "brown", "fox"]

// function qu15(params) {
//     let squence="The quick brown fox";
// console.log(squence.split(" "));
// }

// qu15()



                              //..............................................//

//1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade) 

//for...of can iterate object, arrays, strings, Maps
//forEach can iterate only arrays becaouse its specific to Array only


                              //..............................................//

//2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade) 

//Hoisting is a JavaScript behavior that moves declarations to the top of their scope, while the Temporal Dead Zone (TDZ) is the period during which let and const variables are in a state where they cannot be accessed, even though they have been hoisted. Hoisting affects var, let, const, and function declarations, but the TDZ specifically applies to let and const variables, creating a block of time where they are not yet initialized and will throw a ReferenceError if accessed. 

//console.log(myVar); // Output: undefined
//var myVar = 10;


//console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
//let myLet = 10;



                              //..............................................//

///3. What are the main differences between == and ===? (0.5 Grade) 

// (==) is comparing between value only
//(===) is comparing between value and type


                              //..............................................//

//4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

// It allows for the controlled execution of code that might throw an error and provides a mechanism to gracefully handle such errors without crashing the entire program.
//try-catch is particularly crucial in asynchronous operations, especially when working with async/await  for the following reasons:

//Preventing Unhandled Promise Rejections
//Centralized Error Handling
//Synchronous-like Error Flow


                              //..............................................//

//5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)

//Type conversion (also sometimes known as type cast)

// To use a value of one type in a context that expects another.

// Nonconverting type cast (sometimes known as type pun)

// A change that does not alter the underlying bits.

//Number("5") + 3 results in 8 because the developer explicitly converts the string to a number

// Coercion

// Process by which a compiler automatically converts a value of one type into a value of another type when that second type is required by the surrounding context.

//"5" + 3 results in "53" because the number is coerced to a string to use the + operator




//********************************************************************************************* */