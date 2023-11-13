const task1=() =>{
   console.log('task 1 completed.')
}

// const heavytaskBlocking =()=>{
//  console.log('performing it in a sync fashion')
//  var start = Date.now();
//  console.log(start);
//  while(Date.now()-start<5000){
//  }
//  console.log('completed heavy task');
// }

const heavytaskNonBlocking=()=>{
    console.log('skipping it , will perform in async fashion');
    setTimeout(()=>{
          console.log('completed heavy task')
    },5000);
}

const task2 =() =>{
    console.log('task 2 completed')
}

task1()
heavytaskNonBlocking();
task2()