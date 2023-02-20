import React from "react";
import { Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { ProfilePage } from "./pages/ProfilePage";

export const App = () => {
	return (
		<Container>
			<Box>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/news" element={<NewsPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</Box>
		</Container>
	);
};
