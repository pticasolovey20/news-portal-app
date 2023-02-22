import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { setUserAction } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Container, Box, Typography, Button } from "@mui/material";
import { TextFieldComponent } from "../components/TextFieldComponent";

export const AuthPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUserAction({
						email: user.email,
					})
				);

				localStorage.setItem("user", JSON.stringify(user));

				navigate("/profile");
			})
			.catch(() => setError("Email/Password is wrong"));
	};

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<Container maxWidth="xs" sx={{ marginTop: "300px" }}>
			<form onSubmit={handleSubmit}>
				<TextFieldComponent
					label="Email"
					type="email"
					onChange={handleUsernameChange}
					value={email}
				/>
				<TextFieldComponent
					label="Password"
					type="password"
					onChange={handlePasswordChange}
					value={password}
				/>
				{error && (
					<Typography variant="body2" color="error" fontSize={18} align="center" mb={1}>
						{error}
					</Typography>
				)}
				<Box>
					<Button fullWidth variant="contained" type="submit">
						LOGIN
					</Button>
				</Box>
			</form>
		</Container>
	);
};
