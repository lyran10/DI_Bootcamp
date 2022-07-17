// Exercise 1 : Change The Article

let h1 = document.querySelector("h1")
console.log(h1)

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let last = document.querySelectorAll("p")

last.removeChild(last.lastElementChild)


document.querySelector("h2").addEventListener("click",(event) => {
  event.target.style.background = "red"
})

document.querySelector("h3").addEventListener("click",(event) =>{
  event.target.style.visibility = "hidden"
})

let p1 = document.querySelectorAll("p")

const btn = document.querySelector('button');

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
btn.addEventListener('click',function(){
  p1.forEach((ele,index) =>{
    ele.style.color = "red"
  })
})

//When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1.addEventListener("mouseover",function (event){
  h1.style.fontSize = `${Math.floor(Math.random()*100)}px`
})


