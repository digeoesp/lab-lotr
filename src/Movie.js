import React from 'react'


const Movie = (props) => {
    return (
        <div>
           <h1>{props.title}</h1>
           <p>{props.hours}hrs {props.minutes}min</p>
        </div>
    )
}

export default Movie
