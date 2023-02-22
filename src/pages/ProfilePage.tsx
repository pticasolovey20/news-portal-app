import React from "react";
import { useAuth } from "../hooks/useAuth";

import { Navigate } from "react-router-dom";

export const ProfilePage = () => {
	const { isAuth } = useAuth();

	return <div>{isAuth ? <div>PROFILE PAGE</div> : <Navigate to="/" />}</div>;
};
