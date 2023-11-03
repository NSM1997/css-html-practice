let initialValue = document.querySelector('#initial');
//console.log(initialValue)
let sumBtn= document.querySelector('#increment');
let minusBtn=document.querySelector('#Decrement');
let resetBtn= document.querySelector('#reset');
let changeValBy = document.querySelector('#plusMinusBy');


//console.log(defaultVal);

sumBtn.addEventListener('click',event=>{
    let defaultVal= parseInt(initialValue.innerText);
    let incDecBy= parseInt(changeValBy.value);
    let updatedVal= defaultVal+incDecBy;
    initialValue.innerText=updatedVal;
})
minusBtn.addEventListener('click',event=>{
    let defaultVal= parseInt(initialValue.innerText);
    let incDecBy= parseInt(changeValBy.value);
    let updatedVal= defaultVal-incDecBy;
    if(updatedVal>=0){
        initialValue.innerText=updatedVal;
    }
})
resetBtn.addEventListener('click',event=>{
    initialValue.innerText=0;
})