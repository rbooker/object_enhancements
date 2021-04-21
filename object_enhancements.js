//Same Keys and Values

/*function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  /* Write an ES2015 Version */
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    };
}

//Computed Property Names

/*var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

/* Write an ES2015 Version */
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods

/*var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/

/* Write an ES2015 Version */
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function
/*const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

// my enhancement: the noise a sheep makes is a "bleat", not a "bleet".

const s = createAnimal("sheep", "bleat", "BAAAAaaaa")
// {species: "sheep", bleat: ƒ}
s.bleet() //"BAAAAaaaa"*/

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}
