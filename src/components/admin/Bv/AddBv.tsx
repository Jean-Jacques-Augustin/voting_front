import {useState} from "react";
import {CustomTextField} from "../../Form/Forms";
import {Button, Grid, Typography} from "@mui/material";

export default function AddBv() {

	const [bv, setBv] = useState({
		nom: "",
		code: "",
		provinces: "",
	})

	const [errorT, setErrorT] = useState({
		nom: false,
		code: false,
		provinces: false,
	})

	const [loading, setLoading] = useState(false);

	const handleChange = (e: any) => {
		setBv({...bv, [e.target.name]: e.target.value});
	}

	const handleError = (e: any) => {
		setErrorT({...errorT, [e.target.name]: e.target.value === false});
	}

	return (
		<div>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
				padding={2}
			>
				<Grid item>
					<Typography>
						<b>Ajouter un bureau de vote</b>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField type={"text"} value={bv.nom} label={"Nom BV"} onChange={handleChange}
					                 error={errorT.nom}/>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField type={"text"} value={bv.code} label={"Code BV"} onChange={handleChange}
					                 error={errorT.code}/>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField type={"text"} value={bv.provinces} label={"Provinces"} onChange={handleChange}
					                 error={errorT.provinces}/>
				</Grid>
				<Grid item xs={12}>
					<Button size={"large"} fullWidth variant={"contained"}>Ajouter</Button>
				</Grid>
			</Grid>
		</div>
	)
}
