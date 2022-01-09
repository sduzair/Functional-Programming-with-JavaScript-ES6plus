const add = (x, y, z) => x + y + z;

const addPartial = x => (y, z) => x + y + z;

const add5 = addPartial(5);
const sum = add5(2, 3);
console.log(sum);

//same as

const addPartial2 = x =>
    y =>
        z => add(x, y, z);

const add6 = addPartial2(6);
const add6and7 = add6(7);
const sum2 = add6and7(8);
console.log(sum2);

const sum3 = addPartial2(6)(7)(8);
console.log(sum3);

//alternative using bind
const add5UsingBind = add.bind(null, 5);
console.log('Using bind:' + add5UsingBind(2, 3));
