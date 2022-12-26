import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import ax from '../../utils/ax';
import {getCargoCategories, getUser} from './MainSlice';

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async payload => {
    try {
      const {data} = await ax.post('/orders/', payload);

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
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
