import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";

export const CardPersonas = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.people.map((person, position) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1">
							<img
								src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/06/hipertextual-primeros-disenos-baby-yoda-the-mandalorian-eran-espantosos-2020370772.jpg?fit=1200%2C800&ssl=1"
								className="card-img-top"
							/>
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">
									Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate
									leads to suffering.
								</p>
								<Link to={"/detallePersonaje/" + person.uid}>
									<a href="#" className="btn btn-warning text-dark">
										More Info
									</a>
								</Link>

								<a href="#" className="btn btn-outline-warning float-right">
									<i
										className="fas fa-heart text-danger"
										onClick={() => {
											actions.addFavouritePerson(person.name);
										}}
									/>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
