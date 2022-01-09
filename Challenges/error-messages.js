// const input = {
//     firstName: 'Uzair',
//     lastName: 'Syed',
//     zipCode: 'lkj',
//     state: 'e'
// };
//
// const inputCriteria = {
//     firstName: [
//         value => value.length >= 2
//             ? ''
//             : 'First name must be atleast 2 char long'
//     ],
//     lastName: [
//         value => value.length >= 2
//             ? ''
//             : 'Last name must be atleast 2 char long'
//     ],
//     zipCode: [
//         value => value.length === 5
//             ? ''
//             : 'Zip code must be exactly 5 char long'
//     ],
//     state: [
//         value => value.length === 2
//             ? ''
//             : 'State must be exactly 2 char long'
//     ]
// };
//
// const getErrorMessages = (inputs, criteria) => {
//     return Object.keys(inputs).reduce((acc, fieldName) => [
//         ...acc,
//         ...criteria[fieldName].map(test => test(inputs[fieldName]))     //... applies last
//     ], []).filter(msg => msg !== '');
// };
//
// console.log(input);
// console.log(getErrorMessages(input, inputCriteria));

const input = {
    firstName: 'Uzair',
    lastName: 'Syed',
    zipCode: 'lkj',
    state: 'e'
};

const inputCriteria = {
    firstName:value => value.length >= 2
                ? ''
                : 'First name must be atleast 2 char long'

    ,
    lastName: value => value.length >= 2
                ? ''
                : 'Last name must be atleast 2 char long'

    ,
    zipCode: value => value.length === 5
                ? ''
                : 'Zip code must be exactly 5 char long'

    ,
    state: value => value.length === 2
                ? ''
                : 'State must be exactly 2 char long'

};

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, fieldName) => [
        ...acc,
        criteria[fieldName](inputs[fieldName])     //... applies last
    ], []).filter(msg => msg !== '');
};

console.log(input);
console.log(getErrorMessages(input, inputCriteria));
