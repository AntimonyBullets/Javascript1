let xPromise = new Promise(function (resolve, reject) {
    // Perform an async task (such as Database calls)
    setTimeout(() => {
        console.log("Async task 1 running...")
        resolve(); //it doesn't matter where the resolve() is placed above or below the rest of the code (inside setTimeout), the order of the execution will remain the same, i.e. the task performed in then() would only execute after the rest of the code inside async task setTimeout is executed. The reason (if needed) can be searched on AI or internet by placing resolve() both the ways (above and below) the rest of the code.
    }, 1000);
})
xPromise.then(() => {
    console.log("The task 1 completed successfully");
}) // the callback inside then() will be passed as the first parameter of the function inside Promise ('resolve' in this case). Similarly the callback inside catch() will be passed as the second paramter of the function inside Promise ('reject' in this case).

// There's another way to perform this without storing the instance into a variable

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async tast 2 running...");
        resolve();
    }, 1000);
}).then(() => {
    console.log("The task 2 completed successfully");
})

// Following is the way to pass arguments in the callback function inside then() ('resolve()' in this case)
let yPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 3 is running...");
        resolve({ username: "xyz", email: "example@example.com" }) // calling resolve() with an object passed as an argument.
    }, 1000);
})
yPromise.then(function (user) {
    console.log(user);
    // return user.username; // here it is to be noted that returning a value of this function and expecting that using resolve() we can access the value returned by the callback function in then() would not work since resolve() does not return any value. Again the reason can be searched on AI (if needed). The correct way to access the return value is demonstrated in 'zPromise' later in this code.
});

let zPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        console.log("Async task 4 is running...")
        if (!error) {
            resolve({ id: 3432, profilename: "Zhukov" });
        }
        else {
            reject("ERORR: Something went wrong!");
        }
    }, 1000);
})

zPromise.then((user) => {
    console.log("The task 4 completed successfully.");
    return user.profilename; // the returned value can be accessed in another 'then()' method used after this. And this way the chaining can continue as much as we want.
}).then((profile) => {
    console.log(`The profile name is ${profile}`);
    // the value returned by previous then() method would be passed as first parameter in the current then(). And after the previous then() is finished executing the current then() would execute.
}).catch((msg) => {
    console.log(msg);
}).finally(() => console.log("The promise is either resolved or rejected."))// finally() gets executed regardless of whether the promise is resolved or rejected. But it gets executed only after either of that happens.


let kPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        console.log("Async task 5 is running...")
        if (!error) {
            resolve({ id: 3432, profilename: "Zhukov" });
        }
        else {
            reject("ERORR: Something went wrong!");
        }
    }, 1000);
})

//Following is the way to handle a promise using async-await.
async function consume_kPromise() {
    try{
        const response = await kPromise; // if the promise is resolved, then the value passed in resolve() will be saved in 'response'. Otherwise the error thrown will be catched by catch block.
        console.log(response);
    }
    catch(error){
        console.log(error); //value passed in reject() will be displayed
    }
}

consume_kPromise();

// fetch using 
async function getAllusers() {
    try {
        const response = await fetch("https://api.github.com/users/AntimonyBullets"); // fetch() retrieves the data from the link passed as it's first parameter and it returns a Promise object which can be handled by then()-catch() or async-await.
        const data = await response.json(); // such a task also takes time and needs to be awaited.
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
getAllusers();