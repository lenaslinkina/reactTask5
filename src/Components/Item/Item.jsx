import React from 'react';
import { Link } from 'react-router-dom';
import ItemFavoritWatchLater from '../ItemFavoritWatchLater/ItemFavoritWatchLater';

const Item = ({ film }) => {

  return (
    <div className="films">

      {film && (
        <Link to={`/films/${film.id}`} state={film}>
          <h3>{film.name}</h3>
        </Link>
      )}
      {!!film.rating.kp && (
        <div> <h4>Рейтинг {film.rating.kp}</h4></div>)}
      {!!film.genres && (
        <div> <b>Жанр:</b> {film.genres.map((item, index) => (
          <span key={index}>
            {item.name}
            {index !== film.genres.length - 1 && ', '}
          </span>
        ))}</div>
      )}
      {!!film.description && (
        <div>
          <b>Описание: </b>
          {film.description}</div>)}

      {!!film.persons && (
        <div>
          <b>В ролях: </b>
          {film.persons.filter(item => item.enProfession === 'actor').slice(0, 5).map((actor, index) => (
            <span key={index}>{actor.name}{index !== film.persons.length - 1 && ', '}</span>
          ))}
        </div>)}
      <ItemFavoritWatchLater film={film} />
    </div>
  )
};

export default Item;