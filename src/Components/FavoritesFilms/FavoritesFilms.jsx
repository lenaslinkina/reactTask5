import React from 'react';
import { Link } from 'react-router-dom';
import ItemFavoritWatchLater from '../ItemFavoritWatchLater/ItemFavoritWatchLater';
const FavoritesFilms = ({ favorites }) => {

    return (
        <div>
            <h2>Избранные фильмы</h2>
            {favorites.map((favorite) => (
                <div key={favorite.id} className='favoritFilms'>
                    <Link to={`/films/${favorite.id}`} state={favorite}>
                        <h3>{favorite.name}</h3>
                    </Link>
                    <p>Рейтинг: {favorite.rating.kp}</p>
                    <ItemFavoritWatchLater film={favorite} />
                </div>
            ))}
        </div>
    );
};

export default FavoritesFilms;
