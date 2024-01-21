// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise Completed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2 is completed');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Promise 2 Completed');
// })

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Navya", email:"navya@abc.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Chai", email:"chai@abc.com"})
        }
        else{
            reject('ERRORRR')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>console.log('Promise is resolved or rejected'))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaSript", password:"123"})
        }
        else{
            reject('JS ERRORRR')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()