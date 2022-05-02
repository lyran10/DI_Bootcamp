//Daily challenge

// loop through the array of object and return the first car with the name “Honda”.

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

let getCarHonda = (carInventory) => {
  let honda = inventory.find((ele) => ele.car_make === "Honda")

  return `This is a ${honda.car_make} ${honda.car_model} ${honda.car_year}`
}

console.log(getCarHonda())

//Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
/// the function should return an inventory that is sorted by car_year, ascending.

let sortCarInventoryByYear = (carInventory) =>{
  let year = inventory.sort((a,b) => {
    return a.car_year - b.car_year
  })
  return year
}

console.log(sortCarInventoryByYear())




