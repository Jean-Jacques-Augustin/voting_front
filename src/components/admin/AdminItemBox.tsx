import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";


export type AdminItemBoxProps = {
	name: string,
	images: string,
	path?: any,
	description?: string
}

export default function AdminItemBox({images, path, name, description}: AdminItemBoxProps) {
	return (
		<Link to={path}>
			<Card sx={{maxWidth: 345}}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="120"
						image={images}
						alt={name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	)
}
