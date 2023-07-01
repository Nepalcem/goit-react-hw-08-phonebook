import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthorizeHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizeHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'authorize/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // setAuthorizeHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'authorize/login',
  async (credentials, thunkAPI) => {}
);

export const logOut = createAsyncThunk(
  'authorize/logout',
  async (_, thunkAPI) => {}
);

export const refreshUser = createAsyncThunk(
  'authorize/refresh',
  async (_, thunkAPI) => {}
);
