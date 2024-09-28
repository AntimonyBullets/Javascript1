const user = {
    username : "julius",
    email : "abc@yahoo.com",

    nothingMessage: function(){
        //console.log(`Nothing to see here, ${username}`) this line will cause error since 'username' is a property of object not a separate variable, we can provide the context of the 'username' property by using 'this' keyword.
        console.log(`Nothing to see here, ${this.username}`); //  By using 'this' keyword we'll be pointing at current context (current object) we are in, i.e. the current value of the property can be accessed. 
        
    }
}

user.nothingMessage();
user.username = "roman";
user.nothingMessage();