import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import "@style/App.css";
import "@style/login.css";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submit = () => {
		console.log("OK !");
	}

	return (
		<>
			<h1 className="center" style={{height:200}}>In Darkness</h1>
			<form method="POST">
				<input
					type="text"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<input type="submit" onClick={submit} value="Sign in"/>
				<a href="#"><IoMdArrowDropright /></a>
			</form>
		</>
	);
}