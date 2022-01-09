const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const combine2and3 = func => console.log(func(2, 3));

combine2and3(add);
combine2and3(sub);
