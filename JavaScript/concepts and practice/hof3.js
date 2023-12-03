let numbers=[1,2,3,4,5]

//map function
let squareOfNumber=numbers.map(function(number,index){
    console.log("Number is : ",  number)
    console.log("Index is : " ,index)
    return number*number
})
console.log(squareOfNumber)

// let transaction =[100,-200,300,400,-500,600]

// let CreditTransaction= transaction.filter(function(transaction){
//     return transaction>0;
// })
// console.log(CreditTransaction)


//reduce (summ the numbers)

// let sum=numbers.reduce(function(sum,number){
//       sum=sum+number;
//       return sum;
// },0)
// console.log(sum);


//every func(if all are true it returns true)

// let transaction =[100,-200,300,400,-500,600]

// let areAllCredit = transaction.every(function(transaction){
//             return transaction>0;
// })
// console.log(areAllCredit)


//some func (atleast one is true it returns true)

// let transaction =[100,200,300,400,500,600]

// let isAnyDebit=transaction.some(function(transaction){
//         return transaction<0
// })
// console.log(isAnyDebit)


//function chaining 
// let transaction =[100,-200,300,400,-500,600]

// let CreditTransactionInUSD=transaction.map(function(transaction){
//                   return transaction/82
// }).filter(function(transactionInUSD){
//          return transactionInUSD>0 
// });
// console.log(CreditTransactionInUSD)


