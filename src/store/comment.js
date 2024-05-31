import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = []

export const comment = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment(state, action) {
            const { filmId, commentText } = action.payload;
            const today = new Date();
            state.push({ id: uuidv4(), filmId: filmId, commentText: commentText, date: today.toLocaleDateString(), user: "Анонимный пользователь" });
        }
    }
})

export  const {actions, reducer} = comment;