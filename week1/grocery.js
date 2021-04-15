var students = [
     
    { name: "John", city: "California" },

    { name: "Peter", city: "London" },

    { name: "Mathew", city: "Manchester" },

    { name: "Jane", city: "Phoenix" },

]

students.forEach(classmates => console.log(classmates));

students[0].state = "California";
students[1].state = "London";
students[2].state = "Manchester";
students[3].state = "Phoenix";

students[0].dateOfBirth = "05/08/1981";
students[1].dateOfBirth = "06/12/1978";
students[2].dateOfBirth = "03/10/1976";
students[3].dateOfBirth = "08/15/1986";

students[0].payRate = "$20hr";
students[1].payRate = "$21hr";
students[2].payRate = "$19hr";
students[3].payRate = "$18hr";

students.forEach(classmates => console.log(classmates));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const gradStudents = [
     
    { name: "John", city: "California" },

    { name: "Peter", city: "London" },

    { name: "Mathew", city: "Manchester" },

    { name: "Jane", city: "Phoenix" },

]

gradStudents.forEach(grads => console.log(grads));

gradStudents[0].state = "California";
gradStudents[1].state = "London";
gradStudents[2].state = "Manchester";
gradStudents[3].state = "Phoenix";

gradStudents[0].dateOfBirth = "05/08/1981";
gradStudents[1].dateOfBirth = "06/12/1978";
gradStudents[2].dateOfBirth = "03/10/1976";
gradStudents[3].dateOfBirth = "08/15/1986";

gradStudents[0].payRate = "$20hr";
gradStudents[1].payRate = "$21hr";
gradStudents[2].payRate = "$19hr";
gradStudents[3].payRate = "$18hr";

gradStudents.forEach(grads => console.log(grads));

// by changing it to const it did not at the names and the data together instead it put them in individual categories.//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Const. Multiplication Table //

const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tableStart = 1;
const tableEnd = 12;
const table = []; 

for(let i = 1; i < 13; i++) {
    table.push('name: ' + i + ', ' + '\n' + 'values: '  + ' [')
    for(let j = 1; j < 13; j++) {
        table.push(  '{ ' + '\''+ j + '\'' + ': ' + '\'' + i + ' x ' + j + ' = ' + (i * j ) + '\'' + ' }' + ',');
    }
    table.push( ']');
}

table.forEach(element => console.log(element));







