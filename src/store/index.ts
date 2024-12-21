import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.store';
import apiReducer from './api.store';
import userReducer from './user.store';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    api: apiReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
