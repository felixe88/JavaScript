const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setUser=()=>localStorage.setItem('user',JSON.stringify(user));

let username=localStorage.getItem('user');
console.log(username);

setUser();