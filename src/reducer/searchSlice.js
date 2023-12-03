import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  keyword: "",
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
      //console.log(state.keyword);
    },
  },
});

export const { setKeyword } = searchSlice.actions;
export default searchSlice.reducer;
