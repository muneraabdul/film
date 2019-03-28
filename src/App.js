import React, { Component } from 'react';
import './App.css';
import FilmDetails from './filmDetails'
import FilmList from './filmList'
import TMDB from  './TMDB'
import Fave from './Fave'
import FilmRow from './FilmRow';


class App extends Component {
  state = {
    films:TMDB.films ,
    faves: [],
    current:{}
  }

  handleDetailsClick=(film)=>{
    console.log("Fetching details for"+film);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url).then(response => {

      response.json().then(data => {
        this.setState({current: data})
        console.log(data) // take a look at what you get back!
      })
    })
  }

 handleFaveToggle=(film)=>{
  
let newFaves = this.state.faves.slice()
const filmIndex = this.state.faves.indexOf(film) 

if(filmIndex === -1){
  newFaves.push(film)
  console.log(`Adding ${film} to faves...`); 
}else {
    newFaves.splice(filmIndex,1)
    console.log(`Removing${film} from faves....`); 
  }

  this.setState({faves:newFaves})

 }
  render() {

    return (
      <div className="film-library">
     <FilmList films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick ={this.handleDetailsClick} />
     <FilmDetails films={this.state.current} />
  

     {/* <Fave /> */}
    </div>
    );
  }
}

export default App;
