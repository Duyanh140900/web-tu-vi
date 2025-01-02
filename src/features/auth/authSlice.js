import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { fetchDataAccount } from './authApi';

const initialState = {
  authCredentials: null,
  accessToken: null,
  userInfo: null,
  status: 'idle',
};

export const getDataUserAsync = createAsyncThunk(
  'auth/fetchDataAccount',
  async ()  => {
    const response = await fetchDataAccount();
    return response;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.accessToken = action.payload
    },
    logout: state => {
      state.accessToken = null;
      state.userInfo = null;
    },
    setDataProfile: (state, action) => {
      state.userInfo = action.payload;
    }
  },
    extraReducers: builder => {
      builder
        .addCase(getDataUserAsync.pending, state => {
        })
        .addCase(getDataUserAsync.fulfilled, (state, action) => {
          state.userInfo = action.payload;
        });
    },
});

export const {login, logout, setDataProfile} = authSlice.actions;

export const authCredentials = state => state.auth.authCredentials;

// export const incrementIfOdd = amount => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default authSlice.reducer;
