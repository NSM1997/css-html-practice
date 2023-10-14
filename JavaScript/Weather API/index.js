let temperature =document.querySelector(".temp");
let loc_name=document.querySelector(".location p");
let d_t=document.querySelector(".location span");
let condition=document.querySelector(".condition span");
let emoji=document.querySelector(".condition img");
let cityField=document.querySelector(".field");
let form=document.querySelector("form");

form.addEventListener('submit',function(event){
    event.preventDefault();
    let cityName=cityField.value;
    getWeatherInfo(cityName);
})
async function getWeatherInfo(cityName){
    let response=await fetch(`https://api.weatherapi.com/v1/current.json?key=63da1c8a04014d988b9212815230910&q=${cityName}&aqi=no`);
    let data= await response.json();
    mode: 'no-cors';
    console.log(data);

    // let a=data.current.temp_c;
    // let b=data.location.name;
    // let c=data.location.localtime;
    // let d=data.current.condition.text;
    // let e=data.current.condition.icon;
    // console.log(a,b,c,d,e);

    temperature.innerText = data.current.temp_c;
    loc_name.innerText=data.location.name;
    d_t.innerText=data.location.localtime;
    condition.innerText=data.current.condition.text;
    emoji.src="https:" + data.current.condition.icon;
    // console.log(data.current.condition.icon);
    // console.log(emoji);
}