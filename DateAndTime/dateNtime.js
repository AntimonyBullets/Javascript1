let xDate = new Date();
console.log(xDate);
console.log(xDate.toString());
console.log(xDate.toDateString());
console.log(xDate.toLocaleDateString());
console.log(xDate.toLocaleString());

let yDate = new Date(2024, 7, 15, 3, 30, 15); //Month starts from 0, so 7 = august. Format-> (year,month, date, hours (24-hour format i.e. 16 = 4 PM etc.), minutes, seconds)
console.log(yDate.toLocaleString());
let zDate = new Date("01-11-2024");
console.log(zDate.toString());

let TimeStamp = Date.now(); //time that has passed from January 1 1970 until now (in miliseconds)
console.log(TimeStamp); 
console.log(zDate.getTime()); //time that has passed from January 1 1970 until 'zDate' (in miliseconds)

console.log(Math.floor(Date.now()/1000)); //conversion into seconds

let pDate = new Date();
console.log(pDate.getMonth());
console.log(pDate.getSeconds());

pDate.toLocaleString('default', {
    day: "numeric",
    hour: 'numeric'

})



