//Code Cardio Objects

// level 1


// 1 Using dot notation return the firstname

function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
};
  return person.firstname;


}

personName();




// 2 Using bracket notation return the location

function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
};
  return person["location"];



}
personName();




// 3 Using dot notation add a new property called frontpocket with the value equal to compass

var backpack = {};

backpack.frontpocket = "compass";

console.log(backpack);



//4 Using dot notation access the frontpocket property on the backpack object

var backpack = {
    frontpocket: "compass"
};


var backpackFrontpocket = backpack.frontpocket;

console.log(backpackFrontpocket);



// 5 Using bracket notation add a new property (material) to the box object with the value equal to cardboard


var box = {};


box["material"] = "cardboard";

console.log(box);




// 6 Create a variable called herName and assign it the firstname property.

var person = {};

person["firstname"] = "sally";


var herName = person.firstname;

console.log(herName);
