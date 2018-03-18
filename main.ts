import {Observable, Observer} from "rxjs"

let num = [1,2,3,4,5];
let source = Observable.from(num);


// class MyObserver implements Observer<number>{
//     next(value){
//         console.log(`Value is : ${value}`);
//     }

//     error(e){
//         console.log(`Error info is : ${e}`);
//     }

//     complete(){
//         console.log("complete");
//     }
    
// }

// source.subscribe(new MyObserver());

source.subscribe(
    v=>console.log(`Value is ${v}`),
    e=>console.log(`Error info is ${e}`),
    ()=>console.log("Complete...")
)