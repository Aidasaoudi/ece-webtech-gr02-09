import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SignIn from "./sign-in";
import SignUp from "./sign-up";

import "@style/App.css";
import "@style/login.css";

export default function Login() {
	const [route, setRoute] = useState(useLocation().hash);

	useEffect(() => {
		window.location.replace(route);
	}, [route]);

	const router = () => {
		switch (route) {
			case "#/sign-up":
				return <SignUp setRoute={setRoute} />;
			default:
				return <SignIn setRoute={setRoute} />;
		}
	};

	return (
		<>
			<h1 className="center" style={{ height: 150 }}>
				In Darkness
			</h1>
			{router()}
		</>
	);
}
