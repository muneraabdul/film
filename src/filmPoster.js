import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
return(
    <div >
    <img src={"https://image.tmdb.org/t/p/w200/"+this.props.poster} alt="" />
</div>
)

    }
    }
    export default FilmPoster;