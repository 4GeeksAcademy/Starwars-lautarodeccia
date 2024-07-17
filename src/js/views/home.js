import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { CardPlanet } from "../component/cardPlanet.jsx";
import { CardVehicle } from "../component/cardVehiculos.jsx";
export const Home = () => (
	<div>
		<div className="" >
			<h1 className="text-start" style={{color: "rgb(189,153,52)", margin: "30px" }}>Characters</h1>
			<Card />
		</div>

		<div className="">
			<h1 className="text-start" style={{color: "rgb(189,153,52)", margin: "30px" }}>Planets</h1>
			 <CardPlanet />
		</div>
		<div className="">
			<h1 className="text-start" style={{color: "rgb(189,153,52)", margin: "30px" }}>Vehicles</h1>
			 <CardVehicle />
		</div>
	</div>
);
