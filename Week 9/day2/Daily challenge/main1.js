//Daily challenge

// let makeAllCaps = (arr) => {
//   return new Promise((resolve,reject) => {

//     let string = arr.every(ele => typeof(ele) === "string")
//       if(string === true){
//         resolve(arr)
//       }else{
//         reject(string)
//       }
//   })
// }

// let sortWords = (arr) =>{
//   return new Promise((resolve,reject) => {
//     if(arr.length > 4){
//       resolve(arr.sort())
//     }else{
//       reject(arr)
//     }
//   })
// } 


// makeAllCaps(["banana","apple","grapes","orange","kiwi"]).then((arr) => {
//     let uppercased = arr.map(ele =>{return ele.toUpperCase()})
//     return uppercased
// }).then((uppercased) => {
//   console.log(sortWords(uppercased))
// }).catch(() => {
//   console.log("error")
// })

//----------------------------------------------------------------------------------

// second daily chelleng

// let morse = `{
//   "0": "-----",
//   "1": ".----",
//   "2": "..---",
//   "3": "...--",
//   "4": "....-",
//   "5": ".....",
//   "6": "-....",
//   "7": "--...",
//   "8": "---..",
//   "9": "----.",
//   "a": ".-",
//   "b": "-...",
//   "c": "-.-.",
//   "d": "-..",
//   "e": ".",
//   "f": "..-.",
//   "g": "--.",
//   "h": "....",
//   "i": "..",
//   "j": ".---",
//   "k": "-.-",
//   "l": ".-..",
//   "m": "--",
//   "n": "-.",
//   "o": "---",
//   "p": ".--.",
//   "q": "--.-",
//   "r": ".-.",
//   "s": "...",
//   "t": "-",
//   "u": "..-",
//   "v": "...-",
//   "w": ".--",
//   "x": "-..-",
//   "y": "-.--",
//   "z": "--..",
//   ".": ".-.-.-",
//   ",": "--..--",
//   "?": "..--..",
//   "!": "-.-.--",
//   "-": "-....-",
//   "/": "-..-.",
//   "@": ".--.-.",
//   "(": "-.--.",
//   ")": "-.--.-"
// }`
// let toJs = () => {
//   let json = JSON.parse(morse)
//   return new Promise((resolve,reject) => {
//     if (json.length === 0){
//       reject("error")
//     }else{
//       resolve(json)
//     }
//   })
// }

// let toMorse = (keys) => {
//   return new Promise((resolve,reject) => {
//   let user = prompt("Enter a phrase")
//   let splitWord = user.split("").filter(ele => ele != " ")
//   let objectKeys = Object.keys(keys)
//   let count = 0
//  while(count != splitWord.length){
//     let compare = objectKeys.some((ele) => ele === splitWord[count])
//     count++
//     if(!compare){
//       break
//     }
//    }
//     if(count === splitWord.length){
//       let morsed = splitWord.map(ele => objectKeys.indexOf(ele) != -1?ele =  keys[ele]:ele)
//       return resolve(morsed)
//     }else{
//       return reject("not same")
//     }
// })
// }

// toJs().then((result) => {
//   return result
// }).then((result) => {
//   console.log(toMorse(result))
// }).catch((msg) => {
//   return msg
// })













