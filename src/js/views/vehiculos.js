import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { CardVehiculos } from "../component/cardVehiculos";

export const Vehiculos = () => (
	<>
		<h2 className="my-3 text-light text-center">Vehiculos</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardVehiculos />
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
