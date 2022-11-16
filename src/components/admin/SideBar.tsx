import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import {AdminBoxItemsList} from "../../App/pages/admin/admin";


const drawerWidth = 240;

export default function SideBar() {
	return (
		<Drawer
			variant={"permanent"}
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: "border-box",
					border: 0
				}
			}}
		>
			<Toolbar/>
			<List>
				{
					AdminBoxItemsList.map((item, key) => (
						<ListItem
							key={key}
							//to={item.path}
							disablePadding
						>
							<ListItemButton>
								{/*<ListItemIcon>*/}
								{/*	{item.images}*/}
								{/*</ListItemIcon>*/}
								<ListItemText primary={item.name}/>
							</ListItemButton>
						</ListItem>
					))
				}
			</List>
		</Drawer>
	)
}
