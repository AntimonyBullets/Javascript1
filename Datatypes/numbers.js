console.log("Primitive number datatype");


// Primitive number datatype
let x = 20;
//Even though 'x' is not an object we can still use methods on it since javascript automatcially converts this into object temporarily when a method is used.
console.log(x.toString())// this will return primitive string type
console.log(x.toFixed(2));// this will return primitive number type


console.log("Number object");

//Number object
const num = new Number(100);
const num1 = new Number(123.45)

//toString() method
//It converts a number into a string
let str = num.toString();
console.log(str);
console.log(typeof str);

//toFixed() method
//It determines how many digits should be there after decimal
console.log(num.toFixed(2));

//toPrecision() method
//It determines how many significant digits must be shown
console.log(num1.toPrecision(4))
console.log(num1.toPrecision(6))
console.log(num1.toPrecision(2));

//toLocaleString() method
//It also converts number to string, following the format as specified in paramter

let n = 25.00000;
console.log(n.toLocaleString("en-IN"))
