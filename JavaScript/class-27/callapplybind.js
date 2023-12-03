//call

let obj1={
    name:"Sai",
    age:19
}
let obj2={
    name:"Manu",
    age:20
}
function fullName(state,place){
    console.log(this.name + " age is "+ this.age + " and he is from "+ state +" "+ place);
}

fullName.call(obj1, "AP","Tanuku");
fullName.apply(obj1,["AP","Tanuku"]);