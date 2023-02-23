import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "60px",
				padding: "20px",
				backgroundColor: "#1976d2",
			}}
		>
			<Typography color="#fff">{t("footer").toUpperCase()}</Typography>
		</Box>
	);
};
