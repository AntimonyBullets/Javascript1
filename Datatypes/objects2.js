//Nested objects
const newUser = {
    email: "example@yahoo.com",
    details:{
        id: 44222,
        "final score": 9.01,
        subjects:{
            maths:7.83,
            chemistry:9.8
        }
    }
}

console.log(newUser.details.subjects.maths) //this is how we access the keys of nested object
console.log(newUser.details["final score"]);


let obj1 = {1:'a', 2: 'b'};
let obj2 = {3:'c', 4: 'd'};
let obj3 = {5:'e', 6:'f'};

let obj4 = Object.assign({}, obj1, obj2, obj3);// assign(<target>, <source1>, <source2>, <source3>....)
//In the above assign() method the first parameter is target where all the sources will be added up,so we generally prefer to use {} as target to merge the sources (though it's optional to pass something in <target>). Note that it's still not the most preferred way (using '...' is better)
console.log(obj4);

let obj5 = {...obj2, ...obj3};
console.log(obj5);

console.log(Object.keys(newUser)) //Gives an array of keys that are inside the object which is passed as paramter
console.log(Object.values(newUser)); //Gives an array of values that are inside the objects which is passed as a parameter
console.log(Object.entries(newUser));  //Gives an array of key-value pairs that are inside an object

console.log(newUser.hasOwnProperty("details"))// returns a boolean value to determine whether the object is having the given property or not