const sym = Symbol("xyz");

//Following is an object which is bascially just key-value pairs
const user = {
    Name: "AlphaGod",
    age: 60,
    10: "abc",
    "full name": "AlphaGod 1811",
    [sym]: "ABC" //for the key to be a symbol, we'll have to use square brackets
}

const user1 = new Object();//Another way of defining an object (not too important)

console.log(user.Name)// one way to access the respective value of a certain key in the object (not the best way)
console.log(user["Name"]);// another way to access the respective value a of a certain key (preferred way)
console.log(user["full name"]); //to access the key "full name" we'll have to use square brackets, it isn't possible using '.'
console.log(user[10]);

console.log(user[sym]); //to access the symbol, we'll have to use square brackets

user.new = "This is something new";
user.isLogged = false;
console.log(user);

//Function inside the object
user["<func name>"] = function(){
    console.log(`This is function inside object, where age is ${this.age}`)
}
user.anotherFunc = function(){
    console.log("Nothing to see here..");
}

user["<func name>"]();
user.anotherFunc();

Object.freeze(user);//ensures that no more changes can be made to an object
user.anotherVar = 1000;// This will not be added up to the object since the object is freeezed
console.log(user);

