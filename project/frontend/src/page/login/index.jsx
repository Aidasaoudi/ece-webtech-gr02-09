import React, { useState, useEffect } from "react";

import SignIn from "./sign-in";
import SignUp from "./sign-up";

import "@style/App.css";
import "@style/login.css";

export default function Login() {
	const [route, setRoute] = useState(null);

	useEffect(() => {
		const _onhashchange = () => {
			switch (window.location.hash) {
				case "#/sign-up":
					setRoute(<SignUp />);
					break;
				default:
					setRoute(<SignIn />);
			}
		};
		window.onhashchange = _onhashchange;
		_onhashchange();
	}, []);

	return (
		<>
			<h1 className="center" style={{ height: 150 }}>
				In Darkness
			</h1>
			{route}
		</>
	);
}
