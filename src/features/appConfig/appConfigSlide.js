import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
    isLoading: false,
    status: 'idle',
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async amount => {
//     const response = await fetchCount(amount);
//     return response.data;
//   },
// );

export const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {
        loading: (state, action) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const { loading, hideLoading } = appConfigSlice.actions;

export const isLoading = (state) => state.auth.isLoading;

export default appConfigSlice.reducer;
