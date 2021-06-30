'use strict'

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const axios = require('axios'); // require the package
let weatherData = require('./data/weather.json')
let WEATHER_API_KEY= process.env.WEATHER_API_KEY


require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(cors()) // after you initialize your express app instance



app.get('/weather',weatherControl )

app.get('/movies',moviesControl )



// app.listen(process.PORT) // kick start the express server to work
app.listen(PORT, () => { console.log(`starting  ${PORT}`) })





/// here to getting data from json file ----------(old work)---------------

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