// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// // for each doesn't return a value
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>4) // will run

// const newNums = myNums.filter( (num) => {
//     num>4                                   //will not run
// })

// const newNums = myNums.filter( (num) => {
//     return num>4                             //will run
// })
console.log(newNums);
