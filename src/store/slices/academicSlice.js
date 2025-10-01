import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timetable: [],
  attendance: [],
  grades: [],
  courses: [],
  loading: false,
  error: null,
};

const academicSlice = createSlice({
  name: 'academic',
  initialState,
  reducers: {
    setTimetable: (state, action) => {
      state.timetable = action.payload;
    },
    setAttendance: (state, action) => {
      state.attendance = action.payload;
    },
    setGrades: (state, action) => {
      state.grades = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
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
  setTimetable,
  setAttendance,
  setGrades,
  setCourses,
  setLoading,
  setError,
} = academicSlice.actions;

export default academicSlice.reducer;
