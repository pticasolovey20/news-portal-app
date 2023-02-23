import React from "react";
import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { INews } from "../models/INews";
import { prepareDate } from "../services/prepareDate";

import { myTheme } from "../theme/myTheme";

interface PropsParams {
	item: INews;
}

export const NewsItem: React.FC<PropsParams> = ({ item }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexBasis: "374px",
				height: "400px",
				gap: "5px",
				padding: "15px",
				color: myTheme.palette.primary.contrastText,
				borderRadius: "10px",
				boxShadow: "5px 5px 10px rgba(0,0,0,0.3)",
				backgroundColor: myTheme.palette.primary.main,
				cursor: "pointer",
			}}
		>
			<Box sx={{ display: "flex" }}>
				<Typography fontSize={18}>{item.title}</Typography>
				<ClearIcon color="error" />
			</Box>
			<img src={item.urlToImage} alt={item.title} />
			<Typography align="right">{prepareDate(item.publishedAt)}</Typography>
		</Box>
	);
};
