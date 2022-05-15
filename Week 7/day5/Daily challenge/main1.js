
// Daily challenge
//created a function named compare and gave 2 para str1 and str2
let compare = (str1,str2) => {
    let split1 = str1.split("").filter(ele => ele != " ")// splitted and remove spaces
    let split2 = str2.split("").filter(ele => ele != " ")//splitted and remove spaces
    if(split1.length != split2.length){// comparing the length. if its not the same return false
      return false
    }

    // used the every method to check if the elements are the same 
    let iterate = split1.every(ele => split2.indexOf(ele) > -1)// used the indexof method to see if split1 elements are same as split2 elements

    return iterate
}

console.log(compare("iranl","liran"))



