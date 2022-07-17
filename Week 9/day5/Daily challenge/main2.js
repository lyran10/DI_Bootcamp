let select = document.querySelectorAll("select")
let input = document.querySelectorAll("input")
let from = document.querySelector("#from")
let to = document.querySelector("#to")
let form = document.querySelector("#form")
let conversion_rate = document.querySelector("#conversion_rate")
let swap = document.querySelector("#swap")
let convert = document.querySelector("#convert")



let data = async () =>{
  let request = await fetch(`https://v6.exchangerate-api.com/v6/${'4b15e8d0eb3326f5e043117c'}/codes`)
  let response = await request.json()
  return response.supported_codes
}

let data2 = async (from,to) =>{
  let request = await fetch(`https://v6.exchangerate-api.com/v6/${'4b15e8d0eb3326f5e043117c'}/pair/${from}/${to}/${input[0].value}`)
  let response = await request.json()
  console.log(response)
  conversion_rate.innerHTML = `Converted rate : ${response.conversion_result}`
  
}


data().then((result) =>{
  result.forEach(ele => {
    let option = document.createElement("option")
    option.setAttribute("value",ele[0])
    option.innerHTML = `(${ele[0]})  ${ele[1]}`
    select[0].append(option)
  })
  result.forEach(ele => {
    let option = document.createElement("option")
    option.setAttribute("value",ele[0])
    option.innerHTML = `(${ele[0]})  ${ele[1]}`
    select[1].append(option)
  })
  return result
}).catch((error) => {
  console.log(error)
  console.log("first")
}).then(() => {
    convert.addEventListener("click",(e) => {
      e.preventDefault()
        data2(from.options[from.selectedIndex].value,to.options[to.selectedIndex].value)
    })
  
  swap.addEventListener("click", (e) => {
      e.preventDefault()
      data2(to.options[to.selectedIndex].value,from.options[from.selectedIndex].value)
    })
}).catch((error) => {
  console.log(error)
  console.log("second")
})
