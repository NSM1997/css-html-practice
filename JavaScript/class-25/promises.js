let promise = new Promise((resolve,reject)=>{
    //write your logic for resolve and reject
      const a=5;
      const b=4;
      
    if(a==b){
        resolve('values are equal');
    }else{
        reject('values not equal');
    } 
})
  //then method

  promise.then(data=>{
    //do something
    console.log('promise is resolved, final data is: ',data)
  })

  //catch method.
  promise.catch(error=>{
    //do something.
    console.log('promise is rejected due to this error: ', error)
  })