import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from '../CommentForm/CommentList';
import { actions as actionAddComment } from '../../store/comment';
import RelatedFilms from '../RelatedFilms/RelatedFilms';
import { useFilmContext } from '../../Context/FilmContext';
import ItemFavoritWatchLater from '../ItemFavoritWatchLater/ItemFavoritWatchLater';


const FilmDetail = () => {

    const { id } = useParams(); // Получаем id фильма из маршрута
    const allfilms = useFilmContext(); // Получаем все фильмы из контекста
    // Приведем f.id к строке перед поиском
    const film = allfilms.find(f => f.id.toString() === id.toString());
    const comment = useSelector(state => state.comments);
    const dispatch = useDispatch()
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Добавляем комментарий только если он не пустой
        if (newComment.trim()) {
            console.log(newComment)
            handleAddComment(newComment); // Передаем новый комментарий наружу
            setNewComment(''); // Очищаем поле ввода после отправки
        }
    };

    const handleAddComment = (text) => {
        console.log(text)
        dispatch(actionAddComment.addComment({ filmId: film.id, commentText: text }))
    }

    return (
        <div className="filmdetail">
            <h2>Название: {film.name}</h2>
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
                    {film.persons.filter(item => item.enProfession === 'actor').map((actor, index) => (
                        <span key={index}>{actor.name}{index !== film.persons.length - 1 && ', '}</span>
                    ))}
                </div>)}
            {!!film.persons && (
                <div>
                    <b>Режиссеры: </b>
                    {film.persons.filter(item => item.enProfession === 'director').map((actor, index) => (
                        <span key={index}>{actor.name}{index !== film.persons.length - 1 && ', '}</span>
                    ))}
                </div>)}
            {!!film.persons && (
                <div>
                    <b>Продюсеры: </b>
                    {film.persons.filter(item => item.enProfession === 'producer').map((actor, index) => (
                        <span key={index}>{actor.name}{index !== film.persons.length - 1 && ', '}</span>
                    ))}
                </div>)}
            <img src={film.poster.url} alt="Описание изображения" width="130" height="200" />
            <ItemFavoritWatchLater film={film} />
            {<CommentList comments={comment.filter(x => x.filmId === film.id)} />}
            <form className="formComment" onSubmit={handleSubmit}>
                <textarea className="CommentField"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Введите ваш комментарий"
                />
                <br />
                <button className="commentButton" type="submit">Добавить комментарий</button>
            </form>
            <RelatedFilms selectedFilm={film} />
        </div>
    );
};

export default FilmDetail;