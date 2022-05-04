// Exercise 1

// const person = {
//   name: 'John Doe',
//   age: 25,
//   location: {
//       country: 'Canada',
//       city: 'Vancouver',
//       coordinates: [49.2827, -123.1207]
//   }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// output -  I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207

//Exercise 2

//Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
//For example displayStudentInfo({first: 'Elie', last:'Schoppik'})

// let displayStudentInfo = (studentObject) => {
//   let {first,last} = studentObject
//   return `Your full name is ${first} ${last}`
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}))

//Exercise 3
//Using methods taught in class, turn the users object into an array

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// let array = Object.entries(users)
// let multiplyBy2 = array.map(ele => [ele[0],ele[1]*2])
// console.log(multiplyBy2)


// //Exercise 4

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

// The output will be object becuase by using the keyword new means new object is being created and it is inserting the constructor which was made in the class.

//Exercise 5

//Analyze the options below. Which constructor will successfully extend the Dog class?

// 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// The second example is right because it used the parameter of the parent which has is used in inheritence and also it used the super keyword which gives access to the parent class. 

//Exercise 6

// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// object2 and object3 will change into 4 because they are the copy of object1 and they are stored in the same address.
// object4 will remain 5 because that is an another object that has been made and is stored in a different address.


// class Animal{
//   constructor(name,type,color){
//     this.name = name
//     this.type = type
//     this.color = color

//   }
// }

// class Mamal extends Animal{
//   constructor(name,type,color){
//     super(name,type,color)
//   }

//   sound(s){
//     return `Animal :${this.name} type : ${this.type} color : ${this.color} sound : ${s}`
//   }
  
// }


// let animal = {
//   name: "lion",
//   type: "cat",
//   color:"brown",
// }

// let obj1 = new Mamal(animal.name,animal.type,animal.color)

// console.log(obj1.sound("ROARRRRR"))





















