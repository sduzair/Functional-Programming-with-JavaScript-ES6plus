const divide = (x, y) => {
    if(y === 0){
        console.log('Cannot divide by zero');
        return null;
    }
    return x / y;
}

//same as

//SINGLE RESPONSIBILITY PRINCIPLE: each piece of code should have one responsibility
//here we seperate the zero value check condition and divide function
const divide2 = (x, y) => x / y;

secondArgumemtNotZero = (func) =>
    (...args)  =>   {       //er6 spread operator to get all the agbuments passed as array
                            //used when the returned function takes arguments
        if(args[1] === 0){
            console.log('Cannot divide by zero');
            return null;
        }
        return func(...args);
    }

const divideSafe = secondArgumemtNotZero(divide);
divideSafe(7, 0);
