// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));

// function sum(a){
//     return function(b){
//         console.log(a+b);
//     }

//     function _sum(b){
//         console.log(a+b);
//     }
//     return _sum
// }

// let sumFunc = sum(2);
// sumFunc(2);

// sum(2)(3)

//q-1 function to multiplt 2 numbers using currying.

// function multiply(a){
//     return function(b){
//         console.log(a*b);
//     }
// }
// multiply(2)(3);


//q-2:
// function calculate(operation){
//     return function(a){
//         return function(b){
//             if(operation ==='sum'){
//                 console.log(a+b);
//             }
//             if(operation ==='subtract'){
//                 console.log(a-b);
//             }
//             if(operation === 'multiply'){
//                 console.log(a*b);
//             }
//             if(operation === 'divide'){
//                 console.log(a/b);
//             }
//         }
//     }
// }

// calculate('sum')(5)(6)
// calculate('subtract')(8)(1)
// calculate('multiply')(2)(3)
// calculate('divide')(4)(2)
