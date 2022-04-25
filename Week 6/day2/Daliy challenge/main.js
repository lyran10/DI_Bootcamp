const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
 ];

 //Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

 let usernames = []
 let names = gameInfo.forEach(ele =>{
   let element = ele.username + "!"
   usernames.push(element)

 })

 console.log(usernames)

 //Create an array using forEach that contains the usernames of all players with a score bigger than. Use the ternary operator

let winner = []
 let score = gameInfo.forEach(ele => {ele.score >= 10?winner.push(ele.username): ele.score})

 console.log(winner)

 //Find and display the total score of the users. (Hint: The total score is 71)

let finalScore = 0
 let add = gameInfo.forEach(ele =>{finalScore += ele.score})

 console.log(finalScore)




