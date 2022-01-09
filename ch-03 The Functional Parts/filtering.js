//the function in filter returns a boolean value saying whether the item is to be included or not
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(x => x % 2 == 0);

console.log(evenNumbers);

const words = ['hello', 'goodbye', 'the', 'collateral'];

const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords);

const createWordFilter = minLength => word => word.length > minLength;

const filteredWords2 = words.filter(createWordFilter(7));
console.log(filteredWords2);
