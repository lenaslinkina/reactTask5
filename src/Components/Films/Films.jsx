import React, { useState } from 'react';
import Item from '../Item/Item';

const Films = ({ filmsData }) => {

  const [films, setFilms] = useState(filmsData)
  console.log(filmsData)

  const [selectedGenres, setSelectedGenres] = useState([]);
  const uniqueGenres = {};

  filmsData.forEach((movie) => {
    if (movie.genres) {
      movie.genres.forEach((genre) => {
        // Помещаем каждый жанр в объект как ключи (это исключит дубликаты)
        uniqueGenres[genre.name] = true;
      });
    }
  });
  
  const uniqueGenresArray = Object.keys(uniqueGenres);

  const handleSort = (order) => {
    const sortedFilms = [...films].sort((a, b) => {
      if (order === 'ascending') {
        return parseFloat(a.rating.kp) - parseFloat(b.rating.kp);
      } else {
        return parseFloat(b.rating.kp) - parseFloat(a.rating.kp);
      }
    });
    setFilms(sortedFilms);
  };

  const handleFilterByGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(item => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  const filteredFilms = selectedGenres.length > 0 ? films.filter(film =>
    selectedGenres.every(selectedGenre =>
      film.genres.some(genre => genre.name === selectedGenre)
    )
  ) : films;


  return (
    <div className='container'>
      <div className='allfilms'>
        <h1>Весь каталог фильмов</h1>
        <label htmlFor="sort">Сортировка по рейтингу: </label>
        <select id="sort" onChange={(e) => handleSort(e.target.value)}>
          <option value="">Выберите вариант</option>
          <option value="ascending">По возрастанию</option>
          <option value="descending">По убыванию</option>
        </select>
        <p/>
        <label>Выберите жанр: </label>
        <div className="checkbox-group">
          {uniqueGenresArray.map((item, index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={index} value={item} onChange={() => handleFilterByGenre(item)} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        {filteredFilms.map(item => (
          <Item
            film={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Films;
