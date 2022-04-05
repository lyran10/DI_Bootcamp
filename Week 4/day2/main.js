// Mandatory exercises

// //Exercise 1

// let infoAboutMe = (personName,personAge,PersonFavouriteColor) => {
//   return `My name is ${personName} and i am ${personAge} years old and my favourite color is ${PersonFavouriteColor}.`
// }

// console.log(infoAboutMe("liran",30,"black"))


//Exercise 2

// let calculateTip = () =>{
//   let bill = parseInt(prompt("Bill amount"))

//   if(bill < 50){
//     return bill*20/100
//   }else if(bill >= 50 && bill <= 200){
//     return bill*20/100
//   }else{
//     return bill*10/100
//   }
// }
// console.log(calculateTip())

//Exercise 3

// let isDivisible = (num) => {
//   let sum = 0
//   for(i=0;i<500;i++){
//     if(i%num===0){
//       console.log(i)
//       sum += i
//     }
//   } return sum
// }

// console.log(isDivisible(23))


//Exercise 5

// let changeEnough = (itemprice,amountToChange) =>{
//   let arr1 = []
//   let num
// let multiply = amountToChange.forEach((item,index) =>{
//   switch (index) {
//     case 0:
//      num = 0.25 * item
//      arr1.push(num)
//       break;
//       case 1:
//         num = 0.10 * item
//         arr1.push(num)
//       break;
//       case 2:
//         num = 0.05 * item
//         arr1.push(num)
//       break;
//       case 3:
//         num = 0.01 * item
//         arr1.push(num)
//       break;
  
//     default:
//       break;
//   }
// })
// console.log(arr1)
//   let sum = arr1.reduce((a,b) => a+b)
//   if(sum >= itemprice){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(changeEnough(0.75,[0,0,20,5]))

// Exercise 6

// let hotelCost = () => {
//  let user = prompt("Number of nights")
// while(isNaN(user) | user.length === 0){
//   user = prompt("Enter in numbers")
// }
  
//   return parseInt(user)*140
// }



// let planeRideCost = () => {
//   let user = prompt("Enter destination").toLowerCase()
//   while(!isNaN(user) || user.length === 0)
//   user = prompt("Enter destination").toLowerCase()

//   if(user == "london"){
//     return 183
//   }else if(user == "paris"){
//     return 220
//   }else{
//     return 300
//   }
// }


// let rentalCarCost = () => {
  
//   let user = prompt("Car rental")
//    while(isNaN(user) || user.length === 0){
//    user = prompt("Enter in numbers")
//  }
//  let total = user*40
// if(parseInt(user) > 10){
//   let discount = total * 5 / 100
//    return total-discount
// }else{
//   return total
// }
// }




// let totalVacationCost = () => {
//   return `Total vacation cost ${hotelCost()+planeRideCost()+rentalCarCost()}$`
// }

// console.log(totalVacationCost())

