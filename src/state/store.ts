import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice.ts';
import colorSchemeReducer from './colorScheme/colorSchemeSlice.ts';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    colorScheme:colorSchemeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch