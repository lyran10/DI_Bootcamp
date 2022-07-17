//Exercise 1

//Create a form like the one above. The form should contain three inputs:
//a small text input asking for a name,
//a larger textarea input to write a message,
//a submit input (“Send”)

//When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
//Where will the sent data appear?

// Answer -  it will appear in the URL

//----------------------------------------------------------------------------------

//Exercise 2

//Use the same form structure as Exercise 1.
//When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

// Answer -  to see where it appears you have to go to inspect than network tab in the header section

//----------------------------------------------------------------------------------


let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

//Convert this JS object into a JSON object. What happens to the nested objects ?

// Answer - the nested objects are also converted into a json object 

//-----------------------------------------------------------------------------------

//Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.

let pretty = JSON.stringify(marioGame,null,2)

console.log(pretty)