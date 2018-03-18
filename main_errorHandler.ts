import {Observable} from "rxjs"

var source = Observable.create(observer=>{
    observer.next(1),
    observer.next(2),
    observer.next(3),
    observer.error("Error occurred"),
    observer.next(4),
    observer.next(5)}
)

var source1 = Observable.merge(
    Observable.of(6),
    Observable.of(7),
    Observable.of(8),
    Observable.throw(new Error("Error here")),
    Observable.of(10),
    Observable.of(11),
    Observable.from([12,13,14,15])
).catch(er => Observable.of("Hari","Prasath","Premarajan"))
//.subscribe(val=>console.log(val))

source.subscribe(val=>console.log(`Value of : ${val}`),
                err =>console.log(`Error: ${err}`),
                ()=>console.log(`Observable loop execution completed`))

source1.subscribe(v=>console.log(`Log from second source is ${v}`),
                err=>console.log(`Error Info : ${err}`),
                ()=>console.log(`Second observable loop execution completed`))