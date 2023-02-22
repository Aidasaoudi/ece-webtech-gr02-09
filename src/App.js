import blackcat from "./assets/images/black-cat.png";
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
				<p>The objective of the <i>In Darkness</i> project is to make accessible this often misunderstood world of hacking.</p>
				<p>This project is for educational purpose only.</p>
			</div>
		</div>
	);
}

export default App;
