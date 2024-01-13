const mySym  = Symbol("key1")

const user = {
    name: "Navya",
    "full name" : "Navya Bhandari",
    [mySym] : "123",
    age : 20,
    location: "Nagda",
    email: "navya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Sunday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

//Object.freeze(user)
//user.name = "AJK"
//console.log(user);

user.greeting = function(){
    console.log("Namaste");
}
user.greetingTwo = function(){
    console.log(`Namaste ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());