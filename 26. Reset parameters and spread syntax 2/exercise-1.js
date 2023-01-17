function sum(...val) {
    return val.reduce((a,b)=>a+b);
}

console.log(sum(1, 2, 3, 4, 5,6));