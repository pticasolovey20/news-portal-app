import { useAuth } from "../hooks/useAuth";

import { Navigate } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { EmptyPage } from "./EmptyPage";

export const ProfilePage = () => {
	const { isAuth } = useAuth();

	return (
		<Container>
			{isAuth ? (
				<Box>
					<EmptyPage />
				</Box>
			) : (
				<Navigate to="/" />
			)}
		</Container>
	);
};
