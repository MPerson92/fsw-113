const starwars_data = require('./data.json');
const items = starwars_data.length;

var getData = function(index){

    return starwars_data[index];
}
var printProps = function(obj, props){
    console.log(obj);
    props.forEach(element => {
        console.log(`${element} =  ${obj[element]}`);
    });
}
var result = getData(0);

const keys = Object.keys(result);
printProps(result, keys);

