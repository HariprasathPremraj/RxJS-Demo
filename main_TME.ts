import {Observable} from "rxjs"
var circleObj = document.getElementById("circle");
var source = Observable.fromEvent(document,"mousemove")
                        .map((e:MouseEvent)=>{
                            return{
                                x:e.clientX,
                                y:e.clientY
                            }
                        })
                        .delay(250)
                        //.filter(q=>q.x<500)

function moveNext(returnObj){
    circleObj.style.top=returnObj.y;
    circleObj.style.left = returnObj.x;
    console.log(`Returned object is : ${returnObj.x},${returnObj.y}`)
}                        

source.subscribe(
    moveNext,
    e=>{console.log(`Error occurred : ${e}`)},
    ()=>{console.log(`Process Completed...`)}
)