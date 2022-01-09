const employees = [
    {
        name: 'Uzair',
        age: 23,
        jobTitle: 'Developer',
        salary: 70000
    },
    {
        name: 'John',
        age: 27,
        jobTitle: 'Designer',
        salary: 80000
    },
    {
        name: 'Rohit',
        age: 30,
        jobTitle: 'Developer',
        salary: 100000
    },
    {
        name: 'Monika',
        age: 32,
        jobTitle: 'BA',
        salary: 80000
    },
    {
        name: 'Ajay',
        age: 45,
        jobTitle: 'Developer',
        salary: 250000
    }
];

//filter developers
const developers = employees.filter(employee => employee.jobTitle === 'Developer');
console.log(developers);

//map salaries
const developerSalaries = developers.map(developer => developer.salary);
console.log(developerSalaries);

//reduce to average of developer salaries
const avgDeveloperSalary = developerSalaries.reduce((acc, e) => acc + e, 0) / developerSalaries.length;
console.log(avgDeveloperSalary);

//combining all functions and finding avg salary of non developers
const avgSalaryOfNonDevelpers = employees.filter(employee => employee.jobTitle !== 'Developer').map(nonDeveloper => nonDeveloper.salary).reduce((acc, e, index, array) => {
    if (index == array.length - 1) return (acc + e) / array.length;
    return acc + e;
}, 0);

console.log(employees.filter(employee => employee.jobTitle !== 'Developer').length);
console.log(avgSalaryOfNonDevelpers);
