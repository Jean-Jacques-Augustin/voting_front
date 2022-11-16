import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {CustomModal} from "../../../components/Form/CustomModal";
import AddBv from "../../../components/admin/Bv/AddBv";

const bvData = [
	{
		id: 1,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 2,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 3,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 4,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 5,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 6,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 7,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 8,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 9,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 10,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 11,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 12,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 13,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 14,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 15,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	},
	{
		id: 16,
		code: 301,
		nom: "Tsaramandroso",
		province: "Fianarantsoa"
	}
]


const Bv = () => {
	return <div>
		<Typography variant={"h4"} sx={{
			margin: "2vh 0vh"
		}}>
			Bureau de vote et Provinces
		</Typography>

		<Paper sx={{p: 2}}>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell style={{fontWeight: "bold"}}>Identifiant</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Code</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Nom</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Provinces</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							bvData.map((item, key) =>
								<TableRow key={key}>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.code}</TableCell>
									<TableCell>{item.nom}</TableCell>
									<TableCell>{item.province}</TableCell>
								</TableRow>
							)}
					</TableBody>
				</Table>
			</TableContainer>
			<CustomModal>
				<AddBv/>
			</CustomModal>
		</Paper>

	</div>
}

export default Bv
