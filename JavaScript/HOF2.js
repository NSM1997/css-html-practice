let radius=[1,2,3,4,5] 
//cal diameter,area and circumference of circle.

function diameter(radius){
     return 2*radius
}
function area(radius){
    return Math.PI*radius*radius
}
function circumference(radius){
return 2*Math.PI*radius
}
function calculate(radius,logic){
        let ans=[]
        for(let i=0;i<radius.length;i++){
            ans.push(logic(radius[i]))
        }
    return ans;
}

let areaAns= calculate(radius,area)
let diaAns=calculate(radius,diameter)
let cirAns=calculate(radius,circumference);
console.log(areaAns,diaAns,cirAns)