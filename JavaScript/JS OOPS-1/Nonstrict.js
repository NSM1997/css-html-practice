console.log("global context",this)

 function func1(){
    console.log("function context",this)
 }
 func1()

 let obj= {
    name: "name",
    func : function func2(){
        console.log("InObject context",this)
    }
 }
 obj.func()

 let obj2={
   name:"name1",
   func : function func3(){
     function func4(){
        console.log("nested function context",this)
     }
   }
 }
 obj.func3()