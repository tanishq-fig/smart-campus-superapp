import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    events: [],
    loading: false,
    error: null,
};

// Async thunks for CRUD operations
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    const response = await axios.get('/api/events');
    return response.data;
});

export const addEvent = createAsyncThunk('events/addEvent', async (event) => {
    const response = await axios.post('/api/events', event);
    return response.data;
});

export const updateEvent = createAsyncThunk('events/updateEvent', async (event) => {
    const response = await axios.put(`/api/events/${event.id}`, event);
    return response.data;
});

export const deleteEvent = createAsyncThunk('events/deleteEvent', async (eventId) => {
    await axios.delete(`/api/events/${eventId}`);
    return eventId;
});

// Create the events slice
const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addEvent.fulfilled, (state, action) => {
                state.events.push(action.payload);
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                const index = state.events.findIndex(event => event.id === action.payload.id);
                if (index !== -1) {
                    state.events[index] = action.payload;
                }
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.events = state.events.filter(event => event.id !== action.payload);
            });
    },
});

// Export actions and reducer
export const selectEvents = (state) => state.events.events;
export const selectLoading = (state) => state.events.loading;
export const selectError = (state) => state.events.error;

export default eventsSlice.reducer;