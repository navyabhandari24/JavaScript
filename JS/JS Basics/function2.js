function  calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500));

const user = {
    username : "Navya",
    price : 738
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
handleObject(user)