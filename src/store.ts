import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import userReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a typed version of useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
