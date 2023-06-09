import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
	const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
	return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
	const [animals, setAnimals] = useState([]);
	return (
		<div className="animals-container">
			<button onClick={() => setAnimals([...animals, getRandomAnimal()])}>
				Add Animal
			</button>
			<div className="animals-list">
				{animals.map((animal, index) => {
					return <AnimalShow key={index} type={animal} />;
				})}
			</div>
		</div>
	);
}

export default App;
