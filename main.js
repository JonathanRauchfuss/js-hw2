//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function printAllKeyValuePairs(obj) {
    for (let key in obj) {
        if (key === "shakes") {
            console.log(key + ":");
            let shakesObj = obj[key][0];
            for (let shake in shakesObj) {
                console.log("   " + shake + ": " + shakesObj[shake]);
            }
        } else {
            if (Array.isArray(obj[key])) {
                console.log(key + ": " + obj[key].join(", "));
            } else {
                console.log(key + ": " + obj[key]);
            }
        }
    }
}

printAllKeyValuePairs(person3);




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  

  Person.prototype.printInfo = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  };


  Person.prototype.addAge = function() {
    this.age += 1;
  };
  

  let person1 = new Person('John', 25);
  let person2 = new Person('Alice', 30);
  

  console.log(person1.printInfo());
  console.log(person2.printInfo());
  

  person1.addAge();
  person1.addAge();
  person1.addAge();
  

  console.log(person1.printInfo());

  




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (typeof str !== 'string') {
        reject(new Error('Input is not a string'));
      } else {
        if (str.length > 10) {
          resolve('Big word');
        } else {
          resolve('Small Number');
        }
      }
    });
  }
  
  checkStringLength("This is my coding temple hw!")
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error.message);
    });
  
  checkStringLength("little")
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error.message);
    });
  