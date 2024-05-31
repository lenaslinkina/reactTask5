import React from 'react';
import FavoritesFilms from '../FavoritesFilms/FavoritesFilms';
import WatchLaterFilm from '../WatchLaterFilm/WatchLaterFilm';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { favorites, watchLaterFilm } = useSelector(state => state)
  return (
    <div className="sidebar">
      <div className="favoritWatchLaterFilm">
        <FavoritesFilms favorites={favorites} />
        <WatchLaterFilm films={watchLaterFilm} />
      </div>
      
    </div>
  );
};

export default Sidebar;