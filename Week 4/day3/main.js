//Exercise 1
//4 week - 3 day (Mini project - guess the number)



//This function is to check the value weather the user number is valid, if is valid
// then console.log the user number and alos a random number by using random method
let checkvalue = (check) =>{
  if(isNaN(check) || check === ""){ // if is not a number or a string
    alert("Sorry not a number")
    return true
  }else if(check < 1 || check > 10){// if the number is less than 1 or greater than 10 
    alert("Not a good number")
    return true
  }else{// if not the above two then console.log the number and the random number
    console.log(`User number - ${check}`)

    //ceated a variable and named it computer number(random number)
    computerNum = Math.floor(Math.random() * (10 - 0 + 1)) + 0
    console.log(`Computer number - ${computerNum}`)
  }
  }

// function to test both the numbers
  let test = (userNum,computerNum) =>{
    if(userNum == computerNum){
      let testr = alert("You won")// if they are equal
      return "Winner"
    }else if(userNum > computerNum){
      let testr = alert("bigger")// if user number is bigger
      return "user bigger"
  }else if(userNum < computerNum){
    let testr =  alert("smaller")// if user number is smaller
    return "user smaller"
  }
}



// declared a variable
  let computerNum;

// function to play the game
let playTheGame = () =>{
  let wannaPlay = confirm("wanna play")// asking user if he wants to play
  let count = 0

  if(wannaPlay){// if wants to play
    console.log("Only 3 chances are given")// tell how many chances
    
    while(count != 3){ // loop until count is not equal to 3
      let number = prompt("Enter a number between 1 to 10")// ask for a number
      let checkingValue = checkvalue(number)// check the number

      if(checkingValue === true){// if checkingValue is equals to true break but continue the loop
        continue
      }

      let testresult = test(number,computerNum)// compare the numbers

      if(testresult === "Winner"){//if tsetresult equal to winner the break the loop
        console.log(`You won in the ${count+1} chance. You got lucky today.`)
        break
      }else{// if not winner count plus 1
        count +=1
      }
    }

    }else{// if he does not want to play the send a message good bye.
    alert("good bye")
  }
}




