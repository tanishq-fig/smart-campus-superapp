import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import canteenReducer from './slices/canteenSlice';
import cleanlinessReducer from './slices/cleanlinessSlice';
import lostFoundReducer from './slices/lostFoundSlice';
import eventsReducer from './slices/eventsSlice';
import gamificationReducer from './slices/gamificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    canteen: canteenReducer,
    cleanliness: cleanlinessReducer,
    lostFound: lostFoundReducer,
    events: eventsReducer,
    gamification: gamificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});