// data object
const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200',
    like:0
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200',
    like:0
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200',
    like:0
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200',
    like:0
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200',
    like:0
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200',
    like:0
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200',
    like:0
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200',
    like:0
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200',
    like:0
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200',
    like:0
  }
  ];

  // class to store the data
  class Robots{
    constructor(id,name,username,email,image,like){
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.image = image
        this.like = like
    }

    // function to create html elements and to store them in an array
      createElements(){
        let cards = document.querySelector(".cards")
        let div = document.createElement("div")
        div.classList.add("card","d-flex","flex-column","align-items-center","rounded")
        div.style.width ="300px"
        div.style.height ="400px"
        div.style.border = "1px solid black"
        cards.append(div)
        let img = document.createElement("img")
        img.classList.add("rounded-circle","mt-3")
        img.style.border = "1px solid black"
        img.style.width = "250px"
        img.src = this.image
        div.append(img)
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body","mt-2","d-flex","align-items-center","flex-column")
        cardBody.style.border = "1px solid black"
        cardBody.style.width = "102%"
        div.append(cardBody)
        let cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.innerHTML = this.name
        cardBody.append(cardTitle)
        let cardText = document.createElement("p")
        cardText.classList.add("card-text")
        cardText.innerHTML = this.email
        cardBody.append(cardText)
        //-----------------------------------------------------------------------
        // like an dislike section
        // creating html tags for like and dislike 
        let div1 = document.createElement("div")
        this.p1 = document.createElement("p")
        this.p1.classList.add("fa","dislike")
        this.p1.style.cursor = "pointer"
        this.p2 = document.createElement("p")
        this.p2.classList.add("fa","number")
        this.p3 = document.createElement("p")
        this.p3.classList.add("fa","like")
        this.p3.style.cursor = "pointer"
        div1.classList.add("likes","d-flex","gap-5")
        this.p1.innerHTML = "&#xf165"
        this.p2.innerHTML = 0
        this.p3.innerHTML = "&#xf164"
        div1.append(this.p1)
        div1.append(this.p2)
        div1.append(this.p3)
        cardBody.append(div1)
        //-----------------------------------------------------------------------
      }

      //like function
      // if like icon is clicked than add one to the like property and show it in the inner html
      likes(e){
      this.like = this.like + 1 // adding by 1 the like property each time it will be clicked
      number[e].innerHTML = this.like // assigning the innerhtml with the value of the like property
      console.log(number[e].innerHTML,"innerHTML")
      }


 // if dislike icon is clicked than minus one to the like property and show it in the inner html
      dislikes(e){
        if(this.like === 0){ // if like property is equal to 0 than do nothing just console.log("equla to 0")
          console.log("equals 0")
        }else{
        this.like = this.like - 1 // subtracting by 1 the like property each time it will be clicked
        number[e].innerHTML = this.like// assigning the innerhtml with the value of the like property
        console.log(number[e].innerHTML,"innerHTML")
        }
        }


        // while filtering robots if there is no match than it will show this msg that no robot was found
      NoMatch(e){
        let arr = []
        //1-this.card doenst exist.
        //cause you dind't add it while createing the elements.
        //2 this.card.foreach is not possible cause this.card should be an html element and not an array.
        this.card.forEach(ele => {
          if(ele.classList[4] === "d-none"){ // if ele has the class called d-none on the 5th index than push it to the array "arr=[]"
            arr.push(ele.classList[4])
          }
        })
        if(arr.length === 10){// if the lenght of the arr is equal to 10 than show this created element and clear the arr
          h1.style.margin = "auto"
          h1.style.textAlign = "center"
          h1.style.background = "black"
          h1.style.color = "white"
          h1.style.width = "50%"
          body.append(h1)
          h1.innerHTML = "ROBOT NOT FOUND..."
          arr.length = 0
        }else{
          arr.length = 0 // if its not equal to 10 than also clear the arr so that it will not go further than 10
        }
    }
      // function to connect the input and object
      connectObjectAndInput(e){
        // if the input value is inside of any value of the property name than keep it visible and the once which does not have any similarities make them invisible
        if(this.name.toLowerCase().indexOf(input.value.toLowerCase().trim()) != -1)
        {
          h1.innerHTML = "" // make it empty
          this.card[e].classList.remove("d-none")
          this.card[e].classList.add("d-flex")
          console.log("MATCH")
          
        }else{
          h1.innerHTML = ""
          this.card[e].classList.remove("d-flex")
          this.card[e].classList.add("d-none")
          console.log("NO MATCH")
        }
       this.NoMatch()
      }
}

// instance of class
  let robotCard = robots.map(ele =>{
    let currentRobot = new Robots(ele.id,ele.name,ele.username,ele.email,ele.image,ele.like)
    return currentRobot
  })

  // create the elements
  robotCard.forEach(ele => {ele.createElements()})

  // selectors of the created elements
  let card = document.querySelectorAll(".card")
  let like1 = document.querySelectorAll(".like")
  let dislike = document.querySelectorAll(".dislike")
  let number = document.querySelectorAll(".number")
  let input = document.querySelector("input")
  let body = document.querySelector("body")
  let h1 = document.createElement("h1")

  // event listeners
  input.addEventListener("keyup",() => {
    robotCard.forEach((ele,e) => {ele.connectObjectAndInput(e)})
  })

  like1.forEach((ele,e) => {
    ele.addEventListener("click",() => {
      robotCard[e].likes(e)
      console.log(robotCard[e].like)
    })
  })

  dislike.forEach((ele,e) => {
    ele.addEventListener("click",() => {
      robotCard[e].dislikes(e)
    })
  })


  







  









