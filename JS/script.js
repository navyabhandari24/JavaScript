// const myPromise = new Promise((resolve ,reject)=>{
//     const flag = true
//     if(flag){
//         setTimeout(() => {
//             console.log(2);
//             resolve()
//         },3000)
//     }
//     else{
//         reject()
//     }
// })
// console.log(1);
// myPromise.then(()=>{
//     console.log(3);
// })

// .catch(()=>{
//     console.log("errrrrrr");
// })



const myPromise = new Promise((resolve,reject)=>{
    const flag = false;
    if(flag){
        setTimeout(()=>{
            console.log("Helloooo");
            resolve()
        },3000)
    }
    else{
        reject()
    }
})

console.log("hiiiii");
myPromise.then(()=>{
    console.log("Namaskar");
})

.catch(()=>{
    console.log("Layak nhi ho");
})