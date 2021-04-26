let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "green",
        "type": "sedan",
        "registration": new Date('2018-06-07'),
        "capacity": 4
    },
    {
        "color": "red",
        "type": "minivan",
        "registration": new Date('2015-04-19'),
        "capacity": 8
    },
    {
        "color": "green",
        "type": "truck",
        "registration": new Date('2017-02-19'),
        "capacity": 6
    },
    {
        "color": "lightBlue",
        "type": "hatchback",
        "registration": new Date('2018-12-23'),
        "capacity": 2
    },
    {
        "color": "red",
        "type": "truck",
        "registration": new Date('2017-11-12'),
        "capacity": 6
    },
    {
        "color": "yellow",
        "type": "truck",
        "registration": new Date('2018-12-12'),
        "capacity": 3
    },
    {
        "color": "green",
        "type": "hatchback",
        "registration": new Date('2017-06-23'),
        "capacity": 4
    },
    {
        "color": "pearl",
        "type": "hatchback",
        "registration": new Date('2017-07-24'),
        "capacity": 6
    }
]

function vehicle(element, index, array){
     return element.color == "red";
}

let transportation = cars.filter(vehicle);

console.log(transportation);

function vehicle1(element, index, array){
    return element;
}

let transportation1 = cars.filter(vehicle1);

console.log(transportation1);

let transportation2 = cars.filter(car => car.color === "red");
let transportation3 = cars.filter(car => car);
let transportation4 = cars.filter(car => car.color === "red" || car.color === "green");

console.log(transportation2);
console.log(transportation3);
console.log(transportation4);

