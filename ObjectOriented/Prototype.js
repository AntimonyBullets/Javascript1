// a prototype is a mechanism through which objects can inherit properties and methods from other objects (details are there on Discord)

let xyz = "   MACD";

//In order to create a method say 'trueLength' (gives length of string excluding whitespaces at start and end) which works on all instances of a string, we need to add them to 'String.prototype'. Since any method added to 'String' directly would behave as static method and won't work for different instances (the reason is that nstances don’t have a link to the constructor function; they only have a link to the constructor’s prototype.)

String.prototype.trueLength = function(){
    return this.trim().length;
}

console.log(xyz.trueLength());
console.log("   absolute   ".trueLength());


//Prototypal inheritance

//Note that multiple inheritance is not directly possible in javascript (though something similar is possible, you can search that on AI if needed)
const user = {
    username : "abc",
    email: "abc@email.com"
}
const moderator = {
    modName: "xyz"
}
const GameProfile ={
    score : 40,
    tier : "Gold",
    __proto__: user //inherits the properties of user i.e. the 'GameProfile' object is referencing the 'user' object as it's prototype
}

// GameProfile.__proto__ = user (this syntax also works)

// Object.setPrototypeOf(GameProfile, moderator); //another syntax
console.log(GameProfile.username);
console.log(GameProfile.email);

