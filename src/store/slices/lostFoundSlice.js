import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lostItems: [],
  foundItems: [],
  myItems: [],
  claims: [],
  loading: false,
  error: null,
};

const lostFoundSlice = createSlice({
  name: 'lostFound',
  initialState,
  reducers: {
    setLostItems: (state, action) => {
      state.lostItems = action.payload;
    },
    setFoundItems: (state, action) => {
      state.foundItems = action.payload;
    },
    setMyItems: (state, action) => {
      state.myItems = action.payload;
    },
    addItem: (state, action) => {
      state.myItems.unshift(action.payload);
      if (action.payload.type === 'lost') {
        state.lostItems.unshift(action.payload);
      } else {
        state.foundItems.unshift(action.payload);
      }
    },
    setClaims: (state, action) => {
      state.claims = action.payload;
    },
    addClaim: (state, action) => {
      state.claims.unshift(action.payload);
    },
    updateClaimStatus: (state, action) => {
      const claim = state.claims.find(c => c.id === action.payload.id);
      if (claim) {
        claim.status = action.payload.status;
      }
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
  setLostItems,
  setFoundItems,
  setMyItems,
  addItem,
  setClaims,
  addClaim,
  updateClaimStatus,
  setLoading,
  setError,
} = lostFoundSlice.actions;

export default lostFoundSlice.reducer;