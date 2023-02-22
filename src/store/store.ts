import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({ newsReducer, userReducer });

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
