import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNews } from "../store/slices/newsSlice";

import { Container, Box, Button } from "@mui/material";
import { NewsItem } from "../components/NewsItem";
import { INews } from "../models/INews";
import { EmptyPage } from "./EmptyPage";
import { LoadingPage } from "./LoadingPage";

export const NewsPage = () => {
	const [amount, setAmount] = useState(10);

	const dispatch = useAppDispatch();
	let { news, loading } = useAppSelector((state) => state.newsReducer);
	const { t } = useTranslation();

	useEffect(() => {
		localStorage.setItem("news", JSON.stringify(news));
		dispatch(fetchNews(amount));
	}, [dispatch, amount]);

	const handleChangeAmount = () => {
		setAmount(amount + 10);
	};

	if (loading) {
		return <LoadingPage />;
	}

	if (news.length === 0) {
		return <EmptyPage />;
	}

	return (
		<Container sx={{ display: "flex", flexWrap: "wrap", gap: "15px", padding: "20px" }}>
			{news.length &&
				news.map((item: INews, index: number) => <NewsItem key={index} item={item} />)}
			{news.length > 0 && amount < 100 ? (
				<Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
					<Button variant="outlined" color="inherit" onClick={handleChangeAmount}>
						{t("loadButton")}
					</Button>
				</Box>
			) : null}
		</Container>
	);
};
