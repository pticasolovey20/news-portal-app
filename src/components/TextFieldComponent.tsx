import React from "react";
import { Box, FormControl, TextField } from "@mui/material";

interface PropsParams {
	label: string;
	type: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export const TextFieldComponent = ({ label, type, onChange, value }: PropsParams) => {
	return (
		<Box mb={3} width="100%">
			<FormControl fullWidth size="small">
				<TextField
					label={label}
					type={type}
					size="small"
					variant="outlined"
					onChange={onChange}
					value={value}
				/>
			</FormControl>
		</Box>
	);
};
