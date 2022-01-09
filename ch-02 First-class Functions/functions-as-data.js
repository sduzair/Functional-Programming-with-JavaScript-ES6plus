const sayHello = name => console.log('Hello ' + name);

const sayHello2 = sayHello;

sayHello2('Uzair');

//ternary operator usage to dynamically change function definition
const myFunction = true
    ? () => console.log('First option');
    : () => console.log('Second option');
