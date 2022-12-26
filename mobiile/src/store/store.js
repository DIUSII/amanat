import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slice/AuthSlice';
import mainReducer from './slice/MainSlice';
import orderReducer from './slice/OrdersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    main: mainReducer,
    order: orderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
