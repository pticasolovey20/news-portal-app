import { useEffect } from "react";
import { useAppDispatch } from "./hooks/redux";
import { setUserAction } from "./store/slices/userSlice";

import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthPage } from "./pages/AuthPage";
import { Footer } from "./components/Footer";

export const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!localStorage.getItem("user")) return;

		const user = JSON.parse(localStorage.getItem("user")!);

		if (user) {
			dispatch(
				setUserAction({
					email: user.email,
				})
			);
		}
	}, [dispatch]);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<Header />
			<Container sx={{ marginTop: "70px", flex: 1 }} disableGutters>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/news" element={<NewsPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/auth" element={<AuthPage />} />
				</Routes>
			</Container>
			<Footer />
		</Box>
	);
};
