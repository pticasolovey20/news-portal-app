import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";
import { myTheme } from "../theme/myTheme";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "60px",
				padding: "20px",
				backgroundColor: myTheme.palette.primary.main,
			}}
		>
			<Typography color="#fff">{t("footer").toUpperCase()}</Typography>
		</Box>
	);
};
