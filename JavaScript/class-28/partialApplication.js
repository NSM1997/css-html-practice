// function calculate(operation){
//     return function(a,b){
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
// }

// calculate('sum')(5,6)
// calculate('subtract')(8,1)
// calculate('multiply')(2,3)
// calculate('divide')(4,2)

function add(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
var result = add(2)(3,4)
console.log(result)