function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    mul=value*number;
    console.log(mul);
  }
  return inner;
}

multiplyByTwo(4)();

