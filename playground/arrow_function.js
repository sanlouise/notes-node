const square = (x) => {
  let result = x * x;
  return result;
}

var square2 = (x) => x * x

//This works if you have one argument
var square3 = x => x * x

console.log(square(8))
console.log(square2(8))
console.log(square3(8))

//Like this, we can't bind the name to the sayHi method. We can't bind 'this'.
//This would refer to global 'this'.
const user = {
  name: 'Sandra',
  sayHi: () => {
    console.log(`Hi`);
  }
};
user.sayHi();

//This is working as we want!
const user2 = {
  name: 'Sandra',
  sayHi () {
    console.log(`Hi ${this.name}`);
  }
};

user2.sayHi();
