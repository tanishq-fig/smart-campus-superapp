import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buses: [],
  shuttles: [],
  myBookings: [],
  liveTracking: {},
  loading: false,
  error: null,
};

const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    setBuses: (state, action) => {
      state.buses = action.payload;
    },
    setShuttles: (state, action) => {
      state.shuttles = action.payload;
    },
    setMyBookings: (state, action) => {
      state.myBookings = action.payload;
    },
    addBooking: (state, action) => {
      state.myBookings.unshift(action.payload);
    },
    cancelBooking: (state, action) => {
      const booking = state.myBookings.find(b => b.id === action.payload);
      if (booking) {
        booking.status = 'cancelled';
      }
    },
    updateLiveTracking: (state, action) => {
      state.liveTracking = { ...state.liveTracking, ...action.payload };
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
  setBuses,
  setShuttles,
  setMyBookings,
  addBooking,
  cancelBooking,
  updateLiveTracking,
  setLoading,
  setError,
} = transportSlice.actions;

export default transportSlice.reducer;
