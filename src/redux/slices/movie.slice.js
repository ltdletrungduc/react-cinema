import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieAPI } from "../../api/movie.api";
import { payloadCreator } from "../../utils/helpers";

// GET MOVIE LIST (ALL)
export const getMovie = createAsyncThunk(
  "movie/get",
  payloadCreator(movieAPI.getMovies)
);

const initialState = {
  movieList: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovieList: (state, action) => {
      state.movieList = ["Test Array"];
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMovieList } = movieSlice.actions;

export default movieSlice.reducer;
