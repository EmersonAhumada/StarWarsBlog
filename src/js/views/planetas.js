import React from "react";
import { Link } from "react-router-dom";
import { CardPlanetas } from "../component/cardPlanetas";

export const Planetas = () => (
	<>
		<h2 id="titulo2" className="my-2 text-light text-center">
			Planetas
		</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPlanetas />
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
