// Execise 1

// #1
function q1() {
  var a = 5;
  if(a > 1) {
      a = 3;
  }
  alert(a);
}

//q1()

// it will return 3 because in the function first a is given the value 5 than in the statement the condition is given if a is greater than 1 than reassign 3 to the variable a.
//----------------------------------------------------------------------------------

// #2

var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// q22()
// q2()
// q22()

// first when q22 is called it will alert 0 then after calling q2 a is reassigned 5 then when q22 is called again it will alert 5.
//----------------------------------------------------------------------------------


//#3
function q3() {
  window.a = "hello";
}


function q32() {
  alert(a);
}

// q3()
// q32()

// by using window the variable has been declared at a global scope. so it can be used in any js code.

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

// q4()

// declaring a variable twice with same name can be done with var. It cannot be declared with both let and const.

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// js reads from top to bottom so in this first it declared variable a and gave it  value 5 then if the statement is true declare variable a again (which can be done with var) and assign it value 5. So in the statement it alert 5 and out side the statement also.

//---------------------------------------------------------------------------------

//Execise 2

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


function winBattle(){
  return true;
}

let experiencePoints = winBattle() === true? 10: 1

// console.log(experiencePoints)

//----------------------------------------------------------------------------------


//Execise 3

//Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator

let isString = str => typeof(str) === "string"?true:false

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

//----------------------------------------------------------------------------------

// Exercise 4

//Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

let colors = ["Green", "Blue", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let change = () =>{
  let m = colors.map((ele,index) =>`#${index+1} choice is ${ele}`)

  let e = colors.forEach(ele => ele === "Violet"?console.log("Yeah"):console.log("No...."))

  return m
}
// console.log(change())

//----------------------------------------------------------------------------------

// Exercise 5

//Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

let ordinal = ["nd","rd","st","th"];
let th = ordinal.indexOf("th")
let st = ordinal.indexOf("st")
let nd = ordinal.indexOf("nd")
let rd = ordinal.indexOf("rd")

colors.forEach((ele,index) => 
index === 0 ? console.log(`#${index+1}${ordinal[st]} choice is ${ele}`)
:index === 1? console.log(`#${index+1}${ordinal[nd]} choice is ${ele}`)
:index === 2?console.log(`#${index+1}${ordinal[rd]} choice is ${ele}`)
:index >= 3?console.log(`#${index+1}${ordinal[th]} choice is ${ele}`):ele)

//--------------------------------------------------------------------------------


// i+1 {i < 3?ordinal[i+1]:ordinal[0]}


let obj1 = 
 