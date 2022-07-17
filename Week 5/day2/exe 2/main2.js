//Exercise 2 : Work With Forms

// When the user submits the form (ie. submit event listener)
//get the values of the input tags,
//make sure that they are not empty,
//create an li per input value,
//then append them to a the <ul class="usersAnswer"></ul>, below the form.
document.querySelector("#form").addEventListener("submit",function(event){
  event.preventDefault()
let arr = []
  let fname = document.querySelector("#fname").value

  let lname = document.querySelector("#lname").value

  arr.push(fname,lname)
  let create = document.querySelector(".usersAnswer")
  
   arr.forEach(ele =>{
    let create = document.createElement("li")
    let appendEle = create.innerHTML = " "+ele+" "
    let ul = document.querySelector(".usersAnswer")
    ul.append(appendEle)
   })
})





