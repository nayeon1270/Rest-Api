import React from 'react';

const Movie = (props) => {
    return (
        <div className="movie">
            <div className="movie-title">{props.movie.title}
                <span className="movie-year">{props.movie.year}</span>
            </div>
            
            <div className="removeBtn"><button onClick={() => props.removeMovie(props.movie.id)}>삭제</button></div>
        </div>
    );
};

export default Movie;