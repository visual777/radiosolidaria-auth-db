import { configureStore } from '@reduxjs/toolkit'
import { videosReducer } from './video/videoSlice';

const store = configureStore({
    reducer: {
        videos: videosReducer,
    },
  });
  
  export default store;