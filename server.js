const express = require('express') // require the express package
let weatherData = require('./data/weather.json')
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(cors()) // after you initialize your express app instance


app.get('/weather', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery



    let findData = () => {
        let city = weatherData.find((city, index) => {
            return city.city_name.toLocaleLowerCase() === searchQuery.toLocaleLowerCase()
        })

        return city.data.map(item => {

       return new ForeCast(item)
        }
        )
    }

    res.json(findData());
}
);

class ForeCast {
    constructor(weather) {

        this.date = weather.valid_date
        this.description = weather.weather.description

    }
}


// app.listen(process.PORT) // kick start the express server to work
app.listen(PORT, () => {
    console.log(`starting  ${PORT}`)
})


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
