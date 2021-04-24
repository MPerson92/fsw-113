// CLO1
let studentArray = Array(10)

console.log(studentArray.length);
console.log(studentArray);

// CLO2
let studentArray1 = Array.of(10);

console.log(studentArray1.length);
console.log(studentArray1);

// CLO3
let grades = [90, 98, 78, 99];
let studentGrades = Array.from(grades, g => g * 110);

console.log(studentGrades.length);
console.log(studentGrades);

// CLO4
let grades1 = [90, 98, 78, 99];
let studentGrades1 = Array.from(grades, function(g){
    return g * this.percentageIncrement
},{percentageIncrement: 1.10});

console.log(studentGrades1);

// CLO5
let grades2 = [90,98,78,99];
let studentGrades2 = Array.from(grades, g => {
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades2)

// CLO6
let grades3 = [90, 98, 78, 99];
let studentGrades3 = grades.find(v => v == 90);

console.log(studentGrades3);

// CLO7
let grades4 = [90, 98, 78, 99];
let studentGrades4 = grades.find(v => v >= 90);

console.log(studentGrades4);

//CLO8
let grades5 = [90, 98, 78, 99];
let studentGrades5 = grades.map(v => v * .090);

console.log(studentGrades5);

// CLO9
let grades6 = [90, 98, 78, 99];
let studentGrades6 = (...grades6) => 
// Rest Parameter ...grades6

console.log(studentGrades6);

// CLO10
let student = {name: 'John Masson'};
let adjunct = {name: 'Dave Larson'};
let people = new Map();

people.set(student, "Student");
people.set(adjunct, "Adjunct");

console.log(people);

// CLO11
let student1 = {name: 'John Masson'};
let adjunct1 = {name: 'Dave Larson'};
let people1 = new Map();

people1.set(student1, "Student1");
people1.set(adjunct1, "Adjunct1");

people1.delete(student1);

console.log(people1);

// CLO12
let student2 = {name: 'John Masson'};
let adjunct2 = {name:'Dave Larson'};
let people2 = new Map();

people2.set(student2, "Student2");
people2.set(adjunct2, "Adjunct2");

people2.clear();

console.log(people);

//CLO13
let student3 = {name:'John Masson'};
let adjunct3 = {name:'Dave Larson'};
let people3 = new Map();

people3.set(student3, "Student3");
people3.set(adjunct3, "Adjunct3");

let result = people3.has(student3);

console.log(result);

// CLO14
let student4 = {name:'John Masson'};
let adjunct4 = {name:'Dave Larson'};
let people4 = new Map();

people4.set(student4, "Student4");
people4.set(adjunct4, "Adjunct4");

let result1 = people4.keys(student4);

console.log(result1);

//CLO15
let student5 = {name:'John Masson'};
let adjunct5 = {name:'Dave Larson'};
let people5 = new Map();

people5.set(student5, "Student");
people5.set(adjunct5, "Adjunct");

let result2 = people5.values(student5);

console.log(result2);

// CLO16
let student6 = {name:'John Masson'};
let adjunct6 = {name:'Dave Larson'};
let people6 = new WeakMap();

people6.set(student6, "Student");
people6.set(adjunct6, "Adjunct");

ladjunct = null;

console.log(people6.size);
console.log(people6.size);

// CLO17
let student7 = {name:'John Masson'};
let adjunct7 = {name:'Dave Larson'};
let people7 = new Set();

people7.add(student7);
people7.add(adjunct7);

people7.add(adjunct7);

console.log(people.size);

// CLO17 pt2.

let students =[{name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}];
let people8 = new Set(students);

console.log(people.has({name: 'Dave Vasco'}));

