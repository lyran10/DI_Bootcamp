// class gif{
//   constructor(input,image){
//         this.input = input
//         this.image = image
//   }

//   static giphy(){
//     let request = new XMLHttpRequest()
//     let word = input[0].value
//     request.open("GET",`https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`,true)

//     request.onload = (e) => {
//       // button = document.createElement("button")
//       // button.classList.remove("d-none")
//       // button.classList.add("d-block")
//       let arr = []
//       p1.innerHTML = ""
//       let requestConvert = JSON.parse(request.responseText)
//       console.log(requestConvert)
//       let obj
//       requestConvert.data.forEach((ele,index) => {
//         obj = new gif(input[0].value,ele[index].images)
//       })
//       console.log(obj)
//       // console.log(obj.image)
//       // this.img = document.createElement("img")
//       // this.img.src = obj.image
//       // button.style.width = "100px"
//       // button.style.height = "50px"
//       // button.innerHTML = "Button"
//       // body.append(this.img)
//       // body.append(button)
//       // console.log(arr)
//     }
    
//     request.send()
    
//     }

    // static remove(){
    //   body.removeChild(this.img)
    //   button.classList.add("d-none")
    // }

// }

// let button
// button.classList.add("remove")
// let btn = document.querySelectorAll(".remove")
let input = document.querySelectorAll("input")
let p1 = document.createElement("p")
let body = document.querySelector("body")


// let request = new XMLHttpRequest()
// let word = "sun"


// request.open("GET",`https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`,true)

// request.onprogress = () => {
//   p1.innerHTML = "Loading..."
//   body.append(p1)
// }

// request.onload = () => {
//   p1.innerHTML = ""
//   let requestConvert = JSON.parse(request.responseText)
//   console.log(requestConvert.data[0].images.downsized_large.url)

// }

// request.send()


// input[1].addEventListener("click",()=>{
//   gif.giphy()
// })

// btn.forEach(ele => {ele.addEventListener("click",() =>{
//   gif.remove()
// })})


