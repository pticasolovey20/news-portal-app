import { createSlice } from "@reduxjs/toolkit";

interface UserState {
	email: string;
}

const initialState = {
	email: "",
} as UserState;

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserAction(state, action) {
			state.email = action.payload;
		},

		removeUserAction(state) {
			state.email = "";
		},
	},
});

export const { setUserAction, removeUserAction } = userSlice.actions;
export default userSlice.reducer;
