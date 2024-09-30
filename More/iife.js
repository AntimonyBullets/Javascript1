//Immediately Invoked Function Expressions (IIFEs)

(function chai(){
    console.log("DB connected!");
})(); // if this semi colon won't be used here, the function given below will given an error

(() =>{
    console.log("No problem!")
})();

