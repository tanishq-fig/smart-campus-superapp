import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  myListings: [],
  categories: [],
  loading: false,
  error: null,
};

const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setMyListings: (state, action) => {
      state.myListings = action.payload;
    },
    addListing: (state, action) => {
      state.myListings.unshift(action.payload);
      state.products.unshift(action.payload);
    },
    removeListing: (state, action) => {
      state.myListings = state.myListings.filter(item => item.id !== action.payload);
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
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
  setProducts,
  setMyListings,
  addListing,
  removeListing,
  setCategories,
  setLoading,
  setError,
} = marketplaceSlice.actions;

export default marketplaceSlice.reducer;
