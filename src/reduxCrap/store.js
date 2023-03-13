import { configureStore } from '@reduxjs/toolkit';
import counterReducerNoteThisFileCanBeNamedAnything from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducerNoteThisFileCanBeNamedAnything,
  },
});