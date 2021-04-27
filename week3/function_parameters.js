// CLO1

let studentGrades = [90, 80, 88, 98];
let curveGrades = function(grades, percentage) {
    var newGrades = grades.map( grade => {
        return grade * percentage
    });
    return newGrades;
}
var result = curveGrades(studentGrades);

console.log(result);

// CLO2

let studentGrades1 = [90, 80, 88, 98];
let curveGrades1 = function(grades1, percentage = 1.10) {
    var newGrades1 = grades1.map(grade1 => {
        return grade1 * percentage
    })
    return newGrades1;
}
var result1 = curveGrades1(studentGrades1);

console.log(result1);

// CLO3

let studentGrades2 = [90, 80, 88, 98];
let curveGrades2 = function(grades2, percentage = 1.10) {
    var newGrades2 = grades2.map(grade2 => {
        return grade2 * percentage
    })
    return newGrades2;
}
var result2 = curveGrades2(studentGrades2, 1.33);

console.log(result2);

// PT. 2

let studentGrades3 = [90, 80, 88, 98];
let curveGrades3 = function(percentage = 1.10, ...grades3) {
    var newGrades3 = grades3.map(grade3 => {
        return grade3 * percentage
    })
    return newGrades3;
}
var result3 = curveGrades3(1.33, ...studentGrades3);

console.log(result3);

// CLO4

let studentGrades4 = [ 90, 80 , 88, 98];
let curveGrades4 = function(percentage = 1.10, ...grades4){
   var newGrades4 = grades4.map( grade4 => {
        return grade4 * percentage
    })
    return newGrades4;
}
var result4 = curveGrades4(...studentGrades4);

console.log(result4);

//CLO5

let studentGrades5 = [ 90, 80 , 88, 98];
let curveGrades5 = function(percentage = 1.10, ...grades5){
   var newGrades5 = grades5.map( grade5 => {
        return grade5 * percentage
    })
    return newGrades5;
}

var result5 = curveGrades5(1.24, ...studentGrades5);

console.log(result5);

//CLO6

let studentGrades6 = [ 90, 80 , 88, 98];
let curveGrades6 = function(percentage = 1.10, ...grades6){
   var newGrades6 = grades6.map( grade6 => {
        return grade6 * percentage
    })
    return newGrades6;
}

var result6 = curveGrades6(undefined, ...studentGrades6);

console.log(result6);

//CLO7

let studentGrades7 = [ 90, 80 , 88, 98]
let percentageCurve = 0.98
let curveGrades7 = function(percentage = percentageCurve, ...grades7){
   var newGrades7 = grades7.map( grade7 => {
        return grade7 * percentage
    })
    return newGrades7;
}

var result7 = curveGrades7(undefined, ...studentGrades7);

// CLO8

let studentGrades8 = [90, 80, 88, 98];
const avg = function(array){
    let average = array.reduce((a, b) => a + b, 0);
    return average / array.length / 100;
}

let curveGrades8 = function ( percentage = avg(studenGrades8), ...grades8) {
    var newGrades8 = grades8.map(grade8 => {
        return grade8 * percentage
    })
    return newGrades8;
};
var result8 = curveGrades8(1.3, ...studentGrades8);

console.log(result8);

//CLO9

let studentGrades9 = [ 90, 80 , 88, 98]
const avg1 = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrades9 = function(  percentage = avg(studentGrades9), ...grades9){
   var newGrades9 = grades9.map( grade9 => {
      return grade9 * percentage
    })
    return newGrades9;
}

var result9 = curveGrades9(1.3, 68, 56, ...studentGrades9);

console.log(result9);

//pt. 2

let count = new Function("grades", "grades.length");
var result10 = count([ 90, 80 , 88, 98]);

console.log(result10);