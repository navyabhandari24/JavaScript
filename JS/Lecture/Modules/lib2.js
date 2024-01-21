console.log("Inside thr lib 2");

function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

// console.log(sum(20,30));
// console.log(sub(20,10));

module.exports={
    sum:sum,
    sub:sub
}