import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import ax from '../../utils/ax';
import {getCargoCategories, getUser} from './MainSlice';
import axios from 'axios';
import {Linking} from 'react-native';

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (payload, {dispatch}) => {
    try {
      const {data} = await ax.post('/orders/', payload);

      await dispatch(paymentCreate());
      console.log('test');

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const paymentCreate = createAsyncThunk(
  'order/paymentCreate',
  async () => {
    const payload = {
      merchantId: '14040723893387531',
      callbackUrl: 'https://62.217.178.234/api/v1/payments/callback',
      amount: 10000,
      demo: true,
      orderId: '123ggggg123',
    };

    try {
      const {data} = await axios.post(
        'https://ecommerce.pult24.kz/payment/create',
        payload,
        {
          headers: {
            Authorization:
              'Basic MTQwNDA3MjM4OTMzODc1MzE6U3ozYzJOaE05NGttaDlRQkFlSzI=',
          },
        },
      );

      await Linking.openURL(data.url);

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const getOrder = createAsyncThunk('order/getOrder', async () => {
  try {
    const {data} = await ax.get('/orders/');

    return data.features.slice(-1)[0];
  } catch (e) {
    console.error(e);
  }
});

export const getOrders = createAsyncThunk('order/getOrders', async () => {
  try {
    const {data} = await ax.get('/orders/get_driver_orders/');

    return data.features;
  } catch (e) {
    console.error(e);
  }
});

export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (payload, {getState}) => {
    const {order} = getState();

    try {
      const {data} = await ax.delete(`/orders/${order.order.id}/`);

      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    orders: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
