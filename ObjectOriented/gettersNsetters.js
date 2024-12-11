class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    //Getters and setters are special methods in JavaScript classes that allow controlled access to properties of an object. A getter retrieves the value of a property, while a setter updates or modifies it. They are defined in the following way. 
    get username(){
        return this.xyz.toUpperCase();
    } 
    //the name of getter and setter must be the same as the name of property (in this case). Here, if the name of the setter is not same as property 'username', the value initialized into the username during the construction of an object won't be passed into 'value' parameter, therefore 'value' will be equal to 'undefined' (which may lead to unexpected) behaviour)
    set username(value){
        this.xyz = value; //the getter can use this variable (this.xyz) to perform operations on it and return a value. Also note that here we cannot use 'this.username' in place of 'this.xyz', since in that case there will be race condition between the constructor and setter to set the value of 'this.username'.
    }
    //Here since the getter/setter name and the property name is same, the setter is invoked during the object construction and the value that is passed in the first parameter of the constructor would be passed into 'value' and will be saved inside 'this.xyz' (this happens only in case setter and property have same name).
}
//NOTE:- When there is a getter defined, a setter is also needed to be defined and vice-versa. Otherwise error will be thrown.

const newUser = new User("Roman", "#2eer");
console.log(newUser.username);



//Another way to use getters and setters (when the getter/setter name is not same as the property name)
class Gamer{
    constructor(username, password){
        this._username = username
        this._password = password
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
        this._username = value;
    }
    //Here setter is not invoked during the time of construction of object since the property name is not same as setter name. But the setter is invoked each time user explicitly tries to set the value to the 'username' property, the modified value will be passed into 'value' and will then be set into 'this._username'. And after that if user tries to access the value, the user will get the value returned by getter after it performs operation on the modified value.
}

const newGamer = new Gamer("Julius" ,"#12eews"); //setter is not invoked
console.log(newGamer.username); //getter returns the value
newGamer.username = "Akhilesh"; //setter is invoked


//We can also use getters and setters in constructor functions (less imp topic)
function Producer(username, password){
    this._username = username;
    this._password = password;

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase();
        },
        set: function(value){
            this._username = value;
        }
    })
}

const newProducer = new Producer("Vrinda", "@11#");
console.log(newProducer.username);