import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slices/movie.slice";

export const store = configureStore({
  reducer: { movieReducer },
});
