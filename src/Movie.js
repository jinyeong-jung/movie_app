import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

/* Functional Component w/ Object Destructuring

 function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}
*/


// Functional Component w/ Arrow Function of ES6
const Movie = (props) => {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={props.poster} alt={props.title} />
            </div>
            <div className="Movie__Columns">
                <h1>{props.title}</h1>
                <div className="Movie__Genres">
                    {props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={props.synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;