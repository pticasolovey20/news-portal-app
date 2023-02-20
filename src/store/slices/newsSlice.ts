import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async (param, thunkAPI) => {});

const initialState = {};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
});

export default newsSlice.reducer;
export const {} = newsSlice.actions;
