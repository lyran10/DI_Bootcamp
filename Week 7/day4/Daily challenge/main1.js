// Daily challenge

class video{
  constructor(uploader,time,title){
      this.title = title
      this.uploader = uploader
      this.time = time
  }
  watch(){
    return `${this.uploader} watched all ${this.time} of ${this.title}`
  }
}

// let array = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]

let array = [
  {
    uploader:"Jay",
    time: 5,
    title:"sacred games"
  },
  {
    uploader:"Dom",
    time: 5,
    title:"Pablo Escobar"
  },
  {
    uploader:"Gabi",
    time: 5,
    title:"Elite"
  },
  {
    uploader:"Carlos",
    time: 5,
    title:"Narcos"
  },
  {
    uploader:"Riyaz",
    time: 5,
    title:"Pursuit of Happiness"
  }
]

let str = []
 let e = array.forEach((ele,index,arr) => {
  let str1 = new video(ele.uploader,ele.time,ele.title)
str.push(str1)
})

console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])
























