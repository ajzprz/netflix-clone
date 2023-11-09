import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: [],
  // filteredMovies: [],
  // filteredTvShows: [],
  // filteredOriginals: [], // Fixed the typo here
  loading: false, // Add loading state
  error: null, // Add error state
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovieDataStart: (state) => {
      state.loading = true;
      state.error = null; // Reset error when starting a new fetch
    },
    fetchMovieDataSuccess: (state, action) => {
      state.allMovies = action.payload;
      state.loading = false;
      state.error = null;
    },

    fetchMoviesDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMovieDataStart,
  fetchMovieDataSuccess,
  fetchMovieDataFailure,
} = movieSlice.actions;

export default movieSlice.reducer;
