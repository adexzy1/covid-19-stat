import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCovidStat = createAsyncThunk('stat/fetchCovidStat', async () => {
  const url = 'https://covidnigeria.herokuapp.com/api';
  const response = await fetch(url);
  const data = await response.json();

  return data;
});

const initialState = {
  covidStat: {},
  loading: 'idle',
};

const covidStatSlice = createSlice({
  name: 'covidStatSlice',
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      fetchCovidStat.pending,
      (state, { meta: { requestStatus } }) => {
        state.loading = requestStatus;
      }
    );

    builder.addCase(
      fetchCovidStat.fulfilled,
      (state, { payload, meta: { requestStatus } }) => {
        state.covidStat = payload.data;
        state.loading = requestStatus;
      }
    );

    builder.addCase(
      fetchCovidStat.rejected,
      (state, { meta: { requestStatus } }) => {
        state.loading = requestStatus;
      }
    );
  },
});

export default covidStatSlice.reducer;
export { fetchCovidStat };
