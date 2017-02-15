// Code cardio lvl 3 objects

// 1 Find and update the email property then return the new email

var n = {
	email: "snow@mail.com",
	laptop: "macbook",

};

function updateEmail(obj, str) {
    for(var key in obj){
    		obj[key] = str;

    }
    return obj.email;
}
updateEmail(n, "nick@mail.com");




// 2 Write a function called isOldEnough that takes a person obj and checks if the person is old enough to enter the club. If they are 21 or older return true else return false. The person's age can be found on the age property/key.

var person = {
	name: "Ellen",
	age: 23
};

var isOldEnough = function(obj){
	if(obj.age >= 21){
		return true;
	} else{
		return false;
	}
};

isOldEnough(club);



// 3 Create a function called addRole that takes in a user object and a string. This string will represent the user's new role in the system (i.e. admin, creator, editor, visitor). Create a new property on the user object called "role" and assign the passed in string to it, then return the updated obj.role. Make sure you only return the obj.role otherwise the test will fail


//pseudo code
//function( obj, str) called addRole
// create key on obj called role
// assign key roll to have the str param
// return updated obj.role. // only return obj.role.
// call function addRole(obj, str);

var user = {
	name: "nick",
};

var addRole = function(obj, str){
	obj.roll = str;
	return obj.roll;
};

addRole(user, "cake");

user;



//4 Write a for in loop that loops the object being passed in and checks if the value of the property is null, undefined or false. If any of these conditions are met then delete that property

var items = {
	aa: false,
	bb: 28,
	cc: "celaya",
	dd: "drink",
	ee: null,
	ff: 0,
	gg: undefined ,

};

function removeFalsy(obj) {
    for(var key in obj){
    	if(!obj[key]){
    		delete obj[key];
    	}
    }
    return obj;
}

removeFalsy(items);

items;



// 5 Create a function called zeroOut that take a user object and then loops over that object and changes all the values to 0. Return the user object at the end.


var user = {
	aa: "food",
	bb: "candy",
	zz: "water"
};

var zeroOut = function(obj){
	for(var key in obj){
		obj[key] = 0;

	} console.log(obj);
	return obj;
};

zeroOut(user);
