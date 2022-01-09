//arrow functions

function myFunction(arg1, arg2) {
    //function body
}

const myOtherFunction = function(arg1, arg2) {
    //fuction body
}

const add = (x, y) => {
    return x + y;
}
//both equivalent
const add = (x, y) => x + y;
add(2, 3);

//for one parameter in function
const double = x => x * 2;
double(2);

//no parameter
const sayHello = () => console.log('Helllo');

// for returning objects
const getPersonData = () => ({      //if paranthesis '()' not used the brackets '{}' look like a function to interpretor
    name: 'John Doe',
    age: 34,
});
