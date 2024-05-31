import React, { useState, useEffect } from 'react';
import { useFilmContext } from '../../Context/FilmContext';
import Item from '../Item/Item';

const RelatedFilms = ({ selectedFilm }) => {

  const [similarFilms, setSimilarFilms] = useState([]);

  const films = useFilmContext();

  // Функция для поиска похожих фильмов
  const findSimilarMovies = () => {
    const similar = films.filter(film => {
      // Проверяем, что фильм не является выбранным фильмом
      if (film.id === selectedFilm.id) {
        return false;
      }

      // Подсчитываем количество совпадающих жанров
      const commonGenres = film.genres.filter(genreFilm =>
        selectedFilm.genres.some(genreSelected =>
          genreFilm.name === genreSelected.name
        )
      );

      // Подсчитываем количество общих параметров name
      const commonNamesCount = commonGenres.length;

      return commonNamesCount >= 2;
    });
    setSimilarFilms(similar);
  };

  useEffect(() => {
    findSimilarMovies();
  }, [selectedFilm]);


  return (
    <div>
      <h2>Фильмы похожие  на {selectedFilm.name}:</h2>
      {similarFilms.map((item) => (
        <Item
          film={item}
        />
      ))}

    </div>
  );
};

export default RelatedFilms;