import React from 'react';
import { Link } from 'react-router-dom';
import ItemFavoritWatchLater from '../ItemFavoritWatchLater/ItemFavoritWatchLater';

const WatchLaterFilm = ({ films }) => {

    return (
        <div>
            <h2>Смотреть позже</h2>
            {films.map((film, index) => (
                <div key={film.id} className='favoritFilms'>
                    <Link to={`/films/${film.id}`} state={film}>
                        <h3>{film.name}</h3>
                    </Link>
                    <p>Рейтинг: {film.rating.kp}</p>
                    <ItemFavoritWatchLater film={film} />
                </div>
            ))}
        </div>
    );
};

export default WatchLaterFilm;
