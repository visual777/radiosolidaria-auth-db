import { createSlice } from "@reduxjs/toolkit";
import { getVideosRadio, getVideosYoutube } from "./operations";

const initialState = {
  videosRadio: [],
  videosYoutube: [],
  isLoading: false,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideosRadio.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideosRadio.fulfilled, (state, { payload }) => {
        state.videosRadio = payload;
        state.isLoading = false;
      })
      .addCase(getVideosRadio.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(getVideosYoutube.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideosYoutube.fulfilled, (state, { payload }) => {
        state.videosYoutube = payload;
        state.isLoading = false;
      })
      .addCase(getVideosYoutube.rejected, (state, _) => {
        state.isLoading = false;
      });
  },
});

export const videosReducer = videoSlice.reducer;
