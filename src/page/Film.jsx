import React from 'react';
import Films from '../Components/Films/Films';
import { useFilmContext } from '../Context/FilmContext';
const Film = () => {

    const movies = useFilmContext();

    return (
        <div>
            <Films filmsData={movies} />
        </div>
    );
}

export default Film;