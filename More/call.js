function setUsername(username){
    //assume it performs some complex database calls before setting the username
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username); // the main use of the call method is that it can be used to provide the current context to the function we are calling (by passing 'this' as the first argument). Here we are calling the 'setUsername' function by providing it the current context, i.e. the context of 'createUser', so that when 'setUsername' sets the username, the username property must be initiated in the 'createUser' function.
    this.email = email;
    this.password = password;
}

let roman = new createUser("Roman", "roman@gsmail.com", "$3342");
let julius = new createUser("Julius","julius@gsmail.com", "%2223");

console.log(roman, julius) //to verify if the username is correctly being set for the objects created using 'createUser' constructor function.
