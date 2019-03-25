import React, { Component } from 'react';

class FilmRow extends Component {
    render() {
   var year = this.props.films.release_date.split("-")
      return (
        <div className="film-row">
        <img src={"https://image.tmdb.org/t/p/w200/"+this.props.films.poster_path} alt="" />
        <div className="film-summary">
          <h1 >{this.props.films.title}</h1>

          <p>{year[0]}</p>
        </div>
      </div>
     
    
 
      )
    }
}
export default FilmRow;