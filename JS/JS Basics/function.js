function sayname(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("Y");
    console.log("A");
}
//sayname()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const ans = addTwoNumbers(2,5)
//console.log(ans);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Plz enter username");
        return
    }
    return `${username} just logged in`
}
const res = loginUserMessage()
console.log(res);