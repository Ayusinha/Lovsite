import { configureStore } from '@reduxjs/toolkit';
// import your reducers here
// import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    // user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 