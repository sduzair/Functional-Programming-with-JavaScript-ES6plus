const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, e) => {
    return acc + e;
}, 0);

console.log(sum);

//Non-FP alternative to above
var sum2 = 0;
for(var i = 0; i < numbers.length; i++){        //Immutability lost with i
    sum2 = sum2 + numbers[i];       //Immutability lost with sum2
}

console.log(sum2);
