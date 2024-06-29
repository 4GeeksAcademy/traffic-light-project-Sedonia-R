import React, { useState } from "react";

const Home = () => {
	const [ chooseColor, setChooseColor ] = useState("red");
	 
	return (
		<div className="container-fluid d-grid">
			<div className="cable"></div>
			<div className="container col flex-wrap">
				<div onClick={() => setChooseColor("red")} className={"red light row" + (chooseColor === "red" ? " glow-red" : "")}></div>
				<div onClick={() => setChooseColor("yellow")} className={"yellow light row" + (chooseColor === "yellow" ? " glow-yellow" : "")}></div>
				<div onClick={() => setChooseColor("green")} className={"green light row" + (chooseColor === "green" ? " glow-green" : "")}></div>
			</div>
		</div>
	);
};

export default Home;