// DISCLAIMER: private variables as in OOP are avoided in FP as they make the code stateful which is a property of OOP

//here we are making private variables really private
//they can only be accessed by the get functions

const Person = ({name, age, job}) => {
    var _name = name;
    var _age = age;
    var _job = job;
    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setJob: (newJob) => _job = newJob
    };
}

const me = Person({name: 'Uzair', age: 23, job: 'Student'});
console.log(me.getName());
//console.log(me._name); //ERROR as _name is not property of returned object

console.log('Job before:' + me.getJob());
me.setJob('Developer');
console.log('Job After:' + me.getJob());
