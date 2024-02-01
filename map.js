  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4];
let results = [];

for (let num of nums) {
  results.push(num *2);
}

console.log(results);

// Using map()
const multiByTwo = function (num) {
  return num * 2;
}

// const mapResults = nums.map(multiByTwo);
// console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 }) 
console.log(simplified);


// Simplfied w/ map() + arrow function

const arrow = nums.map(num => num*2);
console.log (arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithId = students.map(student => [student.name, student.id]);

const challenge1 = students.map(student => student);

console.log(studentsWithId);
console.log(challenge1);

let age = [32, 26, 28];


const challenge2 = students.map((student) => {student.age = age;});
console.log(challenge2);
