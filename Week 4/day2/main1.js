 //Exercise 1

 let randomNum = (n) => {
   let arr = []
    let num = Math.floor(Math.random()*n)
    console.log(`Random number ${num}`)
    for(i=0;i<= num;i++){
      if(i%2==0){
        arr.push(i)
      }
    }return arr
 }
 console.log(randomNum(50))

//Exercise 2

let capAndLow = (str) =>{
let str1 = str.split("")
let arr = []
  let upper = str1.map((x,i) => {
    if(i%2==0){
      return x.toUpperCase()
    }else{
      return x.toLowerCase()
    }
  })
let lower = str1.map((x,i) => {
  if(i%2!=0){
    return x.toUpperCase()
  }else{
    return x.toLowerCase()
  }
})
arr.push(upper.join(""),lower.join(""))
return arr
}


console.log(capAndLow("asfdasfas"))
