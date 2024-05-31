import React, { createContext, useContext } from 'react';
import moviesdata from '../Components/Films/moviesdata.json';

// Создаем контекст
export const FilmContext = createContext();

// Создаем провайдер контекста
export const FilmProvider = ({ children }) => {
  return <FilmContext.Provider value={moviesdata.docs}>{children}</FilmContext.Provider>;
};

// Создаем хук для использования контекста
export const useFilmContext = () => useContext(FilmContext);
