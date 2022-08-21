import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCovidStat = createAsyncThunk('stat/fetchCovidStat', async () => {
  const url = 'https://covidnigeria.herokuapp.com/api';
  const response = await fetch(url);
  const data = await response.json();

  return data;
});

const initialState = {
  covidStat: {},
  loading: true,
};

const covidStatSlice = createSlice({
  name: 'covidStatSlice',
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCovidStat.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCovidStat.fulfilled, (state, { payload }) => {
      state.covidStat = payload.data;
      state.loading = false;
    });

    builder.addCase(fetchCovidStat.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default covidStatSlice.reducer;
export { fetchCovidStat };
