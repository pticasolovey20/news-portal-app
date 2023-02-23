import { useAuth } from "../hooks/useAuth";

import { Navigate } from "react-router-dom";
import { Container, Box } from "@mui/material";

export const ProfilePage = () => {
	const { isAuth } = useAuth();

	return <Container>{isAuth ? <Box>PROFILE PAGE</Box> : <Navigate to="/" />}</Container>;
};
