'use strict'
const Movie=require('../models/Movie.Model')
const axios = require('axios'); // require the package
const MOVIE_API_KEY=process.env.MOVIE_API_KEY



const moviesControl=(req, res)=>{
   let city = req.query.city
  let urlMove=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}`

  let moveResponse=axios.get(urlMove).then(response => {
    let movie=response.data.results.map(item=>{
      return new Movie(item)
    })
    res.json(movie)
  }).catch(err=>{
    res.status(500).send(`error in getting data ==> ${err}`)
})
}

module.exports = moviesControl;
