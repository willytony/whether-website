const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
const publicPath = path.join(__dirname,'../public')

app.use(express.static(publicPath))

app.set('view engine','hbs')

app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
  res.render('index',{
    title:'Welcome To Whether Forecast'
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'welcome to about page'
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    title:'welcome to help page'
  })
})
app.get('/whether',(req,res)=>{
  if(!req.query.address){
    return res.send('<h4>you must provide a valid address</h4>')
  }
  geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
    if(error){
      return res.send({ error })
    }
    forecast(latitude,longitude,(error,forecastData)=>{
      if(error){
        return res.send({ error })
      }
      res.send({
        forecast:forecastData,
        location
      })
    })
  })
})


app.listen(port,()=>{
  console.log('port is ready on'+port )
})