import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import blackcat from "@image/black-cat.png";
import Home from "@page/home";
import Login from "@page/login/index";
import "@style/App.css";


const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default App;
