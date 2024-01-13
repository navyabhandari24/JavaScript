// Singleton object

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regulaUser = {
    email: "sum@gmail.com",
    fullname : {
        userName : {
            firstName : "Navya",
            lastName : "Bhandari"
        }
    }
}

console.log(regulaUser.fullname.userName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);

console.log(Object.keys(tinderUser));