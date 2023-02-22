import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/redux";
import { removeUserAction } from "../store/slices/userSlice";

import { styled, Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
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

	const handleLogin = () => {
		navigate("/auth");
	};

	const handleLogout = () => {
		dispatch(removeUserAction());
		localStorage.removeItem("user");
	};

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" sx={{ flex: 1 }}>
						NEWS PORTAL
					</Typography>
					<Box display="flex" gap="10px">
						<Link to="/">
							<StyledButton>HOME</StyledButton>
						</Link>
						<Link to="/news">
							<StyledButton>NEWS</StyledButton>
						</Link>
						<Link to="/profile">
							<StyledButton>PROFILE</StyledButton>
						</Link>
						{isAuth ? (
							<StyledButton color="inherit" variant="outlined" onClick={handleLogout}>
								Logout
							</StyledButton>
						) : (
							<StyledButton color="inherit" variant="outlined" onClick={handleLogin}>
								Login
							</StyledButton>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
