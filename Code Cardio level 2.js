//Code cardio lvl 2 objects

// 1 Below we have a function called objectLooper that will take a number object and loop over it. You need to change the value of each property to 0



var number = {
    age: 30,
    score: 100,
    length: 12,
    year: 2016
};

function objectLooper(number) {
    for(var key in number) {
        number[key] = 0;
    }
  return number;
}



// 2 check each value and if value is greater than 3000000, if true, set it to 0.



var state = {
    utah: 2942902,
    texas: 26956958,
    california: 38802500
};


function stateLooper(arr) {
    for(var key in arr) {

        if(arr[key] > 3000000 ){
          arr[key] = 0;
			}
    }
  return arr;
}

stateLooper(state);




// 3 Loop through the user object and check if values are falsy. Return the falsy values.

var user = {
    name: 'Sally Rally',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'SallyRally801',
    age: 0

};

function cleanUser(obj) {
    for(var key in obj) {
        if(key === false); {
          console.log(key);


        }
    }
}




//4 If the value is falsy remove it. Once all the falsy value are removed return the obj


var user = {
    name: 'Sally Rally',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'SallyRally801',
    age: 0

};

function cleanUser(obj) {
	for(var key in obj){
	if(!obj[key]){
		delete obj[key];
	}
} return obj;
}
cleanUser(user);


//5 Change the value of name to Ryan, change the value of pwHash to 43df90w_h and change the value of username to ryanleeeallred. After you have updated all the values return the new object

var list = {
    name: 'Sally Rally',
    pwHash: 'U+Ldlngx2BYQk',
    username: 'SallyRally801'
};

function personalize(user) {
   for(var key in user){
   	if(key === "name"){
   		user[key] = "Ryan";
   	} if(key === "pwHash"){
   		user[key] = "43df90w_h";
   	} if(key === "username"){
   		user[key] = "ryanleeeallred";
   	}
   } return user;
}

personalize(user);


/// second way to solve number 5
var user = {
    name: 'Sally Rally',
    pwHash: 'U+Ldlngx2BYQk',
    username: 'SallyRally801'
};

function personalize(user) {
   user.name = "Ryan";
   user.pwHash = "43df90w_h";
   user.username = "ryanleeeallred";
   return user;
}

personalize(user);
