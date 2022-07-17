let obj = [
  {
    id:0,
    author:"Bruce",
    quote:["liran","vidhi","ankit"]

  },
  {
    id:1,
    author:"silvester",
    quote:["adi","netan","dolly"]

  },
  {
    id:2,
    author:"jim carry",
    quote:["anzal","vip","tennis"]

  }
]

//selectors
let input = document.querySelectorAll("input")
let btn = document.querySelectorAll("button")
let h2 = document.querySelector("h2")
let p = document.querySelectorAll("p")

//variables
let arr = []
let arr2
let num = 0

// for loops

for(i=0;i < obj.length;i++){
  arr.push(obj[i].author)
}

//functions

let random = (arr) => {
 let each = arr.forEach(ele =>{
   if(ele.innerHTML.indexOf(input[0].value) != -1){
    console.log(ele.innerHTML)
    ele.style.display = "block"
   }else{
    ele.style.display = "none"
   }
 })
}

let spaceIncluded = () => {
  p[1].innerHTML = obj[i].quote[num].length
  console.log(obj[i].quote[num].length)
}

let spaceNotIncluded = () => {
  let split =  obj[i].quote[num].split("").filter(ele => ele != " ")
  p[2].innerHTML = split.length
  console.log(split.length)
}

let wordLength = () => {
  let splitWord =  obj[i].quote[num].split(" ").filter(ele => ele != " ")
  p[3].innerHTML = splitWord.length
  console.log(splitWord.length)
}

let like = ()=> {"like" in obj[i] === true?obj[i].like = obj[i].like+1:obj[i].like = 1
  console.log(obj)
}

//event listeners
  input[0].addEventListener("click",function(){
    let div = document.createElement("div")
    let ul = document.createElement("ul")
    div.append(ul)
    let form = document.querySelector("form")
    form.appendChild(div)
  if(document.querySelector("li") === null){
    arr.forEach((ele,index) => {
      div.classList.add("list","d-flex","justify-content-center","position-relative")
      div.style.marginRight = "50px"
      ul.style.background = "white"
      ul.style.width = "182px"
      ul.style.borderRadius = "10px"
      ul.classList.add("d-flex","align-items-start","flex-column")
      let li = document.createElement("li")
      li.style.listStyleType = "none"
      li.innerHTML = obj[index].author
      ul.appendChild(li)
  })}else if(document.querySelectorAll("li").length === document.querySelectorAll("li").length){
      let div1 = document.querySelector(".list")
      div1.remove()
}
    arr2 = [...document.querySelectorAll("li")]
    input[0].addEventListener("keyup",function(){
      random(arr2)
  })

  arr2.forEach(ele => {
    ele.addEventListener("click",function(){
      input[0].value = ele.innerHTML
      div.classList.remove("d-flex")
      div.style.display = "none"
    })


  })
 
  })

  btn[0].addEventListener("click",function(){
    p[1].innerHTML = 0
    p[2].innerHTML = 0
    p[3].innerHTML = 0
    if(num != 0){
    num = num - 1
    p[0].innerHTML = obj[i].quote[num]
    console.log(num)
    }else{
      console.log("no more quotes")
    }
  })

  btn[1].addEventListener("click",function(){
    p[1].innerHTML = 0
    p[2].innerHTML = 0
    p[3].innerHTML = 0
      if(num === 0){  
      num = num + 1
        p[0].innerHTML = obj[i].quote[num]
      }else if(num === 1 && p[0].innerHTML === obj[i].quote[num]){
          num = num + 1
          p[0].innerHTML = obj[i].quote[num]
      }
      console.log(num)
  })

  
  btn[2].addEventListener("click",function(e){
    p[1].innerHTML =
    p[2].innerHTML =
    p[3].innerHTML =
    num = 0
    e.preventDefault()
    arr.forEach((ele,i) => ele ===input[0].value? h2.innerHTML = obj[i].author:console.log("not in the list"))
    for(i=0;i < arr.length;i++){
      if(arr[i] === input[0].value){
        p[0].innerHTML = obj[i].quote[0]
        break
      }
    }
    
  })

btn[3].addEventListener("click",spaceIncluded)
btn[4].addEventListener("click",spaceNotIncluded)
btn[5].addEventListener("click",wordLength)
btn[6].addEventListener("click",like)


console.log(document.querySelectorAll("li"))








