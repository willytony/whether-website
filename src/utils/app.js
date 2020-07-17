const geocode = require('./geocode')
const forecast = require('./forecast')

const address = process.argv[2]
if(!address){
  console.log('you must provide an address')
} else {
geocode(address,(error,data)=>{
 if(error){
   return console.log({ error })
 }

  forecast(data.latitude,data.longitude,(error,forecastData)=>{
    if(error){
      return console.log({ error })
    }
    console.log(data.location)
    console.log(forecastData)
  })

})
}

