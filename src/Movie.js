import React from "react";
import "./style.css";

export default function Movie(props) {
    ///Loopar igenom stjärorna och visa upp img i en tomlista
    function getStars(nr_of_stars) {
        const starlist = []
        for (let i = 0; i < nr_of_stars; i++) {
            starlist.push(<img src="/star.png" alt="Star" className="float-right" />);
    }
    return starlist;

}

    
    return(
        ///Hämtar titel, betyg och ta bort-knappen, så det kan visas upp på hemsidan i Movielist
        <li className="list-group-item">
            {props.movie.title}
            <button id="deletebtn" className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteMovie(props.movie.id)}}>X</button>
            {getStars(props.movie.rating)}
        </li>
    )

}