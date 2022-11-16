import * as React from "react";
import {PropsWithChildren} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


type CandidatBoxProps = PropsWithChildren<{
	name: string,
	description: string,
	image: string,
	parties: string
}>


export default function CandidatBox({name, description, image, parties}: CandidatBoxProps) {
	return (
		<Card sx={{maxWidth: 345}}>
			<CardMedia
				component="img"
				alt={description}
				height="140"
				image={image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					{parties}
				</Typography>
				<Typography variant="body2" color="text.secondary" align={"justify"}>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Voter pour lui</Button>
			</CardActions>
		</Card>
	);
}
