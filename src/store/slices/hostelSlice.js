import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomInfo: null,
  maintenanceRequests: [],
  announcements: [],
  loading: false,
  error: null,
};

const hostelSlice = createSlice({
  name: 'hostel',
  initialState,
  reducers: {
    setRoomInfo: (state, action) => {
      state.roomInfo = action.payload;
    },
    setMaintenanceRequests: (state, action) => {
      state.maintenanceRequests = action.payload;
    },
    addMaintenanceRequest: (state, action) => {
      state.maintenanceRequests.unshift(action.payload);
    },
    updateMaintenanceStatus: (state, action) => {
      const request = state.maintenanceRequests.find(r => r.id === action.payload.id);
      if (request) {
        request.status = action.payload.status;
      }
    },
    setAnnouncements: (state, action) => {
      state.announcements = action.payload;
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
  setRoomInfo,
  setMaintenanceRequests,
  addMaintenanceRequest,
  updateMaintenanceStatus,
  setAnnouncements,
  setLoading,
  setError,
} = hostelSlice.actions;

export default hostelSlice.reducer;
