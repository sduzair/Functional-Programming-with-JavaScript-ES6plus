// const map = (arr, func) => arr.reduce((acc, e) => acc += func(e), []);      //works but not Immutable since acc is being updated

const map = (arr, func) => arr.reduce((acc, e) => [...acc, func(e)], []); 

console.log(map([1, 2, 3], x => x * 2));
