import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import blackcat from "@image/black-cat.png";
import Home from "@page/home";
import SignIn from "@page/sign-in";
import "@style/App.css";


const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="sign-up" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default App;
