// function chai(){
//     let username = "Navya"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Navya"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "Navya"
//     console.log(this.username);
// }

// chai()

// const addTwo = (n1, n2) => {
//     return n1+n2
// }

//const addTwo = (n1, n2) => n1+n2

//const addTwo = (n1, n2) => (n1+n2)

const addTwo = (n1, n2) => ({username:"Navya"})
console.log(addTwo(2,6));
