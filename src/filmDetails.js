import React, { Component } from 'react';


const FilmDetails =(props) => {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.films.backdrop_path}`
const posterUrl = `https://image.tmdb.org/t/p/w780/${props.films.poster_path}`
     
let details;
if (props.films.id === null) {



}

  return (
        <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
{/* 
        <div className="film-detail">
  <p>
    <i className="material-icons">subscriptions</i>
    <span>No film selected</span>
  </p>
</div> */}

      </div>
      )

    
}
export default FilmDetails;