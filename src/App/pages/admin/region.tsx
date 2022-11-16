import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";


const regionData = [
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	},
	{
		id: "1",
		nom : "Haute Matsiatra",
		description : "Provinces de Fianarantsoa"
	}
]

const Region = () => {
	return (
		<div>
			<Typography>
				Listes de régions
			</Typography>

				<Paper sx={{p: 2}}>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell style={{fontWeight: "bold"}}>Identifiant</TableCell>
									<TableCell style={{fontWeight: "bold"}}>Nom</TableCell>
									<TableCell style={{fontWeight: "bold"}}>Description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									regionData.map((item, key) =>
										<TableRow key={key}>
											<TableCell>{item.id}</TableCell>
											<TableCell>{item.nom}</TableCell>
											<TableCell>{item.description}</TableCell>
										</TableRow>
									)
								}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
		</div>
	)
}

export default Region
