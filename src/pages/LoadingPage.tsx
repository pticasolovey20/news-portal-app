import React from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";

export const LoadingPage = () => {
	return (
		<Container
			maxWidth="md"
			sx={{
				display: "flex",
				justifyContent: "center",
				marginTop: "400px",
			}}
		>
			<Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
				<CircularProgress></CircularProgress>
				<Typography fontSize={24}>Loading</Typography>
			</Box>
		</Container>
	);
};
