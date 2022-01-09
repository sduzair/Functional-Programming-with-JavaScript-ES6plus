//example 1

const helloPrinter = () => () => console.log('Hello');
h = helloPrinter();
h();

//same as

const helloPrinter2 = function () {
    return () => console.log('Hello');
}
h2 = helloPrinter2();
h2();

//example 2

const double = (x) => x * 2;
const triple = (x) => x * 3;
const quadruple = (x) => x * 4;

//equivalent toArray()

const createMultiplier = (y) => (x) => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);
