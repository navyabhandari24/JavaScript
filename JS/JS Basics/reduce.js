const my = [1,2,3,4]

const myTotal = my.reduce((acc,curr)=>{
    return acc + curr
},0)

console.log(myTotal)