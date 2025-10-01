import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  myBooks: [],
  searchResults: [],
  loading: false,
  error: null,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setMyBooks: (state, action) => {
      state.myBooks = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    borrowBook: (state, action) => {
      state.myBooks.unshift(action.payload);
    },
    returnBook: (state, action) => {
      state.myBooks = state.myBooks.filter(book => book.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setBooks,
  setMyBooks,
  setSearchResults,
  borrowBook,
  returnBook,
  setLoading,
  setError,
} = librarySlice.actions;

export default librarySlice.reducer;
