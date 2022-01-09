const numbers = [0, 1, 6, 4, 7, 8, 9, 5, 3];

const ascending = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const sortedNumbers = numbers.slice().sort(ascending);

console.log(sortedNumbers);
