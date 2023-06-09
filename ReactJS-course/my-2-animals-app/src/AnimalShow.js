import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import "./AnimalShow.css";

function AnimalShow({ type }) {
	const [clicksCount, setClicksCount] = useState(0);
	const svgMap = { bird, cat, cow, dog, gator, heart, horse };
	return (
		<div onClick={() => setClicksCount(clicksCount + 1)} className="animal-wrapper">
			<img src={svgMap[type]} alt={type} className="animal" />
			<img
				src={heart}
				alt={type}
				style={{ width: 10 + 10 * clicksCount + "px" }}
				className="heart"
			/>
		</div>
	);
}

export default AnimalShow;
