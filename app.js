const fs = require('fs');

const peopleData = [];
const genders = ['M', 'F'];
const firstNamesMale = ['Andrew', 'Bob', 'Charles', 'Dylan', 'Eddy', 'Ferdinand', 'George', 'Hugh', 'Ian'];
const firstNamesFemale = ['Anna', 'Brigitte', 'Cloe', 'Daniela', 'Emily', 'Felice', 'Gloria', 'Hannah', 'Indy'];
const lastNames = ['Anderson', 'Bardot', 'Clinton', 'Doe', 'Erikson', 'Frankenstein', 'Gonzales', 'Hilton', 'Immanuel'];

for (let i = 0; i < 20; i++) {
    let data = {
        gender: '',
        firstName: '',
        lastName: '',
        age: '',
    };
    let genderNum = Math.floor((Math.random() * 2));
    data.gender = genders[genderNum];

    let firstNameMaleNum = null;
    let firstNameFemaleNum = null;
    if (genderNum === 0) {
        firstNameMaleNum = Math.floor((Math.random() * 9));
        data.firstName = firstNamesMale[firstNameMaleNum];
    } else {
        firstNameFemaleNum = Math.floor((Math.random() * 9));
        data.firstName = firstNamesFemale[firstNameFemaleNum];
    }

    let lastNameNum = Math.floor((Math.random() * 9));
    data.lastName = lastNames[lastNameNum];

    let age = Math.floor((Math.random() * 60) + 18);
    data.age = age;

    peopleData.push(data);
}

const peopleDataString = JSON.stringify(Object.assign({}, peopleData))


fs.writeFile('people.json', peopleDataString, (err) => {
    if (err) {
        console.log('Something went wrong');
        throw err;
    }
    console.log('File has been successfully generated! Check people.json');
});