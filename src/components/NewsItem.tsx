import React from "react";
import { useAppDispatch } from "../hooks/redux";
import { deleteNewsAction } from "../store/slices/newsSlice";

import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { INews } from "../models/INews";
import { prepareDate } from "../services/prepareDate";

import { myTheme } from "../theme/myTheme";

interface PropsParams {
	item: INews;
}

export const NewsItem: React.FC<PropsParams> = ({ item }) => {
	const dispatch = useAppDispatch();

	const handleDeleteNews = (id: string) => {
		dispatch(deleteNewsAction(id));
	};

	const fallbackSrc = "https://via.placeholder.com/220";

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "374px",
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
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography fontSize={18}>{item.title}</Typography>
				<ClearIcon color="error" onClick={() => handleDeleteNews(item.title)} />
			</Box>
			<img
				src={item.publishedAt !== null ? item.urlToImage : fallbackSrc}
				alt={item.urlToImage}
			/>
			<Typography align="right">{prepareDate(item.publishedAt)}</Typography>
		</Box>
	);
};
