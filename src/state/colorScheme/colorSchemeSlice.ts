import { createSlice } from '@reduxjs/toolkit';

import { ColorSchemeInitialState, ColorSchemeType } from '../../types/colorSchemeTypes.ts';


const defaultColorScheme:ColorSchemeType = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initialState:ColorSchemeInitialState = {
  color:defaultColorScheme
}

const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers:{
changeColorScheme: (state) => {
  state.color = state.color === 'light' ? 'dark' : 'light';
}
  }
})

export const {changeColorScheme} = colorSchemeSlice.actions
export default colorSchemeSlice.reducer;