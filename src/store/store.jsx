import { reducer as FavoritReducer } from './favoritFilm'
import { reducer as watchLaterFilmReducer } from './watchLaterFilm'
import { reducer as Comments } from './comment'
import { configureStore, combineReducers } from '@reduxjs/toolkit'



const reducers = combineReducers({
  favorites: FavoritReducer,
  watchLaterFilm: watchLaterFilmReducer,
  comments: Comments

});

export const store = configureStore({
  reducer: reducers,
});

export default store;
