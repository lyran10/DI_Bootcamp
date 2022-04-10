// Exercise 1


//change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let id = document.getElementById("navBar")
id.setAttribute("id","socialNetworkNavigation")
console.log(id.getAttribute("id"))

//First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
let li = document.createElement("li")
let a = document.createElement("a")
let text = document.createTextNode("Logout")

let id1 = document.getElementById("socialNetworkNavigation").getElementsByTagName("ul")[0]

id1.appendChild(li)
li.appendChild(a)
a.appendChild(text)
console.log(id1)


// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
let firstchild = id1.firstElementChild.textContent
console.log(firstchild)

let lastchild = id1.lastElementChild.textContent
console.log(lastchild)
//  let addHref = document.getElementById("socialNetworkNavigation").getElementsByTagName("ul")[0].getElementsByTagName("li")[5].getElementsByTagName("a")
//   addHref.setAttribute("href","#")