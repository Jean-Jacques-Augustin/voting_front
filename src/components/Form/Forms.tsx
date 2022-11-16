import {TextField} from "@mui/material";

type TextFieldProps = {
	type: string,
	value: string,
	label: string,
	onChange: any;
	error: boolean
}

export const CustomTextField = ({onChange, label, value, type, error}: TextFieldProps) => {
	return <TextField
		type={type}
		size={"medium"}
		value={value}
		label={label}
		onChange={onChange}
		className={"custom-textfied"}
		error={error}
		helperText={error ? `Le champ ${label} est obligatoire` : ``}
		fullWidth
	/>
}
