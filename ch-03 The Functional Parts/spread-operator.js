const person = {
    name: 'Uzair',
    age: 23,
    hairColor: 'Brown',
    eyeColor: 'Brown'
}

const jobData = {
    job: 'Developer',
    company: 'ABC Company',
}

const personWithCareerData = {
    ...person,
    ...jobData,
}

console.log(personWithCareerData);

//to update object properties

const updates = {
    name: 'Uzair Ahmed',
}

console.log(person);

const updatedPerson = {
    ...person,
    ...updates,
}

console.log(updatedPerson);

const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);        //using push mutates numbers array which is against FP

const newNumbers = [
    ...numbers,
    6
];

console.log(newNumbers);
