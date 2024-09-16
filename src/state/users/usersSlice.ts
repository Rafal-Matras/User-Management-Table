import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchName, User, UsersInitialState } from '../../types/usersTypes.ts';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users/';

const initialState: UsersInitialState = {
  users: [],
  status: 'idle',
  error: null,
  searchName: 'none',
  searchText: '',
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    try {
      const results: Response = await fetch(USERS_URL);
      return await results.json();
    } catch (err) {
      return (err as Error).message;
    }
  });

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    editSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    editSearchName: (state, action: PayloadAction<SearchName>) => {
      state.searchName = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Something wrong ty again';
      });
  },
});

export const {editSearchText,editSearchName} = usersSlice.actions;
export default usersSlice.reducer;