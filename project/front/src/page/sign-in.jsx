import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import "@style/App.css";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submit = () => {
		
	}

	return (
		<>
			<h1 className="center" style={{height:400}}>In Darkness</h1>
			<div className="center">
				<input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
				<input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
				<button onClick={submit}>Sign in</button>
			</div>
		</>
	);
}