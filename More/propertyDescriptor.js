//Here 'PI' is a property of 'Math' object which has the value 3.141..... which is constant and cannot be overwritten.
console.log(Math.PI);
Math.PI = 5; // we can't overwrite the value of PI, so this line won't have any effect on it's value (this won't throw error either)

console.log(Math.PI);

//The reason why we cannot overwrite the value of "PI" property is that it's property descriptor attribute 'writable' is set to false by default. We can get the property descriptor of a particular property in the following way:-

descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

//We can create our own objects and customize the 'writable', 'enumerable' etc. which are by default set to true.

const newObject = {
    username: "Numex",
    email : "Numex@ggmail.cos",
    rank: 5
}

console.log(Object.getOwnPropertyDescriptor(newObject, "username"))


//Before setting the 'enumerable' to false for 'username' property
console.log("BEFORE:")
for (key in newObject){
    console.log(`${key}:${newObject[key]}`)
}

Object.defineProperty(newObject, 'username', {
    enumerable: false
})

//After setting the 'enumerable' to false for 'username' property
console.log("AFTER:")
for (key in newObject){
    console.log(`${key}:${newObject[key]}`)
}
//Since 'enumerable' for 'username' is set to false the loop does not iterate through the key 'username'. 

//This way we can modify the property descriptor attributes of some property of any object. Note that property descriptor attributes of Math.PI are not modifiable since the attribute 'configurable' is by default set to 'false'.