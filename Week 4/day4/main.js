// Exercise 1 week4 day4 (miniproject - Hangman game )


//function to check if player1 wins or player2 wins
let winOrlose = (str1,str2) => {
  if(str1 === str2.join("")){// check if player2 got all the letters
    alert(`Congrats player2 you won. You got all the letters.`)
    return "Congrats player2 you won. You got all the letters."
  }else{// if not got player1 wins
    alert("Congrats player1 you won. player2 could not guess all the letters")
    return "Congrats player1 you won. player2 could not guess all the letters"
  }
}



// player2 function
let player2guess = (user1,user3,user2) =>{
  let guess = []// created an empty array
  while(guess.length != 10){// created a while loop and put a condition until the length of guess is not equal to 10 keep looping

  user2 = prompt(`
you have got ${10-guess.length} chances
guesses till now : ${guess}
Correct ones: ${user3.join(" ")}`)// player2 guesses, it also shows how many chances left, guesses till now and the correct guesses

  if(user2 === ""){// if user return n empty string than send a message to type a letter
    console.log(user3)
    alert("Type a letter")
    console.log(`Type a letter`)
    continue// this is used to break the current loop but continue with the next loop
  }
  if(guess.includes(user2)){// if letter is already in the guess array than send a message to the user that the letter has already been used
    alert(`${user2} already used, not counted`)
    console.log(`${user2} already used, not counted`)
    continue
  
  }if(user2 === null){// if null than ask if he wants to leave the game
    alert("if you leave you lose the game.")
    break
  }

  guess.push(user2)// add the input from the user into the guess array
  
  for(let i=0;i<user1.length;i++){// created a for loop
    if(user1[i] === user2){//this is to compare the letters
      user3[i] = user2// if they are equal than replace the stars with the letters
    }
  }
  
  console.log(user3)// console.log the array with stars
  console.log(`guesses till now - ${guess}`)// console.log the guess array with the guesses of the user
  if(user1 == user3.join("")){// if user got all the letters before 10 chances then stop the loop
    let user4 = user3.join("")
    return user4
}
}
}





// function to play the game
let playTheGame = () => {
  let wannaPlay=confirm("lets start the game")// confirm if he wants to play
let player1
  if(wannaPlay){// if wants to play
  player1 = prompt("Enter a word of minimum 8 letter")// ask a word minimum with 8 letters
  while(player1.length < 8){// if less than 8 letters
      player1 = prompt("Enter a word of minimum 8 letter")// than ask again
  }
}else{// if does not wnat to play send a message good bye
  alert("good bye")
}

//after user gives the word split it and replace every letter with a *
  let stars = player1.split("").map((ele,index,arr) => arr[index] = "*")

  console.log(stars)// console.log the array with stars 

  let player2;
  let player2guesses = player2guess(player1,stars,player2)// check the guess and compare letters

let winnerOrLoser = winOrlose(player1,stars)// check if player1 wins or player2 wins

return winnerOrLoser // return the winner


}

console.log(playTheGame())

