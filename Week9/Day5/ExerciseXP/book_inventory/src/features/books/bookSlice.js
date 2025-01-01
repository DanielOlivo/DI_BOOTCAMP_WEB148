import { createSelector, createSlice } from "@reduxjs/toolkit";
import bookList from "./bookList";

const initialState = {
    books: bookList,
    genre: 'all'
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        selectGenre: (state, action) => {
            state.genre = action.payload;
        }
    }
})

export const selectAllBooks = state => state.books.books
export const selectSelectedGenre = state => state.books.genre

export const selectAllGenres = createSelector(
    [selectAllBooks],
    (books) => [...new Set(books.map(({genre}) => genre))]
)

export default bookSlice.reducer;
export const { selectGenre } = bookSlice.actions;