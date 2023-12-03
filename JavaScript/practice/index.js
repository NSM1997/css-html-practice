//map function

// let arr=[4,6,1,3,2,5];

// console.log(arr.sort());

// function square(a){
//     return a*a;
// }

//polyfill for map function

// Array.prototype.myMap = function (cb){
//     let ans=[];
//     for(var i=0;i<this.length;i++){
//         ans.push(cb(this[i]));
//     }
//     return ans;
// }
// let sol= arr.myMap(square);
// console.log(sol);

//polyfills for filter fucntion

// function isEven(a){
//     return a%2 == 0;
// }
// Array.prototype.myFilter = function(cb){
//     let newArr = [];
//     for(var i=0;i<this.length;i++){
//         newArr.push(cb(this[i]));
//     }
//     return newArr
// }

// let ans= arr.myFilter(isEven);
// console.log(ans);

//polyfills for reduce function.

// function sumReduce(a,b){
//     return a+b;
// }
// Array.prototype.myReduce = function(cb){
//     let accumulator = this[0];
//     for (var i=1;i<this.length;i++){
//         accumulator = cb(accumulator,this[i]);
//     }
//     return accumulator;
// }

// let ans = arr.myReduce(sumReduce,0);
// .log(ans);console


// var ty = 2;
// console.log(typeof(ty));
// ty="Name";
// console.log(typeof(ty));

//practice debounce,throttling
// class Person{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//         this.greet = function greet(){
//             console.log(`${this.name} says hello`)
//         }
//     }
// }
// class Student extends Person{
//     constructor(name,age,gender,grade,batch){
//         super(name,age,gender);
//         this.grade=grade;
//         this.batch=batch
//     }
// }

// let person1= new Person('Sai', 15,'Male');
// console.log(person1);

// let student1 = new Student('manu',15,'Male','A','FE1');
// console.log(student1)
// student1.greet();

//polyfills for map
let arr=[4,6,1,3,2,5];

// function square(a){
//     return a*a;
// }

// Array.prototype.myMap = function(cb){
//     let ans=[];
//     for(let i=0;i<this.length;i++){
//         ans.push(cb(this[i]));
//     }
//     return ans;
// }
// let sol = arr.myMap(square);
// console.log(sol);

//polyfill for reduce

// function reduce(accumulator,curr_val){
//     return accumulator+curr_val;
// }
// Array.prototype.myReduce = function(cb,initial_val){
//     let accumulator , start
//      if(initial_val){
//         accumulator = initial_val;
//         start =0;
//      }else{
//         accumulator=this[0]
//         start=1
//      }
//      for(var i=start;i<this.length;i++){
//         accumulator= cb(accumulator,this[i])
//      }
//      return accumulator;
// }
// console.log(arr.myReduce(reduce));
 
//polyfill for filter

// let isEven = function(a){
//    return a%2==0;
// }

// Array.prototype.myFilter = function(cb){
//     let ans=[];
//     for(var i=0;i<this.length;i++){
//         if(cb(this[i])){
//             ans.push(this[i]);
//         }
//     }
//     return ans;
// }
// console.log(arr.myFilter(isEven));

//closures

function parent(x){
    function child(y){
        return x+y;
    } 
    return child;
}
let closure = parent(5);
let ans = closure(3);
console.log(ans);