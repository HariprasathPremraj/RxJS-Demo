import {Observable} from "rxjs"

var buttonInst = document.getElementById("fetchMovies");
var divInst = document.getElementById("movies_Container");
var source = Observable.fromEvent(buttonInst,"click");

function moveNextMovie(){

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",()=>{
        let moviesInfoCollection = JSON.parse(xhr.responseText);
        moviesInfoCollection.movies.forEach(element => {
            var movieDisplay = document.createElement("div");
            movieDisplay.innerText = element.name;
            divInst.appendChild(movieDisplay);
            var h4Elem = document.createElement("h5");
            h4Elem.innerText="------"+element.LeadRole;
            h4Elem.style.padding = "20";
            movieDisplay.appendChild(h4Elem);
            //element.name
        });
    })
    xhr.open("GET","movies.json")
    xhr.send();

}

source.subscribe(
    moveNextMovie,
    e=>console.log(`Error occurred ${e}`),
    ()=>console.log(`Action chain completed successfully...`)
)

