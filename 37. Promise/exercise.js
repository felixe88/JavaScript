function newPromise(){
    return new Promise((resolve, reject) => {
        const number = 15;
        if(number>10){
            resolve (number);
        }else{
            reject (number);
        }
    })
}

newPromise()
    .then((number)=> console.log(`number ${number} is ok`))
    .catch((number)=> console.log(`number ${number} is wrong`))