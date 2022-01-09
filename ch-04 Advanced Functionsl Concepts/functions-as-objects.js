const sayHello = () => console.log('Hello World!');

console.log(sayHello.name);     //name of the function

const add = (x, y, z) => x + y + z;
console.log(add.length);        //lenght of a function is the number of arguments

console.log(add.toString());        //prints entire function definition

console.log(add.call(null, 1, 2, 3));       //first argument sends this* value  //not much practical application

console.log(add.apply(null, [1, 2, 3]));        //first argument sends this* value      //not much practical application

const arg = [1, 2, 3];
console.log(add(...arg));       //better es6 way to use spread operator

const add5 = add.bind(null, 5);         //first argument sends this* value
console.log(add5(2, 3));



// *this is not used in FP. In OOP this is used as a means to control internal state
