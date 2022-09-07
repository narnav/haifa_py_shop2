import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNotes } from './noteAPI';

// State - data (init)
const initialState = {
    notes: []
};
// async (1)
// simple async method (component can call it...)
export const getNotesAsync = createAsyncThunk(
    'note/getNotes',
    async (token) => {
        const response = await getNotes(token);
        return response.data;
    }
);

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(getNotesAsync.fulfilled, (state, action) => {
                state.notes= action.payload
            });
    },
});

// export sync method
export const { logout } = noteSlice.actions;

// export any part of the state
export const selectNotes = (state) => state.note.notes;
// export the reducer to the applicaion
export default noteSlice.reducer;
