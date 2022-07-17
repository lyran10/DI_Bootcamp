let btn = document.querySelector("#button")
let info = document.querySelector("#info")
let msg = document.createElement("h2")
let loading = document.querySelector("#loading")
let count = 0
let arr = []


class Star_wars{
  constructor(name,height,gender,birthYear,homeWorld){
    this.name = name
    this.height = height
    this.gender = gender
    this.birthYear = birthYear
    this.homeWorld = homeWorld
}

//functions to create the elements
static createElements(ele){
   let keys = Object.keys(ele)// making an array of the object keys

   let values = [this.json.name,this.json.height,this.json.gender,this.json.birthYear,this.json1.name]// making an array of object values

  values.forEach((ele,index) => {// creating p tags and assigning to it the values
    if(count === 0){// if count equals to 0 then only make create the p tags
    let p = document.createElement("p")
    arr.push(p)
     p.innerHTML = `${keys[index]} : ${ele}`
    info.append(p)
    }else{
      arr[index].innerHTML = `${keys[index]} : ${ele}`// if count is more than 0 then just assign new values
    }
  })
  count++// adding count 
}
// fetching the data
static fetchData(){
  let random = Math.floor(Math.random(0)*84)// this will choose any number from 0 to 83
  try {// putting it in a try block
  let xhr= new XMLHttpRequest //creating new request
  xhr.open("GET",`https://swapi.dev/api/people/${random}/`,true)// open request
  xhr.send()// send request
  
  xhr.onload = () => {// this like will be executed after everything is loaded
    if(xhr.status===200){// if status is equal to 200 then it will do whatever is below it
    this.json = JSON.parse(xhr.responseText)
    this.home_world()
    }else{// else it will console.log what is below
      arr.forEach(ele => {ele.innerHTML = "" })// display none all the p tags in the div
        info.append(msg)// append the h2 tag
        msg.innerHTML = `Person not found`// send a msg that the person is not found
        loading.classList.add("d-none")

      console.log("Something went wrong")
    }
  }

  }catch (error) {// if there is any problem in the try block it will come to the catch block
    console.log("error inside fetchData")
    console.log(error)
  }

}
  
// second request
static home_world(){
  try {// putting it in a try block
  let xhr= new XMLHttpRequest//creating new request
  xhr.open("GET",this.json.homeworld,true) // open request
  xhr.send()// send request

  xhr.onreadystatechange = () => {// this is to check on which stage is the request
    if(xhr.readyState === 4){// if it is equal to 4 then do whatever is below
      loading.classList.remove("d-flex")
      loading.classList.add("d-none")
      arr.forEach(ele => {ele.classList.add("d-flex") })
      arr.forEach(ele => {ele.classList.remove("d-none") })
    }
  }
  xhr.onload = () => {// this like will be executed after everything is loaded
    if(xhr.status === 200){// if status is equal to 200 then it will do whatever is below it
    this.json1 = JSON.parse(xhr.responseText)// parse data

    let obj = new Star_wars(this.json.name,this.json.height,this.json.gender,this.json.birth_year,this.json1.name) // creating an istance of the class
    this.createElements(obj)// calling the function by giving an arument the object that has been created
    }else{// if not equal to 200 than send a msg that the person was not found
      arr.forEach(ele => {ele.innerHTML = "" })// display none all the p tags in the div
        info.append(msg)// append the h2 tag
        msg.innerHTML = `Person not found`// send a msg that the person is not found
        loading.classList.add("d-none")

    }
  }
  }catch (error) {// if there is an error console.log the error
    console.log(error)
  }
}
}



btn.addEventListener("click",() => {
  arr.forEach(ele => {ele.classList.add("d-none") })// display none the p tags
  arr.forEach(ele => {ele.classList.remove("d-flex") })// remove display flex
  loading.classList.add("d-flex")// make the loading icon visible
  loading.classList.remove("d-none")// remove display flex
  msg.innerHTML = ""// empty the h2 tag
  Star_wars.fetchData()

})
