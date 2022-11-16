import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Container} from "@mui/material";
import Index from "./App/pages";
import {Route, Routes} from "react-router-dom";
import Voter from "./App/pages/voter";
import Admin from "./App/pages/admin/admin";
import Bv from "./App/pages/admin/bv";
import Cin from "./App/pages/admin/cin";
import Region from "./App/pages/admin/region";

function App() {
	return (
		<div className="App">
			<Navbar/>
			<div className="pages" style={{
				paddingTop: "10vh"
			}}>
				<Routes>
					<Route path="/" element={<Index/>}/>
					<Route path="/voter" element={<Voter/>}/>
					<Route path={"/admin"} element={<Admin/>}/>
				</Routes>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
