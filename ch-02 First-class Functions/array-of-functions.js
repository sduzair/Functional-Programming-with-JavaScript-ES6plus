const double = (num) => num * 2;
const subtractOne = (num) => num - 1;
const triple = (num) => num * 3;
const add5 = (num) => num + 5;

const functionsArray = [
    double,
    subtractOne,
    triple,
    add5,
    Math.sqrt,
];

var number = 2;

functionsArray.forEach(func => number = func(number));

console.log(number);
