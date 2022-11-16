import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

/**
 * Important : Structure de données
 * - id;
 * - nom;
 * - prenom;
 * - sexe;
 * - lieu_naissance;
 * - adresse;
 * - profession;
 * - pere;
 * - mere;
 * - photo;
 * - num_cin;
 * - date_naissance;
 * - date_delivrance;
 */

const cinData = [
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	}, {
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},
	{
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	}, {
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	}, {
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	}, {
		id: 1,
		nom: "Rakotomalala",
		prenom: "Jean Jacques Augustin",
		sexe: "M",
		lieu_naissance: "Fianarantsoa",
		adresse: "Fianarantsoa",
		profession: "Etudiant",
		pere: "Rakotomalala",
		mere: "Rakotomalala",
		photo: "https://i.imgur.com/0HwZv9p.jpg",
		num_cin: "123456789",
		date_naissance: "1999-01-01",
		date_delivrance: "2021-01-01"
	},


]

const Cin = () => {
	return <div>
		<Typography variant={"h4"} sx={{}}>
			Gestion des CIN
		</Typography>
		<Typography>
			Listes des CIN
		</Typography>


		<Paper sx={{p: 2}}>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell style={{fontWeight: "bold"}}>Num CIN</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Nom</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Prenom</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Sexe</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Adresse</TableCell>
							<TableCell style={{fontWeight: "bold"}}>Profession</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>

						{cinData.map((cin) => (
							<TableRow key={cin.id}>
								<TableCell>{cin.num_cin}</TableCell>
								<TableCell>{cin.nom}</TableCell>
								<TableCell>{cin.prenom}</TableCell>
								<TableCell>{cin.sexe}</TableCell>
								<TableCell>{cin.adresse}</TableCell>
								<TableCell>{cin.profession}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>

	</div>
}

export default Cin
