import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/redux";
import { removeUserAction } from "../store/slices/userSlice";
import { useTranslation } from "react-i18next";

import { styled, Box, AppBar, Toolbar, Typography, Button, ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
	const StyledButton = styled(Button)({
		fontSize: 17,
		letterSpacing: 1,
		color: "#fff",
		padding: "5px 10px",
	});

	const { isAuth } = useAuth();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const handleLogin = () => {
		navigate("/auth");
	};

	const handleLogout = () => {
		dispatch(removeUserAction());
		localStorage.removeItem("user");
	};

	const handleChangeLanguage = (language: string) => {
		i18n.changeLanguage(language);
		console.log(language);
	};

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<Box sx={{ display: "flex", flex: 1, gap: "20px", alignItems: "center" }}>
						<Typography variant="h6">{t("pageTitle")}</Typography>
						<ButtonGroup variant="outlined" color="inherit">
							<Button onClick={() => handleChangeLanguage("ua")}>
								{t("uaButton")}
							</Button>
							<Button onClick={() => handleChangeLanguage("en")}>
								{t("enButton")}
							</Button>
						</ButtonGroup>
					</Box>
					<Box display="flex" gap="10px">
						<Link to="/">
							<StyledButton>{t("homeButton")}</StyledButton>
						</Link>
						<Link to="/news">
							<StyledButton>{t("newsButton")}</StyledButton>
						</Link>
						<Link to="/profile">
							<StyledButton>{t("profileButton")}</StyledButton>
						</Link>
						{isAuth ? (
							<StyledButton color="inherit" variant="outlined" onClick={handleLogout}>
								{t("logoutButton")}
							</StyledButton>
						) : (
							<StyledButton color="inherit" variant="outlined" onClick={handleLogin}>
								{t("loginButton")}
							</StyledButton>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
