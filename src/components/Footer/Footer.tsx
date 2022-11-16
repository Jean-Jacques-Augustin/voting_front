import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const Footer = () => {
	return (
		<AppBar
			sx={{
				top: "auto",
				bottom: 0,
				height: "8vh",
				marginTop: "2vh",
				zIndex : (theme) => theme.zIndex.drawer + 1
			}}

			position={"relative"}
			color={"inherit"}
		>
			<Container>
				<Toolbar>
					<Typography
						sx={{m: "auto"}}
					>
						Jean Jacques Augustin
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Footer;
