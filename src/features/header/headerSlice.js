import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
    name: 'header',
    initialState: null,
    reducers: {
      selectComponent: (state, action) => {
        return action.payload;
      },
    },
  });
  
  export const { selectComponent } = headerSlice.actions;
  export default headerSlice.reducer;