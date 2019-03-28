import React, { Component } from 'react';
import FilmRow from './FilmRow'


class FilmList extends Component {
  constructor(){
    super()
    this.state={
      filter:"all"
    }
  
}
  handleFilterClick=(filter)=>{
    this.setState({
      filter: filter})
    console.log("Setting filter to "+filter);
  }
    render() {

      const allFilms = this.props.films.map((film) => {
        return ( <FilmRow film={film} key={film.id} isFave={this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)} onDetailsClick={() => this.props.onDetailsClick(film)}/>)
      })
          const allChange =(this.state.filter) === 'all' ? 'is-active' : '';
          const faveChange= (this.state.filter )=== 'faves' ? 'is-active' : '';

      return (
        <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters " >
        <div className={"film-list-filter " + allChange}  onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={"film-list-filter "+ faveChange} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>
    {allFilms}
</div>
      )
    }
}
export default FilmList;