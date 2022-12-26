import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ax from '../../utils/ax';
import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';

export const sendSms = createAsyncThunk('auth/sendSms', async ({phone}) => {
  try {
    const {data} = await ax.post('/send_sms', {phone});

    return data;
  } catch (e) {
    console.error(e);
  }
});

export const setCode = createAsyncThunk(
  'auth/setCode',
  async ({phone, code}) => {
    try {
      const {data} = await ax.post('/users/phone_login/', {phone, code});

      if (data.token) {
        console.log(data.token);
        await AsyncStorage.setItem('token', String(data.token));
      }

      await AsyncStorage.setItem('id', String(data.id));

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const registerUserOrDriver = createAsyncThunk(
  'auth/registerUser',
  async payload => {
    try {
      const {data} = await ax.post('/users/', payload);

      if (data.token) {
        await AsyncStorage.setItem('token', String(data.token));
      }
      await AsyncStorage.setItem('id', String(data.id));
      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const getCities = createAsyncThunk('auth/getCities', async () => {
  try {
    const {data} = await axios.get(
      'https://namaztimes.kz/ru/api/cities?id=almaty&type=json',
    );

    return data;
  } catch (e) {
    console.error(e);
  }
});

export const getIdUser = createAsyncThunk('auth/getIdUser', async () => {
  return await AsyncStorage.getItem('id');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: '',
    authorization: false,
  },
  reducers: {
    setUserId(state, {payload}) {
      state.userId = payload;
    },
    setAuthorization(state, {payload}) {
      state.authorization = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUserOrDriver.fulfilled, (state, action) => {
      if (action.payload) {
        state.userId = action.payload.id;
        state.authorization = true;
      }
    });
    builder.addCase(setCode.fulfilled, (state, action) => {
      if (action.payload) {
        state.userId = action.payload.id;
      }
      if (action.payload.is_exists) {
        state.authorization = true;
      }
    });
    builder.addCase(getIdUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.userId = action.payload;
        state.authorization = true;
      }
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    });
  },
});

export const {setUserId, setAuthorization} = authSlice.actions;

export default authSlice.reducer;
