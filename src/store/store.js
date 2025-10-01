import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import canteenReducer from './slices/canteenSlice';
import cleanlinessReducer from './slices/cleanlinessSlice';
import lostFoundReducer from './slices/lostFoundSlice';
import eventsReducer from './slices/eventsSlice';
import gamificationReducer from './slices/gamificationSlice';
import libraryReducer from './slices/librarySlice';
import hostelReducer from './slices/hostelSlice';
import transportReducer from './slices/transportSlice';
import academicReducer from './slices/academicSlice';
import marketplaceReducer from './slices/marketplaceSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    canteen: canteenReducer,
    cleanliness: cleanlinessReducer,
    lostFound: lostFoundReducer,
    events: eventsReducer,
    gamification: gamificationReducer,
    library: libraryReducer,
    hostel: hostelReducer,
    transport: transportReducer,
    academic: academicReducer,
    marketplace: marketplaceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});