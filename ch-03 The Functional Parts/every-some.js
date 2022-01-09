//some example
const employees = [
    {
        name: 'Uzair',
        salary: 300000,
    },
    {
        name: 'Susan',
        salary: 100000,
    },
    {
        name: 'Mike',
        salary: 200000,
    }
];

console.log(employees.some(employee => employee.salary > 200000));

// every example
const formValues = [
    'Uzair Ahmed',
    'Syed',
    'Indian',
    ''
]

const isNotEmpty = string => !!string;      //!!string returns False if string is empty

console.log(formValues.every(isNotEmpty));
