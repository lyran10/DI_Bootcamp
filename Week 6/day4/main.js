// let menu = [
//   {
//     type : "starter",
//     name : "Houmous with Pita"
//   },
//   {
//     type : "starter",
//     name : "Vegetable Soup with Houmous peas"
//   },
//   {
//     type : "dessert",
//     name : "Chocolate Cake"
//   }
// ]
// Exercise 1

//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let add = (a,b) => a+b

// console.log(add(5,4))

//----------------------------------------------------------------------------------


//Exercise 2
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// (function(){
//   var gram = kg*1000
//   console.log(gram)
// }())


// let convert1 = (function(kg){
//   console.log(kg*1000)
// })(2)

// declaration functions can be hoisted and expressions function not

// let convert2 =((kg) =>{
//   console.log(kg*1000)
// })(20) 
//----------------------------------------------------------------------------------

//Exercise 3

//Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.

// let data = (function(num,name,location,title){
//   console.log(`You will be a ${title} in ${location}, and married to ${name} with ${num} kids.`
//   )
// })(2,"vidhi","mumbai","web developer")

//Exercise 4

// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// let signIn = ((name,pic) => {
//     let container = document.querySelector("#container")
//     let div = document.createElement("div")
//     container.appendChild(div)
//     div.classList.add("d-flex","gap-2")
//     let p = document.createElement("p")
//     let img = document.createElement("img")
//     div.appendChild(p)
//     p.classList.add("mt-2")
//     div.appendChild(img).src = pic
//     img.style.width = "40px"
//     img.style.height = "40px"
//     img.style.borderRadius = "100px"
//     p.innerHTML = name
// })("liran","liran.jpg")





















