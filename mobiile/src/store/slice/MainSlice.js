import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ax from '../../utils/ax';
import {setAuthorization} from './AuthSlice';
import * as RootNavigation from '../../../navigation/RootNavigation';

export const getUser = createAsyncThunk(
  'main/getUser',
  async (payload, {dispatch, getState}) => {
    const {auth} = getState();

    try {
      const {data} = await ax.get(`/users/${auth.userId}/`);
      return data;
    } catch (e) {
      dispatch(setAuthorization(false));
      console.error(e);
    }
  },
);

export const updateUser = createAsyncThunk(
  'main/updateUser',
  async (payload, {getState, dispatch}) => {
    try {
      const {main} = getState();

      const {data} = await ax.patch(`/users/${main.user.id}/`, payload);

      await dispatch(getUser());

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const getCargoCategories = createAsyncThunk(
  'main/getCargoCategories',
  async () => {
    try {
      const {data} = await ax.get('/cargo_cats/');

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const addCard = createAsyncThunk(
  'main/addCard',
  async (payload, {dispatch}) => {
    try {
      const {data} = await ax.post('/bank_cards/', payload);

      dispatch(getCard());

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const getCard = createAsyncThunk('main/addCard', async () => {
  try {
    const {data} = await ax.get('/bank_cards/');
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
});

export const logOut = createAsyncThunk(
  'main/logOut',
  async (payload, {dispatch}) => {
    await AsyncStorage.clear();
    dispatch(setAuthorization(false));
    RootNavigation.closeDrawer();
  },
);

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    user: {
      properties: {},
    },
    cargoCategories: null,
    mapOrderAddress: {text: '', coordinates: []},
  },
  reducers: {
    setMapOrderAddress(state, {payload}) {
      state.mapOrderAddress = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getCargoCategories.fulfilled, (state, action) => {
      state.cargoCategories = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {setMapOrderAddress} = mainSlice.actions;

export default mainSlice.reducer;
