
// view
let label = document.querySelector("#toggle1")
let h5 = document.querySelector("h5")
let div = document.querySelector(".container")
let input = document.querySelectorAll("input")
let form = document.querySelector("#form")
toggleinput = document.querySelector(".toggle_input")
let msg = document.querySelector(".msg")
let body = document.querySelector("body")
// array to store and manipulate data
let cardTextArray = []
let tempArray = []
let closeHoverArray = []
let cardArray = []
let btnArray = []



// model
class weather{
  constructor(name,lat,lon,country,icon,description,temp){
        this.name = name
        this.lat = lat
        this.lon = lon
        this.country = country
        this.icon = icon
        this.description = description
        this.temp = temp
        
  }
  // function to make the first request
  static request1(){
    let cityName = input[0].value // storing the value in a variable
    input[0].value = ""// after click empty the input value
    let APIKey = "6bc236fa8bd5e7e03f83fd8cea3eac74" // API key for the request
    let xhr = new XMLHttpRequest() //creating new request
    // sending request with the get method so that the server can send back the data which is requested for
    try {
      xhr.open("GET",`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}`,true)
      xhr.send()
    } catch (error) {
      console.log("yes")
    }
    // xhr.open("GET",`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}`,true)
    // after getting the data this will happen
    xhr.onload = () => {
      // if the status of the request is 200 it means that the request is suuccessful
      if(xhr.status === 200){
        this.json = JSON.parse(xhr.responseText) // after getting the data parse it from json data to an object
        this.request2() // then call the next request which is in request2 function
      }else{
        console.log("something went wrong")// if the status is not equal to 200 then console.log something went wrong
      }
    }
    }
  

    // function for the second request
    static request2(){
      let APIKey = "6bc236fa8bd5e7e03f83fd8cea3eac74"// API key
    let xhr = new XMLHttpRequest()
    // using the data from the first request to get the second request again with get method

    try {
      xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${this.json[0].lat}&lon=${this.json[0].lon}&appid=${APIKey}`,true)
      xhr.send()
    } catch (error) {
      let msg = document.querySelector(".msg")
      msg.classList.add("show")
    }

    xhr.onload = () => {
      if(xhr.status===200){
        this.json1 = JSON.parse(xhr.responseText) 

        // creating an instance of an class by using both the data from request one and request two
        this.weatherStatus = new weather(this.json[0].name,this.json[0].lat,this.json[0].lon,this.json[0].country,this.json1.weather[0].icon,this.json1.weather[0].description,this.json1.main.temp)
        
        this.store(this.weatherStatus)
        
        //calling the create card function
        this.createCard()
      }else{
        console.log("request2")
        console.log("something went wrong")
      }

  
      }

    }

    // this function is to create a card and put the information inside it which is collected with  the requests
   static createCard(){
     // creating the card
      let card = document.createElement("div")
      card.style.position = "relative"
      card.classList.add("card","mt-5")
      card.style.width = "300px"
      card.style.height = "400px"
      card.style.background = "#C7C7C7"
      cardArray.push(card)
      div.append(card)

      // button to close card
      let button = document.createElement("button")
       button.style.position = "absolute"
       button.style.left = "93%"
       button.style.border = "0"
       button.style.background = "none"
       button.classList.add("fa")
       button.innerHTML = "&#xf00d"
       card.append(button)

      // image inside the card
      let img = document.createElement("img")
      img.src = `http://openweathermap.org/img/wn/${this.weatherStatus.icon}@2x.png`
      img.style.height = "200px"
      img.style.width = "80%"
      img.style.margin = "auto"
      card.append(img)

      // card-body inside the card
     let cardBody = document.createElement("div")
      cardBody.classList.add("card-body")
      card.append(cardBody)

       // p element to tell the status of the weather
      let divForweatherInWords = document.createElement("div")
      divForweatherInWords.classList.add("d-flex","justify-content-center")
      let weatherInWords = document.createElement("p")
      divForweatherInWords.append(weatherInWords)
      weatherInWords.style.color = "black"
      weatherInWords.style.textAlign = "center"
      weatherInWords.innerHTML = this.weatherStatus.description
      cardBody.append(weatherInWords)

       // card-title inside the card
      let cardTitle = document.createElement("h5")
      cardTitle.innerHTML = `${this.weatherStatus.name}, ${this.weatherStatus.country}`
      cardTitle.style.paddingLeft = "10px"
       cardTitle.style.border = "solid 1px black"
       cardTitle.classList.add("card-title","border-top-0","border-start-0","border-end-0")
     cardBody.append(cardTitle)

      // card-text inside the card
      let degreeSign = "\xB0"
     let cardText = document.createElement("p")
      this.checkIfChecked(toggleinput,cardText,degreeSign)
     cardTextArray.push(cardText)
     tempArray.push(this.weatherStatus.temp)
     this.celsiusAndFahrenheit(toggleinput,cardTextArray,degreeSign)
     cardText.style.fontSize = "4rem"
     cardText.classList.add("card-text","mb-4")
     cardBody.append(cardText)

      // close hover
      let closeHover = document.createElement("p")
      closeHover.classList.add("close","d-none")
      closeHover.innerHTML = "close"
      closeHover.style.position = "absolute"
      closeHover.style.left = "95%"
      closeHover.style.bottom = "97%"
      closeHover.style.background = "white"
      closeHover.style.color = "black"
      closeHover.style.borderRadius = "20%"
      closeHover.style.fontSize = "0.8rem"
      closeHover.style.padding = "5px"
      card.append(closeHover)
      closeHoverArray.push(closeHover)
      this.closingBtn(button,cardArray,closeHover)

    }
    
    // function for the button which is created and appended inside the card as a closing button
    static closingBtn(button,card){
      btnArray.push(button)// push the button into an array
      // used a for each method on the array that it will iterate in each button
      btnArray.forEach((ele,index) => {
        // as any button is clicked which are stored in the array than remove the whole card
          ele.addEventListener("click",() => {
            card[index].remove()
          })
          // when the pointer goes over the button it will remove the d-none class from it and it will be visible
          ele.addEventListener("mouseover",() => {closeHoverArray[index].classList.remove("d-none")})

          // when the pointer goes out of the button it will add the d-none class  and it will disappear
          ele.addEventListener("mouseout",() => {closeHoverArray[index].classList.add("d-none")})
      })

    }
      
    // function to show the temp of the city
    static celsiusAndFahrenheit(random,cardText,degreeSign){
      // user for each method to iterate inside the array(this elements where push in the array inside the createcard method in the card text section)
      tempArray.forEach((ele,index) => {
      // random is the checkbox created into a toggle button by using css
      // used click on the random (checkbox)
      random.addEventListener("click",() => {
        if(random.checked){// if is checked do what is below
          cardText[index].innerHTML = `${Math.floor(ele - 273.15)}${degreeSign}C`
          h5.innerHTML = "Celsius"

      }else{// if not checked do what is below
        cardText[index].innerHTML = `${Math.floor(1.8*(ele-273) + 32)}${degreeSign}F`
        h5.innerHTML = "Fahrenheit"
      }
      })
    })
    }

    // if there is one card already displayed and changed from clesius to fahrenheit
    // then create another card so it is displayed with celsius temp.so when the button is clicked before displaying it will check first if checkbox is checked it will display something if not checked it display something else
    static checkIfChecked(random,cardText,degreeSign){
       if(random.checked){
        cardText.innerHTML = `${Math.floor( this.weatherStatus.temp - 273.15)}${degreeSign}C`
        h5.innerHTML = "Celsius"
      }else{
        cardText.innerHTML = `${Math.floor(Math.floor(1.8*(this.weatherStatus.temp-273) + 32))}${degreeSign}F`
        h5.innerHTML = "Fahrenheit"
      }
    }

    static store(){
      localStorage.setItem("weather",JSON.stringify(this.weatherStatus))
    }

    }




// controller
form.addEventListener("submit",(e) => {
  e.preventDefault()
  weather.request1()
})

msg.addEventListener("click",() => {
  msg.classList.remove("show")
})








