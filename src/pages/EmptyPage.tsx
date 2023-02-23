import React from "react";
import { Box } from "@mui/material";

import empty from "../assets/empty.png";

export const EmptyPage = () => {
	return (
		<Box ml={40} mt={20}>
			<img src={empty} alt="empty" style={{ width: "512px", height: "512px" }} />
		</Box>
	);
};
