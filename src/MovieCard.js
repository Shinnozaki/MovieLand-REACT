import React from 'react'

const MovieCard = ({movieProp}) => {
  return (
    <div className="movie">

        <div>
            <p>{movieProp.Year}</p>
        </div>

        <div>
            <img src={movieProp.Poster !== 'N/A' ? movieProp.Poster :'https://via.placeholder.com/400'} alt="" />
        </div>

        <div>
            <span>
                {movieProp.Type}
            </span>
            <h3>
                {movieProp.Title}
            </h3>
        </div>

    </div>
  )
}

export default MovieCard