import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { INews } from "../../models/INews";

interface NewsState {
	loading: boolean;
	error: string;
	news: INews[];
}

export const fetchNews = createAsyncThunk("news/fetchNews", async (param, thunkAPI) => {
	try {
		const url =
			"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c15397867cbd43a9baf80b226e78792a";
		const { data } = await axios.get(url);
		return data.articles;
	} catch (error) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
});

const initialState = {
	loading: true,
	error: "",
	news: [],
} as NewsState;

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchNews.pending.type]: (state) => {
			state.loading = true;
		},

		[fetchNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
			state.loading = false;
			state.news = action.payload;
			state.error = "";
		},

		[fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default newsSlice.reducer;
