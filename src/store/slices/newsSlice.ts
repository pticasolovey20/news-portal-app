import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { INews } from "../../models/INews";

interface NewsState {
	loading: boolean;
	error: string;
	news: INews[];
}

export const fetchNews = createAsyncThunk("news/fetchNews", async (amount: number, thunkAPI) => {
	try {
		const newsStorage = JSON.parse(localStorage.getItem("news")!);
		if (newsStorage) {
			const url = `https://63fb565d7a045e192b6748ea.mockapi.io/news?limit=${amount}&page=1`;
			const { data } = await axios.get(url);
			return data;
		} else {
			return null;
		}
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
	reducers: {
		deleteNewsAction(state, action: PayloadAction<string>) {
			const idToRemove = action.payload;
			state.news = state.news.filter((item) => item.title !== idToRemove);
		},
	},
	extraReducers: {
		[fetchNews.pending.type]: (state) => {
			state.loading = true;
		},

		[fetchNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
			state.loading = false;
			const newNews = action.payload.filter(
				(newsItem) => !state.news.some((item) => item.title === newsItem.title)
			);
			state.news = [...state.news, ...newNews];
			state.error = "";
		},

		[fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { deleteNewsAction } = newsSlice.actions;
export default newsSlice.reducer;
