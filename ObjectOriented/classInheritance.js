class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    logUser(){
        console.log(`Username : ${this.username}, Email : ${this.email}`);
    }
}

//in the following class we have used 'extends' keyword to inherit the properties and methods of 'User' class.
class Profile extends User{
    constructor(username, email,score, tier){
        super(username, email); //super() calls the constructor of superclass and the parameters taken by super() are passed into the superclass's constructor. The child class must always use super() otherwise compiler will throw error.
        this.score = score;
        this.tier = tier;
    }

    Profileview(){
        console.log(`Username : ${this.username}, Score : ${this.score}`);
    }
}

let xyz = new Profile("roman", "roman@mail.abc", 455, "Gold");
let abc = new User("julius", "julius@mail.abc");

xyz.Profileview();
xyz.logUser(); // here we can see the method of the superclass 'User' is accessible on instance of 'Profile'

// instanceof keyword here tells that whether 'xyz' is an instance (object) of 'Profile' class
console.log(xyz instanceof Profile);
console.log(xyz instanceof User); // this line also returns true since the 'Profile' class inherits the 'User' class