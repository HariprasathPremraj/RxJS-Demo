import { Observable } from "rxjs"

var btn = document.getElementById("fetchMovies")
var source = Observable.fromEvent(btn, "click");

source.flatMap(q => getData("moviess.json")).subscribe(
    m => showMovieInfo(m),
    e => console.log(`Error info : ${e}`),
    () => console.log("Action completed successfully")
)

// function loadDataWithFetch(url:string){
//     return Observable.defer(()=>{
//         return Observable.fromPromise(fetch(url).then(result=>result.json()))
//     })
    
// }

//The below call would trigger fetch immediately
//loadDataWithFetch("movies.json")

//Note : If you do not want fetch to be executed immediately till it is subscribed, we can make use of Observable.defer
//loadDataWithFetch("movies.json").subscribe(movieInfo=>showMovieInfo(movieInfo));

function getData(url: string) {
    return Observable.create(observer => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            if(xhr.status===200){
            var data = JSON.parse(xhr.responseText);
            observer.next(data);
            //observer.complete();
            }
            else{
                observer.error(xhr.statusText);
                ;
                
            }
        });
        xhr.open("GET", url)
        xhr.send();
    })
    //.retry(3);
    .retryWhen(retryStrategy({attempts:3, delay:2500}))
}

function retryStrategy({attempts=5,delay=1000}){
return function(errors){
    //console.log(typeof(errors));
    return errors
    .scan((acc,val)=>{
        console.log(acc, val);
        return ++acc;
    }, 0)
    .takeWhile(a=>a<=attempts)
    .delay(delay);
}
}

function showMovieInfo(m) {
    m.movies.forEach(element => {
        alert(`Movie Name : ${element.name}, Lead role by : ${element.LeadRole}`);
    });
}