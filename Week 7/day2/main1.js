//Exercise 2

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message

let firstName = users.map((ele,index,arr) => "Hello "+arr[index].firstName)

console.log(firstName)

//Using the filter() method, create a new array, containing only the Full Stack Residents.

let FullStackRes = users.filter((ele,index,arr) => arr[index].role === 'Full Stack Resident')

console.log(FullStackRes)

//Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

let lastName = users.filter((ele,index,arr) => arr[index].role === 'Full Stack Resident').map((ele,index,arr) => {return arr[index].lastName})

console.log(lastName)

//----------------------------------------------------------------------------------

//Exercise 3

//Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let combine = epic.reduce((pre,cur) => pre+ " " + cur)

console.log(combine)

//----------------------------------------------------------------------------------

//Exercise 4

//Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter((ele,index,arr) => students[index].isPassed === true).forEach((ele,index,arr) =>console.log(`Good job ${arr[index].name}, you passed the course in "${arr[index].course}"`))

console.log(passed)


let num = [1,2,3,4,5]


let num1 = [...num]
num1.push(6)
console.log(num1)

console.log(num)


