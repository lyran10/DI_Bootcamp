//Daily challenge

let form = document.querySelector("form")
let input = [...document.querySelectorAll("input")]

// getting the data and splitting it by removing the & sign
let data = window.location.href.split("&")

// if the ele includes ? then to remove the characters from index 0 to the index of ? then what ever is remaining to split by removing the = sign then by reduce method convert them into an object
let d = data.map((ele,index) => {return ele.includes("?") === true?ele.slice(ele.indexOf("?")+1,ele.length-1):ele}).map(ele => {return ele.split("=")}).reduce((acc,cur) => {return ({...acc,[cur[0]]:cur[1]})},{})

// convert it to json format
let JSONObject = JSON.stringify(d)

console.log(JSONObject)



  // with post method

// form.addEventListener("submit",(e) => {
//   e.preventDefault()
//   localStorage.clear()
//   localStorage.setItem("Name",input[0].value)
//   localStorage.setItem("Surname",input[1].value)
//   let Json = JSON.stringify(localStorage)
//   console.log(Json)

// })