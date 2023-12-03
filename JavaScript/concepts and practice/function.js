function myFunc(){
    console.log("inside my func");
}

myFunc()

//Traditional way
function myFunc(name){
    console.log(name + " inside my func");
    console.log(`${name} Func`)
}
myFunc("Sai")

 //2nd way to declare
 let func2=function(){
    console.log("hello there")
 }

 func2()

// Arrow functions
let func3= () =>{
console.log("Hi its me")
}
func3()

let square=(A)=>{
    console.log(A*A)
}
square(7)