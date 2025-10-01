import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [],
    loading: false,
    error: null,
};

// Create the events slice
const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setEvents: (state, action) => {
            state.events = action.payload;
            state.loading = false;
        },
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        updateEvent: (state, action) => {
            const index = state.events.findIndex(event => event.id === action.payload.id);
            if (index !== -1) {
                state.events[index] = action.payload;
            }
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter(event => event.id !== action.payload);
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Export actions and reducer
export const { setLoading, setEvents, addEvent, updateEvent, deleteEvent, setError } = eventsSlice.actions;
export const selectEvents = (state) => state.events.events;
export const selectLoading = (state) => state.events.loading;
export const selectError = (state) => state.events.error;

export default eventsSlice.reducer;