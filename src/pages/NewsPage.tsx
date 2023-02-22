import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNews } from "../store/slices/newsSlice";

import { Container } from "@mui/material";
import { NewsItem } from "../components/NewsItem";
import { INews } from "../models/INews";

export const NewsPage = () => {
	const dispatch = useAppDispatch();
	const { news } = useAppSelector((state) => state.newsSlice);

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	return (
		<Container sx={{ display: "flex", flexWrap: "wrap", gap: "15px", padding: "20px" }}>
			{news.map((item: INews, index) => (
				<NewsItem key={index} item={item} />
			))}
		</Container>
	);
};
