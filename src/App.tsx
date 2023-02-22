import React from "react";
import { Routes, Route } from "react-router-dom";

import { Box, Container } from "@mui/material";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthPage } from "./pages/AuthPage";
import { Footer } from "./components/Footer";

export const App = () => {
	return (
		<Box>
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
