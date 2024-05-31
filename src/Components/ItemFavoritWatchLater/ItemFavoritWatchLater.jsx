import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as actionsFavorit } from '../../store/favoritFilm';
import { actions as actionsWatchLater } from '../../store/watchLaterFilm';
import IconButton from "@mui/material/IconButton";
import Like from '@mui/icons-material/Favorite';
import Dislike from '@mui/icons-material/FavoriteBorder';
import WatchLaterActiv from '@mui/icons-material/WatchLater';
import WatchLater from '@mui/icons-material/WatchLaterOutlined';


const ItemFavoritWatchLater = ({ film }) => {

    const favorites = useSelector(state => state.favorites);
    const watchLaterFilm = useSelector(state => state.watchLaterFilm);
    const dispatch = useDispatch()
    const isExistFaworit = favorites.some(f => f.id === film.id)
    const isExistWatchLater = watchLaterFilm.some(f => f.id === film.id)

    const handleToggleFavorites = () => {
        dispatch(actionsFavorit.toggleFavorites(film))
    }
    const handleToggleWatchLater = () => {
        dispatch(actionsWatchLater.toggleWatchLater(film))
    }

    return (
        <div>
            {isExistFaworit === false
                ? <IconButton ><Dislike onClick={handleToggleFavorites} /></IconButton>
                : <IconButton size="large" color="red"><Like onClick={handleToggleFavorites} /></IconButton>}
            {isExistWatchLater === false
                ? <IconButton ><WatchLater onClick={handleToggleWatchLater} /></IconButton>
                : <IconButton size="large" color="red"><WatchLaterActiv onClick={handleToggleWatchLater} /></IconButton>}
        </div>
    )
}
export default ItemFavoritWatchLater;