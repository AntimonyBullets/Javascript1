// NOTE:- Classes in JavaScript provide a more structured and readable way to define objects and their behavior, but under the hood, they are implemented using the prototype-based mechanism only. It is a later added syntax to comfort the programmers who find it easy to work with classes (mostly coming from object-oriented languages like C++ and Java)

class User{
    //constructor
    constructor(username, email, password){
         this.username = username;
         this.email = email;
         this.password = password;
    }

    //method
    logUserCred(){
        console.log(`${this.username}\n${this.email}\n${this.password}`)
    }

    // Static methods in JavaScript are methods defined on a class itself, not on instances of the class. They are called directly on the class and cannot be called on objects created from the class.
    static logNothing(){
        console.log("Nothing");
        console.log(this.username); // this will result in printing 'undefined' since this method can't be invoked on any particular instance (object) of class and without object there would be no 'username'.
    }
}

let xy = new User("abc", "xyz", "zxcvb");//calling the constructor using 'new' keyword
xy.logUserCred(); //calling the logUserCred() method

// xy.logNothing(); //this gives error since logNothing() is a static method that belongs to the class and not to it's instance

User.logNothing(); //we can call the static method using the class name