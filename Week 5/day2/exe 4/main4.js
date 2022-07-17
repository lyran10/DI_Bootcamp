//Volume Of A Sphere
let submit = document.querySelector("#submit")

submit.addEventListener("click",function(event){
  event.preventDefault()
  let radius = document.querySelector("#radius").value
  let volume = document.querySelector("#volume").value
  let create = document.createElement("p")
  let appendEle = create.innerHTML = `Volume of a sphere - ${4/3*Math.PI*radius^3}`
  if(radius === null){
    let appendEle = create.innerHTML = `Enter a number`
  }
    console.log(appendEle)
    let body = document.querySelector("body")
    body.append(appendEle)
    
  
})