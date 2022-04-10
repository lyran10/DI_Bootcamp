//Exercise 2

//change the name “Pete” to “Richard”.
let classes = document.getElementsByTagName("li")[1].innerHTML = "Richard"

//Change each first name of the two <ul>'s to your name.
let list = document.querySelectorAll("li")

for(i=0;i < list.length;i++){
  if(i === 0){
    list[i].innerHTML = "liran"
  }if(i === 2){
    list[i].innerHTML = "liran"
  }
}

//Delete the name Sarah from the second <ul>.
let remove = document.getElementsByTagName("li")[3]
remove.remove()

//At the end of each <ul> add a <li> that says “Hey students”.
let newEle = document.createElement("li")
let text = document.createTextNode("Hey Students")
let newEle1 = document.createElement("li")
let text1 = document.createTextNode("Hey Students")
console.log(newEle.appendChild(text))
nameChange1.appendChild(newEle.appendChild(text))
nameChange0.appendChild(newEle.appendChild(text1))

//Add the classes university and attendance to the first <ul>.
let ul = document.querySelector("ul")
console.log(ul)
ul.classList.add("student_list","attendence",)

//Add a class called student_list to both of the <ul>'s.
let  boxes = document.querySelectorAll('.list');
for (const box of boxes) {
  box.classList.add('student_list');
}


