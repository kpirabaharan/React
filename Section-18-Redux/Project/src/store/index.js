import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      // Default action parameter is payload
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// configureStore is a better way to deal with multiple reducers.
// createStore is deprecated anyways
const store = configureStore({
  // reducer: { counter: counterSlice.reducer }, // For mulitple reducers
  // We only have one in this scenario
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
