let button1 = document.querySelector("button")
let inputs = document.querySelectorAll("input")
let strong = document.querySelectorAll("strong")

strong.forEach((ele) =>{
  ele.style.visibility = "hidden"
  ele.style.textDecoration = "underline"
})

button1.addEventListener("click",function(event){
  event.preventDefault()

for(let i=0; i < inputs.length;i++){
  let id = inputs[i]
  console.log(id.value)
  for(let j=0;j < strong.length;j++){
    if(id.getAttribute("id") === strong[j].innerHTML){
      strong[j].innerHTML = " "+id.value+" "
      strong[j].style.visibility = "visible"
    }
  }
  }
  })

  // let shuffle = document.querySelector("#shuffle")

  // shuffle.addEventListener("click",function(){
  //   let number = Math.floor(Math.random()*2)

  //   if(number === 0){
  //     let p = document.querySelector("p")
  //     p.innerHTML = `Today, my fabulous camp group went to a (an)
  //     ____________ (adjective) amusement park. It was a
  //     fun park with lots of cool ____________ (plural noun)
  //     and enjoyable play structures. When we got there, my
  //     kind counselor shouted loudly, Everybody off the
  //     ____________ (noun).`
  //   }

  // })







//   Today, my fabulous camp group went to a (an)
// ____________ (adjective) amusement park. It was a
// fun park with lots of cool ____________ (plural noun)
// and enjoyable play structures. When we got there, my
// kind counselor shouted loudly, "Everybody off the
// ____________ (noun).











