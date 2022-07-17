//Exercise 3

let div = document.querySelector("div");
// chane background color
 div.style.backgroundColor = "blue"
// add padding
div.style.padding = "20px"

let firstchild = document.querySelector("li:first-child")
// not to display the list tag named john
firstchild.style.display = "none"

let lastchild = document.querySelector("li:last-child")
// add border to the lsit tag named pete
lastchild.style.border = "solid"

let body = document.querySelector("li:last-child")
// increase the font size of the whole body
body.style.fontSize = "x-large"
//if the background of the div is blue than send an hello message
if(div.style.backgroundColor === "blue"){
  alert("Hello x and y")
}
