import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNews } from "../store/slices/newsSlice";

import { Container, Box, Button } from "@mui/material";
import { NewsItem } from "../components/NewsItem";
import { INews } from "../models/INews";

export const NewsPage = () => {
	const [amount, setAmount] = useState(10);
	const [flag, setFlag] = useState(false);

	const dispatch = useAppDispatch();
	const { news } = useAppSelector((state) => state.newsReducer);
	const { t } = useTranslation();

	useEffect(() => {
		dispatch(fetchNews(amount));

		if (news.length > 0) setFlag(true);
		if (amount === 100) setFlag(false);
	}, [dispatch, amount, news.length]);

	const handleChangeAmount = () => {
		setAmount(amount + 10);
	};

	return (
		<Container sx={{ display: "flex", flexWrap: "wrap", gap: "15px", padding: "20px" }}>
			{news.map((item: INews, index) => (
				<NewsItem key={index} item={item} />
			))}
			{flag && (
				<Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
					<Button variant="outlined" color="inherit" onClick={handleChangeAmount}>
						{t("loadButton")}
					</Button>
				</Box>
			)}
		</Container>
	);
};
