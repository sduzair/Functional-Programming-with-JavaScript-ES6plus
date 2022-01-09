// NOTE: a returned function still has access to the scope from which it was returned

const getSecretNo = () => {
    const secretNo = 23;
    return () => console.log(`The secret number is ${secretNo}`);
}

const secretNo = getSecretNo();
secretNo();

// console.log(`The secret number is ${secretNo}`); //ERROR
