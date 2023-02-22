import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "60px",
				backgroundColor: "#1976d2",
			}}
		>
			<Typography color="#fff">
				{"Its my test task for the company AlterEGO".toUpperCase()}
			</Typography>
		</Box>
	);
};
