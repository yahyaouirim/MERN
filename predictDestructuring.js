const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // output=> Tesla
console.log(otherRandomCar) // output=> Mercedes


//Problem2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // output=> undefined name
console.log(otherName); // output=> Elon

//problem3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password);//Predict the output=> 12345
console.log(hashedPassword);//Predict the output=>undefined

//probleme4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//Predict the output=> False
console.log(first == third);//Predict the output=> True

//problem5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);//Predict the output=> value
console.log(secondKey);//Predict the output=> [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//Predict the output => 1
console.log(willThisWork);//Predict the output=> 5


