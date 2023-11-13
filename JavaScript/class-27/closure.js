// function parent(){
//     var a=10;
//     function child(){
//         console.log(a);
//     }
//     return child;
// }
// let childFunc= parent()
// childFunc()

function outer(){
    var x=10;
    function inner(){
        console.log(x);
    }
    x=20;
    return inner;
}
var closureFunc = outer();
closureFunc();