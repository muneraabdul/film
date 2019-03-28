import React, { Component } from 'react';
import  FilmPoster from './filmPoster';
import Fave from './Fave';


const FilmRow = (props) =>  {
 

     
     
      return (
        <div className="film-row" onClick={props.onDetailsClick}>
        <FilmPoster poster={props.film.poster_path}/>
       {/* // <img src={"https://image.tmdb.org/t/p/w200/"+props.films.poster_path} alt="" /> */}
        <div className="film-summary">
        <Fave onFaveToggle = {props.onFaveToggle} isFave={props.isFave} />
          <h1 >{props.film.title}</h1>
          <p>{props.film.release_date.split("-")[0]}</p>
        </div>
      </div>
     
    
 
      )
    
}
export default FilmRow;