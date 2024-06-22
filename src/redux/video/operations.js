import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getVideosRadio = createAsyncThunk(
  "videos/radio",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/videos/last/radio");
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getVideosYoutube = createAsyncThunk(
  "videos/kids",
  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`/api/videos/last/${category}`);
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
