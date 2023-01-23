const isLogged = true;
function firstPromise(isLogged){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isLogged){
                let rand = Math.random();
                resolve(rand)
            }else{
                reject(new Error("Error"))
            }
        }, 500);
    })
}


function secondPromise(rand){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(rand > 0.5){
                resolve({name: "John", age: 24})
            }else{
                reject(new Error("Error"))
            }
        }, 500);
    })
}


firstPromise(isLogged)
    .then((rand)=> secondPromise(rand))
    .then((user) => console.log(user))
    .catch((err) => console.log(err))