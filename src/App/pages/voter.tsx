import {Container, Grid, Paper, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CandidatBox from "../../components/CandidatBox";


const Candidat = [
	{
		id: 1,
		name: "Moussa",
		description: "Moussa est un jeune homme de 25 ans qui a décidé de se présenter aux élections présidentielles de 2022. Il est actuellement étudiant en informatique à l'université de Paris.",
		image: "https://th.bing.com/th/id/R.8426c0da56059bb44287bf0c077cf90c?rik=QzTvsoM5oIdYTg&pid=ImgRaw&r=0"
	},
	{
		id: 2,
		name: "Moussa",
		description: "Moussa est un jeune homme de 25 ans qui a décidé de se présenter aux élections présidentielles de 2022. Il est actuellement étudiant en informatique à l'université de Paris.",
		image: "https://th.bing.com/th/id/OIP._HY_sk0uyMwNHdtCMxpeYwAAAA?pid=ImgDet&w=359&h=239&rs=1"
	},
	{
		id: 3,
		name: "Moussa",
		description: "Moussa est un jeune homme de 25 ans qui a décidé de se présenter aux élections présidentielles de 2022. Il est actuellement étudiant en informatique à l'université de Paris.",
		image: "https://th.bing.com/th/id/R.8426c0da56059bb44287bf0c077cf90c?rik=QzTvsoM5oIdYTg&pid=ImgRaw&r=0"
	},
	{
		id: 4,
		name: "Moussa",
		description: "Moussa est un jeune homme de 25 ans qui a décidé de se présenter aux élections présidentielles de 2022. Il est actuellement étudiant en informatique à l'université de Paris.",
		image: "https://th.bing.com/th/id/R.8426c0da56059bb44287bf0c077cf90c?rik=QzTvsoM5oIdYTg&pid=ImgRaw&r=0"
	}
]


export default function Voter() {
	return (

		<Container
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<div>
				<Toolbar/>
				<Typography variant="h4" component="h1" gutterBottom>
					Voter pour un candidat
				</Typography>
				<Typography paragraph>
					Vous pouvez voter pour un candidat en cliquant sur le bouton "Voter pour lui" dans la
					carte du candidat de votre choix.
					Vous pouver faire toutes les votes que vous voulez comme blanc ou nul.
				</Typography>
			</div>
			<Toolbar/>
			<Grid
				container
				justifyContent={"start"}
				alignContent={"center"}
				direction={"row"}
				spacing={2}
			>
				{
					Candidat.map((candidat, key) =>
						<Grid item xs={12} sm={6} md={4} lg={3} key={key}>
							<CandidatBox
								name={candidat.name}
								description={candidat.description}
								image={candidat.image}
								parties={"TGV"}
							/>

						</Grid>
					)
				}
			</Grid>
			<Toolbar/>
			<Paper variant={"outlined"}
			       sx={{
				       p: 2,
				       display: "flex",
				       alignContent: "center",
				       alignItems: "center",
				       justifyContent: "space-between"
			       }}>
				<Typography>
					Vous avez voté pour le candidat : <strong>Moussa</strong>
				</Typography>
				<Button>
					Valider
				</Button>
			</Paper>
		</Container>
	)
}
