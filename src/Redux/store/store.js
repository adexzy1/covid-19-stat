import { configureStore } from '@reduxjs/toolkit';
import covidStatSlice from '../slice/covidStatSlice';

const store = configureStore({
  reducer: {
    covidStat: covidStatSlice,
  },
});

export default store;
