// Move the box from left to right

let id = document.querySelector("#animate")// put the id into a variable

let myMove = () =>{// created a function mymove
  let position = 5 // created a variable and gave it value 5
  let interval = setInterval(function(){// then created set interval function
    position++// as it starts add 1 to position
    id.style.left = position + "px"//then moving the div form left to right by using left attribute and giving it the value of the position

    if(position === 350){// if position is equal to 350 than stop by using clearinterval
      clearInterval(interval)
    }
  },1)
}


