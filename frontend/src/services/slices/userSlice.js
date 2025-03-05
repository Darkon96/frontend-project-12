/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import routes from '../../routes';

const initialState = {
  isAuthenticated: false,
  token: (localStorage.getItem('userId')) ? JSON.parse(localStorage.getItem('userId')).token : '',
  username: (localStorage.getItem('userId')) ? JSON.parse(localStorage.getItem('userId')).username : '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      localStorage.setItem('userId', JSON.stringify(action.payload));
      const { token, username } = action.payload;
      state.token = token;
      state.username = username;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      localStorage.removeItem('userId');
      window.location.href = routes.pages.loginPage();
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
