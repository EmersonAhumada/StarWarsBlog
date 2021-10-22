import React from "react";
import { CardPersonas } from "../component/cardPersonas";
import { Link } from "react-router-dom";

export const Personajes = () => (
	<>
		<h2 id="titulo1" className="my-2 text-light text-center">
			Personajes
		</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPersonas />
			</div>
		</div>
		<div className="text-center mt-5">
			<Link to={"/"}>
				<a href="#" className="btn btn-warning text-dark">
					Back to Menu
				</a>
			</Link>
		</div>
	</>
);
