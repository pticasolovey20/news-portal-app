import React from "react";
import { styled, Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
	const StyledButton = styled(Button)({
		fontSize: 17,
		letterSpacing: 1,
		color: "#fff",
		padding: "5px 10px",
	});

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
						<Link to="/auth">
							<StyledButton color="inherit" variant="outlined">
								Login
							</StyledButton>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
