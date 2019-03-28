import React, { Component } from 'react';
import  FilmPoster from './filmPoster';
import Fave from './Fave';


class FilmRow extends Component {
 
    render() {
     
      return (
        <div className="film-row" onClick={this.props.onDetailsClick}>
        <FilmPoster poster={this.props.film.poster_path}/>
       {/* // <img src={"https://image.tmdb.org/t/p/w200/"+this.props.films.poster_path} alt="" /> */}
        <div className="film-summary">
        <Fave onFaveToggle = {this.props.onFaveToggle} isFave={this.props.isFave} />
          <h1 >{this.props.film.title}</h1>
          <p>{this.props.film.release_date.split("-")[0]}</p>
        </div>
      </div>
     
    
 
      )
    }
}
export default FilmRow;