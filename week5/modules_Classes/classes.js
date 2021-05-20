let map = new Map();

function range(start, finish){
    for(let i = start; i < finish; i++ ){
        map.set(stars_Wars[i].name, {name: stars_Wars[i].name, height: stars_Wars[i].height, films: stars_Wars[i].films })
    }
};

function retrieve(){
    let array = [];
    map.forEach((element, key, map) => {
        array.push([map.get(key).name, map.get(key).height, map.get(key).films]);
    })
    return array;
}

let text1 = document.getElementById("submit");
text1.addEventListener("click", (event) => {
    event.preventDefault();
    range(parseInt(document.getElementById("one").value), parseInt(document.getElementById("two").value));
    let data = retrieve();
    for(let i = 0; i < data.length; i++){
        let paragraph = document.createElement("p");
        paragraph.textContent = " ( Name: " + " { " + data[i][0] + " } ) " + " ( Height: " + " { " + data[i][1] + " } ) " + " ( Films: " + " { " + data[i][2] + " } ) ";
        document.body.appendChild(paragraph);
    }
    console.log(data);
});