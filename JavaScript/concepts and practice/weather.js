

let city='Hyderabad'

async function getWeather(city){
    let url=`https://api.weatherapi.com/v1/current.json?key=63da1c8a04014d988b9212815230910&q=${city}&aqi=no`
    //console.log(url)
    let response= await fetch(url)
    let data=await response.json()
    console.log(data)
}

getWeather('Tanuku')