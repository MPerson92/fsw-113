// CLO1

let studentGrades = [90, 80, 88, 98];
function result (...studentGrades){
    return studentGrades;
};
console.log(result(studentGrades) instanceof Array);
console.log(result(studentGrades));
// answer: true
// answer [[90, 80, 88, 98]]

// CLO2 

let myGrade = 99;
function result (...myGrade){
    return myGrade;
};
console.log(result(myGrade));
//answer: [ 99 ]

// CLO3

var studentGrades1 = [90, 80, 88, 98];
let maxGrade = Math.max(...studentGrades1);
console.log(maxGrade);
// answer: 98

// CLO4

var studentGrades2 = [90, 80, 88, 98];
let gradeArray = [...studentGrades2];

console.log(gradeArray);
// answer: [90, 80, 88, 98]

// CLO4 pt. 2

let studentGrades3 = [...[, ,]];
console.log(studentGrades3);
//answer: [undefined, undefined]

// CLO4 pt. 3 

let myHouseNumber = [..."8976"];

console.log(Math.max(myHouseNumber));

// answer: NaN

// CLO5

myHouseNumber = [..."8976", "AB", "CDEDF"];
    console.log(Math.max(myHouseNumber));

// NaN

// CLO7

var studentName = "James Moore";
var dob = "02/02/2002";
var studentInfo = {
    [studentName]:studentName,
    [dob]:dob
};
console.log(studentInfo);

// answer: { 'James Moore': 'James Moore', '02/02/2002': '02/02/2002' }

// CLO8

var studentName1 = "James Moore";
var dob1 = "02/02/2002";
var studentInfo1 = {
    studentName1,
    dob,
     currentAge(){
        var today = new Date();
        var dobDate = new Date(this.dob);
        var timeDiff = today.getTime() - dobDate.getTime();
        var days = timeDiff / (1000 * 3600 * 24 * 365);
        return Math.round(days);
    }
};
var result = studentInfo1.currentAge();

console.log(result);

// answer: 19

// CLO9

var studentName2 = "James Moore";
var dob2 = "02/02/2002";
var studentInfo2 = {
    studentName,
    dob,
    age : function( ) {
        var today = new Date();
        var dobDate = new Date(this.dob);
        var timeDiff = today.getTime() - dobDate.getTime();
        var days = timeDiff / (1000 * 3600 * 24 * 365);
        return Math.round(days);
    }
};
var result = studentInfo2.age();

console.log(studentInfo2);
//  answer: { studentName: 'James Moore', dob: '02/02/2002', age: [Function: age] }

// CLO10

var studentName3 = "James Moore";
var dob3 = "02/02/2002";
var studentInfo3 = {
    studentName,
    dob,
    [ "ageOf Student"] : function( ) {
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff / (1000 * 3600 * 24 * 365);
        return Math.round(days)
    }
}

var result = studentInfo3["ageOf Student"];

console.log(studentInfo3);

// answer: {
    // studentName: 'James Moore',
    // dob: '02/02/2002',
    // 'ageOf Student': [Function: ageOf Student]
//   }

// CLO11

var columnName = "Name";
var name = {};
var student = {
  get [columnName]() {
    return name;
  },
  set [columnName](value) {
    name = value;
  },
};

student.Name = "Harry Potter";

console.log(student.name);

// undefined