let stars_Wars = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/14/",
            "http://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/12/",
            "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.dev/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "http://swapi.dev/api/people/2/"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a",
        "homeworld": "http://swapi.dev/api/planets/8/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:11:50.376000Z",
        "edited": "2014-12-20T21:17:50.311000Z",
        "url": "http://swapi.dev/api/people/3/"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/13/"
        ],
        "created": "2014-12-10T15:18:20.704000Z",
        "edited": "2014-12-20T21:17:50.313000Z",
        "url": "http://swapi.dev/api/people/4/"
    }
];

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