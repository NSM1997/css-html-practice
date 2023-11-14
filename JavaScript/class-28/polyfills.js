let a=[1,2,3,4,5]

//adding new func in the prototype.
//  Array.prototype.whoAmI = function(){
//     console.log("I am Manu");
//  }

// console.log(a);
// a.whoAmI()

//polyfill for map() method.

// function square(b){
//     return b*b;
// }
// Array.prototype.myMap = function(cb){  // map func will take callback func as argument
//     let newArray =[];
//     for( var i=0;i<this.length;i++){
//            newArray.push(cb(this[i]));
//     }
//     return newArray;
// }
// let ans=a.myMap(square);
// console.log(ans)

// pollyfill for filter method.
//  function isEven(a){
//     return a%2==0
//  }

//  Array.prototype.myFilter = function(cb){
//     let newArray =[];
//     for( var i=0;i<this.length;i++){
//     if(cb(this[i])){
//         newArray.push(this[i])
//     }
// }
//     return newArray;
// }
// let ans2 = a.myFilter(isEven)
// console.log(ans2);

//polyfill for reduce method

// let sum = a.reduce((accumulator, currentVal)=>{
//        return accumulator+currentVal;
// },0)

// console.log(sum);

let sumReduce = function(accumulator,currentVal){
    return accumulator+currentVal;
}

Array.prototype.myReduce = function(cb,initialValue){
    let accumulator = initialValue;
    for(var i=0;i<this.length;i++){
        accumulator = cb(accumulator,this[i]);
    }
    return accumulator
}

let sum= a.myReduce(sumReduce,0)
console.log(sum);