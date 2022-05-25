

// Daily challenge

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });


// let p = Promise.all([promise1,promise2,promise3])

// console.log(p)

//----------------------------------------------------------------------------------

// 2 Daily challenge

// let form = document.querySelector("#submit")
// let input = document.querySelectorAll("input")

// let show = (obj) => {
//   let body = document.querySelector("body")
//   let div = document.createElement("div")
//   let p = document.createElement("p")
//   p.innerHTML = `Sun rise : ${obj.results.sunrise}, Sun set :${obj.results.sunset}, Solar noon: ${obj.results.solar_noon}, Day light: ${obj.results.day_length},`
//   body.append(div)
//   div.append(p)
// }

// let promise1 = async () => {
//   let lat = input[0].value
//   let lon =  input[1].value
//   let dataFetch = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`)
//   let json = await dataFetch.json()
//   show(json)
//   return json
// }

// let promise2 = async () => {
//   let lat = input[2].value
//   let lon =  input[3].value
//   let dataFetch = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`)
//   let json = await dataFetch.json()
//   show(json)
//   return json

// }

// submit.addEventListener("submit",(e) => {
//   e.preventDefault()
//   console.log(Promise.all([promise1(),promise2()].map(ele => {return ele})))


// })




