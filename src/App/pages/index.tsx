import {Button, Grid, Typography, Container} from "@mui/material";
import img from "../../img/urban-online-voting.svg";

export default function Index() {
	return (
		<Container className="index">
			<head>
				<title>E-Sera</title>
				<meta lang="fr"/>
				<meta name="Voting" content="Site web de vote en ligne"/>
				<link rel="icon" href="/favicon.ico"/>
			</head>
			<main>
				<div
					style={{
						minHeight: "90vh",
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					<Grid
						container
						padding={2}
						justifyContent={"space-between"}
						alignContent={"center"}
						direction={"row"}
					>
						<Grid item md={6}>
							<Grid container>
								<Grid item>
									<Typography variant={"h3"}>
										Voting App
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant={"h6"}>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit.
										Amet, autem cumque inventore
										magni nobis optio qui
										reiciendis veritatis. Aliquid
										asperiores aspernatur,
										assumenda atque autem beatae
										blanditiis consequuntur
										deserunt dignissimos doloribus
										dolorum ea error esse
										exercitationem id impedit ipsa
										laboriosam mollitia natus
										neque nihil officiis pariatur
										quam quasi quo quod rem, saepe
										sequi sit sunt tempora tenetur
										unde ut vero voluptates.
									</Typography>
								</Grid>

								<Grid item>
									<Button
										disableElevation
										variant={"contained"}
										color={"primary"}
										sx={{
											textTransform: "none",
										}}
									>
										Télécharger
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={6}>
							<img
								style={{
									width: "100%",
								}}
								src={img}
								alt={"Voting brand"}
							/>
						</Grid>
					</Grid>
				</div>
			</main>
		</Container>
	);
}
