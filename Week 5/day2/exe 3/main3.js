//Transform The Sentence
let arr = document.querySelectorAll("strong")


//Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto //the paragraph), and the function return_normal() onmouseout (ie. when the mouse //pointer is moved out of the paragraph).
arr.forEach((ele,index,arr) => {
  ele.addEventListener("mouseover",function(event){
    event.target.style.color = "blue"
    console.log("mouse")
  })
ele.addEventListener("mouseout",function(event){
  event.target.style.color = "black"
    console.log("mouseout")
  })
 })

