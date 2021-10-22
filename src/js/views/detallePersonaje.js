import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

export const DetallePersonaje = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getPeopleDetail(theid);
	}, []);

	return (
		<Card style={{ width: "50rem" }} border="warning" className="bg-dark text-white d-flex container-fluid my-5">
			<h1>Name : {store.peopleDetail.name}</h1>
			<h3>Hair Color : {store.peopleDetail.hair_color}</h3>
			<h3>Skin Color : {store.peopleDetail.skin_color}</h3>
			<h3>Eye Color : {store.peopleDetail.eye_color}</h3>
			<h3>Height : {store.peopleDetail.height}</h3>
			<h3>Birth Year : {store.peopleDetail.birth_year}</h3>

			<div className="text-center mt-5">
				<Link to={"/personajes"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Characters
					</a>
				</Link>
			</div>
		</Card>
	);
};
