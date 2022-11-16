import {Button, Dialog, Fab} from "@mui/material";
import {PropsWithChildren, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

type ModalProps = PropsWithChildren<{
	open?: boolean,
}>

export const CustomModal = ({children}: ModalProps) => {

	const [open, setOpen] = useState<boolean>(false);

	const handleClickOpen = () => {
		setOpen(!open);
	}

	return (
		<div style={{
			position: "fixed",
			bottom: "8vh",
			right: "8vh",
		}}>
			<Fab color={open ? "secondary" :"primary" } aria-label="btn-add" onClick={handleClickOpen}>
				{
					open ? <CloseIcon/> : <AddIcon/>
				}
			</Fab>
			<Dialog
				open={open}
				onClose={handleClickOpen}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{children}
			</Dialog>
		</div>
	)
}
