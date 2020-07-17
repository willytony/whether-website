const request = require('request')

const forecast = (latitude,longitude,callback)=>{
  const url='https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=hourly,daily&appid=6cf9a8dbf1ec40ff3df029d1ca609c4c'
  request({url,json:true},(error,response)=>{
    if(error){
      callback('unable to find the whether services',undefined)
    } else if(response.body.error){
      callback('unable to find the location services! try another search ',undefined)
    } else {
      callback(undefined,'timeZone: '+response.body.timezone + '! current temp: '+response.body.current.temp + '! clouds: '+response.body.current.clouds+
      '%! whether: '+response.body.current.weather[0].description +'!  wind_speed: '+response.body.current.wind_speed + 'Rain volume for last hour: '+ 
      response.body.current.rain)
    }
  })
}
module.exports = forecast