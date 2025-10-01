import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

const initialState = {
  mode: Appearance.getColorScheme() || 'light', // 'light' or 'dark'
  colors: {
    light: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      background: '#F7F7F7',
      card: '#FFFFFF',
      text: '#333333',
      textSecondary: '#666666',
      border: '#E0E0E0',
      success: '#51CF66',
      warning: '#FFD93D',
      error: '#FF6B6B',
      info: '#4ECDC4',
    },
    dark: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      background: '#121212',
      card: '#1E1E1E',
      text: '#FFFFFF',
      textSecondary: '#B0B0B0',
      border: '#333333',
      success: '#51CF66',
      warning: '#FFD93D',
      error: '#FF6B6B',
      info: '#4ECDC4',
    },
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.mode;
export const selectColors = (state) => state.theme.colors[state.theme.mode];

export default themeSlice.reducer;
