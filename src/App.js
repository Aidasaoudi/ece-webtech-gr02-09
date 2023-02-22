import { BsGithub } from "react-icons/bs";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>In Darkness</h1>
				<div id="sign">
					<a id="sign-in" href="#">
						Sign in
					</a>
					<a id="sign-up" href="#">
						Sign up
					</a>
					<div id="sign-up-background">_</div>
				</div>
			</header>
			<div className="center">
				<p>
					The objective of the <i>In Darkness</i> project is to make accessible
					this often misunderstood world of hacking.
				</p>
				<p>This project is for educational purpose only.</p>
				<a href="https://github.com/Aidasaoudi/ece-webtech-gr02-09">
					<BsGithub size="32" />
				</a>
			</div>
			<div className="center">
				<h2>Network</h2>
				<table>
					<tr>
						<td>7</td>
						<td>Application</td>
						<td>
							Web vulnerabilities, Denial of Service attacks, Google Hacking
							etc.
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Session</td>
						<td>SSL/TLS attacks</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Transport</td>
						<td>UDP DDoS reflection</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Data link</td>
						<td>
							ARP spoofing, DNS cache poisoning, wireless networks attacks etc.
						</td>
					</tr>
				</table>
				<h2>System</h2>
				<table>
					<tr>
						<td>Binary</td>
						<td rowspan="2">Anomaly exploitation, malwares, AV evasion</td>
						<td>Side-channel attack</td>
					</tr>
					<tr>
						<td>Scripting</td>
						<td>Polymorphic and self-modifying codes</td>
					</tr>
					<tr>
						<td>High-risk vulnerabilities</td>
						<td colspan="2">RCE, LPE, SBX, VME and FCP</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default App;
