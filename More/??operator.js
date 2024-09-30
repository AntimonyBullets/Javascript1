let userName = null;
let defaultName = "Guest";

// Using nullish coalescing operator
let displayName = userName ?? defaultName;

console.log(displayName);  // Output: "Guest"
// if the value of 'userName' is either null or undefined, the value at the right side of the operator '??' will be assigned to 'displayName' otherwise the value at the left side of the operator '??' will be assigned to 'displayName'. This is used to handle any disturbance in the execution of the program that may occur due to 'null' or 'undefined' value. A default value in place of 'null' or 'undefined' will be assigned in case the variable has either of these 2 values. 