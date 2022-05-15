import React, {useState, useRef} from "react";
import Movie from "./Movie";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const titleRef = useRef();
    const ratingRef = useRef();

    function addMovie(e) { 
        ///Ger alert om titel eller betyg inte fylls i. Går den igenom ska användaren innehåll läggas i listan movies.
        e.preventDefault();
            if (titleRef.current.value <= 0) {
                window.alert("Du måste ange en titel för att kunna spara filmen")
            } else if (ratingRef.current.value <= 0) {
                window.alert("Du måste ange ett betyg för att kunna spara filmen")
            } else {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newId,
                title: titleRef.current.value,
                rating: ratingRef.current.value
            }])
     
     
            ///Nollställer formuläret
            titleRef.current.value = "";
            ratingRef.current.value = "";
        }
    }

    function deleteMovie(id) {
        ///Tar bort id från listan movies.
        setMovies(movies.filter((item) => item.id !== id));

    }


    function ASC() {
        ///Funktionen sorterar efter bokstavsordning.
        const order = movies.sort(function(a, b) {
            if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
           })
           setMovies(Array.from(order))
        
    }

    function Grades() {
        ///Funktionen sorterar efter största betyg.
        const grade = movies.sort((a, b) => b.rating - a.rating);
        setMovies(Array.from(grade))
    }


    return (
        ///All html kod som ska visas upp på hemsidan
        <div>
            <form>
                <fieldset>
                    <legend> Lägg till en film</legend>

                    <label for="title-field">Titel:</label>
                    <input type="text"  className="form-control" ref={titleRef}></input>

                    <label for="rating-field">Betyg:</label>

                    <select type=" text"  className="form-control" ref={ratingRef}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button type="submit" className="btn btn-success mt-3" onClick={addMovie}>Spara film</button>
                </fieldset>
            </form>

            <br></br>
            <hr></hr>

            <h2>Inlagda Filmer</h2>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie}/>) }

            </ul>
            <br></br>
            <button type="button" id="ASC" className="btn btn-primary" onClick={ASC}>Alfabetisk ordning</button>
            <button type="button" id="Grades"className="btn btn-primary" onClick={Grades}>Betygsordning</button>
            
        </div>
    )
}