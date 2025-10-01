import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reports: [],
  myReports: [],
  loading: false,
  error: null,
};

const cleanlinessSlice = createSlice({
  name: 'cleanliness',
  initialState,
  reducers: {
    setReports: (state, action) => {
      state.reports = action.payload;
    },
    setMyReports: (state, action) => {
      state.myReports = action.payload;
    },
    addReport: (state, action) => {
      state.myReports.unshift(action.payload);
      state.reports.unshift(action.payload);
    },
    updateReportStatus: (state, action) => {
      const { reportId, status } = action.payload;
      const report = state.reports.find(r => r.id === reportId);
      if (report) {
        report.status = status;
      }
      const myReport = state.myReports.find(r => r.id === reportId);
      if (myReport) {
        myReport.status = status;
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
  setReports,
  setMyReports,
  addReport,
  updateReportStatus,
  setLoading,
  setError,
} = cleanlinessSlice.actions;

export default cleanlinessSlice.reducer;