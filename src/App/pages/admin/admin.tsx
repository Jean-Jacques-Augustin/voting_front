import {Box} from "@mui/material";
import "../../../styles/admin.css"
import SideBar from "../../../components/admin/SideBar";
import Bv from "./bv";
import {Route, Routes} from "react-router-dom";
import Cin from "./cin";
import Region from "./region";


export const AdminBoxItemsList = [
	{
		name: "Bureau de vote",
		images: "/images/user.png",
		path: "/admin/bv",
		description: "Gestion des utilisateurs"
	},
	{
		name: "Gestion des sondages",
		images: "/images/poll.png",
		path: "/admin/polls",
		description: "Gestion des sondages"
	},
	{
		name: "Gestion des actualités",
		images: "/images/news.png",
		path: "/admin/news",
		description: "Gestion des actualités"
	},
	{
		name: "Gestion des catégories",
		images: "/images/category.png",
		path: "/admin/categories",
		description: "Gestion des catégories"
	},
	{
		name: "Gestion des commentaires",
		images: "/images/comment.png",
		path: "/admin/comments",
		description: "Gestion des commentaires"
	},
	{
		name: "Gestion des votes",
		images: "/images/vote.png",
		path: "/admin/votes",
		description: "Gestion des votes"
	},
	{
		name: "Gestion des réponses",
		images: "/images/answer.png",
		path: "/admin/answers",
		description: "Gestion des réponses"
	},
	{
		name: "Gestion des questions",
		images: "/images/question.png",
		path: "/admin/questions",
		description: "Gestion des questions"
	}
]

const admin = () => {
	return (
		<Box sx={{display: "flex"}}>
			<SideBar/>
			<Box component={"main"} sx={{flexGrow: 1, p: 2}}>
				<Routes>
					<Route path={"/"} element={<Bv/>}/>
					{/*<Route path={"/admin/cin"} element={<Cin/>}/>*/}
					{/*<Route path={"/region"} element={<Region/>}/>*/}
				</Routes>
			</Box>
		</Box>
	)
}

export default admin;
