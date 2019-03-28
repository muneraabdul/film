import React, { Component } from 'react';

const FilmPoster = (props) =>{
    
return(
    <div >
    <img src={"https://image.tmdb.org/t/p/w200/"+props.poster} alt="" />
</div>
)

    }
    
    export default FilmPoster;