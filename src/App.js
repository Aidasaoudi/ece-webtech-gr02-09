import blackcat from "./assets/images/black-cat.png";
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div id="blackbg"></div>
				<div id="whitebg"></div>
				<div id="makered"></div>

				<h1>In Darkness</h1>
				<img src={blackcat} />
			</header>
		</div>
	);
}

export default App;
