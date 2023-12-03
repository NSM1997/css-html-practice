//callBacks

// function func1(a,b,cb){
//     cb()
//     return a+b;
// }

function func2(){
    console.log("I'm func2")
}

let num1=1
let num2=2
let sum= func1(num1,num2,func2)
console.log(sum)
func2()

// function square(a){
//     return a*a;
// }
// function sum(a,b){
//     return a+b;
// }
// function sumOfSquares(a,b,square,sum){ //this function is an HOF
//     let a2=square(a);
//     let b2=square(b);
//     let sumOfSq=sum(a2,b2)
//     return sumOfSq
// }
// let a=1;
// let b=2;
// console.log(sumOfSquares(a,b,square,sum))