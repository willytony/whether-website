const request = require('request')

const geocode=(address,callback)=>{
  const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoid2lsbHl0b255IiwiYSI6ImNrYzV4c2IydTAyMGsydHF0emt3OHo2c2gifQ.reKaezTlY0V4uaCnbi0Ong'
  request({url, json:true},(error,response)=>{
    if(error){
      callback('unable to findthe whether services! try another search',undefined)
    } else if(response.body.features.length ===0){
      callback('unable to find the location search ! try another search',undefined)
    } else {
      callback(undefined,{
        latitude:response.body.features[0].center[0],
        longitude:response.body.features[0].center[1],
        location:response.body.features[0].place_name
      })
    }
  })
}
module.exports = geocode