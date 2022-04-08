

let playerguess = (user1,user2,user3) => {
  let guess = []

  let userSplit = user1.split("")
  while(guess.length != 10){
  let user2 = prompt("Enter guess")
  guess.push(user2)
    for(let i = 0; i < user1.length;i++){
      if(userSplit[i] === user2){
        user3[i] = user2
        console.log(user3)
        console.log(`guesses till now ${guess}`)
      }else{
      }
    }
  }return user3

}



let player2;
let playTheGame = () => {
let player1 = prompt("Enter a word of minimum 8 letter")
  while(player1.length < 8){
     player1 = prompt("Enter a word of minimum 8 letter")
  }

  let stars = player1.split("").map((ele,index,arr) => arr[index] = "*")

  let playerguess1 = playerguess(player1,player2,stars)
  
  
  
}

console.log(playTheGame())