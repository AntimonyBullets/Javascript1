let xPromise = new Promise(function(resolve,reject){
    // Perform an async task (such as Database calls)
    setTimeout(() => {
        console.log("Async task 1 running...")
        resolve(); //it doesn't matter where the resolve() is placed above or below the rest of the code (inside setTimeout), the order of the execution will remain the same, i.e. the task performed in then() would only execute after the rest of the code inside async task setTimeout is executed. The reason (if needed) can be searched on AI or internet by placing resolve() both the ways (above and below) the rest of the code.
    }, 1000);
})
xPromise.then(()=>{
    console.log("The task completed successfully");
}) // the callback inside then() will be passed as the first parameter of the function inside Promise ('resolve' in this case). Similarly the callback inside catch() will be passed as the second paramter of the function inside Promise ('reject' in this case).

// There's another way to perform this without storing the instance into a variable