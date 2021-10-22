import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

export const DetalleVehiculos = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getVehiclesDetail(theid);
	}, []);

	return (
		<Card style={{ width: "50rem" }} border="warning" className="bg-dark text-white d-flex container-fluid my-5">
			<h1>Name : {store.vehiclesDetail.name}</h1>
			<h3>Model : {store.vehiclesDetail.model}</h3>
			<h3>Manufacturer : {store.vehiclesDetail.manufacturer}</h3>
			<h3>Length : {store.vehiclesDetail.length}</h3>
			<h3>Vehicle Class : {store.vehiclesDetail.vehicle_class}</h3>
			<h3>Max atmosphering speed : {store.vehiclesDetail.max_atmosphering_speed}</h3>

			<div className="text-center mt-5">
				<Link to={"/vehiculos"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Vehicles
					</a>
				</Link>
			</div>
		</Card>
	);
};
