import {Observable} from "rxjs"
var numbers = [0,1,2,3,4,5,6,7,8,9,10]

var source = Observable.create(observer => {

    // for(let n of numbers){
    //     observer.next(n);
    // }
    // observer.complete();
    var index = 0;
    var produceValues =function(){
        //console.log(`index of ${index++}`);
        observer.next(numbers[index++]);
        if(index<numbers.length){
            setTimeout(function(){
                produceValues();
            },2000)
        }
        else{
            observer.complete();
        }
    }

    produceValues();

}).map(n=>n*2)
.filter(q=>q>5)

source.subscribe(
    (v)=>console.log(`Current iteration value is ${v}`),
    (e)=>console.log(`Error info : ${e}`),
    ()=>console.log(`Action completed successfully`)
)