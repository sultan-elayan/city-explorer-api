const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const axios = require('axios'); // require the package
let weatherData = require('./data/weather.json')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(cors()) // after you initialize your express app instance


let WEATHER_API_KEY= process.env.WEATHER_API_KEY
let MOVIE_API_KEY=process.env.MOVIE_API_KEY



app.get('/weather', (req, res)=>{
    let weatherData;
    let lat=req.query.lat;
    let lon=req.query.lon;
    
let url=`https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
let weatherResponse=axios.get(url).then(response => {
    weatherData=response.data;
  let forecast=weatherData.data.map(item=>{
    return new Forecast(item)
  })

  res.json(forecast)}).catch(err=>{res.status(500).send(`error in getting data ==> ${err}`)})});



app.get('/movies', (req, res)=>{
    let city_name=req.query.city
   let urlMovie=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city_name}`
 
   let movieResponse=axios.get(urlMovie).then(response => {
    
     let movie=response.data.results.map(item=>{
       return new Movie(item)
     })
     res.json(movie)
   }).catch(err=>{
     res.status(500).send(`error in getting data ==> ${err}`)
 })
 });



class ForeCast {
    constructor(weather) {

        this.date = weather.valid_date
        this.description = weather.weather.description}};


class Movie{
    constructor(data){
      this.average_votes = data.vote_average;
  
      this.total_votes = data.vote_count
  
      this.image_url = data.backdrop_path
  
      this.popularity = data.popularity
  
      this.released_on = data.release_date }};

// app.listen(process.PORT) // kick start the express server to work
app.listen(PORT, () => {console.log(`starting  ${PORT}`)})


// ======================================================================================


/// here to getting data from json file (old work)
// app.get('/weather', (req, res) => {
//     let lat = req.query.lat
//     let lon = req.query.lon
//     let searchQuery = req.query.searchQuery
//     let findData = () => {
//         let city = weatherData.find((city, index) => {
//             return city.city_name.toLocaleLowerCase() === searchQuery.toLocaleLowerCase()})
//         return city.data.map(item => {
//        return new ForeCast(item)})}
// res.json(findData());});

// ======================================================================================

// app.get('/about-us', (req, res)=>{
//     res.send('301d24 students are awesome')


// const axios = require('axios'); // require the package

// // inside your callback function
// axios.get(url).then(response => response.data).catch(error => console.log(error));


// a server endpoint 
// app.get('/', // our endpoint name
//  function (req, res) { // callback function of what we should do with our request
//   res.send('Hello World sssssssssssssssssssssss') // our endpoint function response
// })


// const express = require('express') // require the express package
// const app = express() // initialize your express app instance


// app.get('/weather', (req, res)=>{
//     res.json(weatherData)
// })
