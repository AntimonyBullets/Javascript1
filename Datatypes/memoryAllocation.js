//Primitive data types
let x = 10;
let y = x; // Since 'x' has primitive datatype, a copy of value of 'x' is stored in 'y' (separate memory allocation for 'y')

y = 5;

console.log(x);
console.log(y);


//Non-primitive data types

let arr = [1,2,3,4,5];
let arr1 = arr; // Since 'arr' has non-primitive datatype, 'arr1' and 'arr' both points to the same memory location 

arr1[3] = 10;

console.log(arr); // index 3 of 'arr' has also become 10, since the change has been made to the same memory location both 'arr' and 'arr1' are pointing at
console.log(arr1);

//The following is to be noted

let abc = [1,2,3,4,5];
let xyz = abc;

xyz = [2,3,5,1]; // Here we're not modifying the array which is being pointed by 'xyz' and 'abc' but rather assigning a new array to 'xyz' which will be alloted a different memory location. So 'xyz' now points to a different memory location.

console.log(abc)
console.log(xyz);
