//Following is the way to use function to construct objects (it works as a blueprint)
function User(username, isLoggedIn, loginCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.getUserDetails = function(){
        console.log(`Username: ${this.username}`);
        console.log(`isLoggedIn: ${this.isLoggedIn}`);
        console.log(`loginCount: ${this.loginCount}`);
    }
}

//Using this function's name with 'new' keyword we can call the constructor to create an object based on this blueprint
let x = new User("Roman", true, 11);
let y = new User("Leonid", false, 19);
x.getUserDetails();
y.getUserDetails();
