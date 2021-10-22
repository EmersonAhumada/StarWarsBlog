import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, Navbar, Image, NavbarBrand, Container } from "react-bootstrap";
import StarWarsIMG from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar1 = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar expand="lg" className="d-flex mb-3">
			<Container>
				<NavbarBrand>
					<Link to="/">
						<Image src={StarWarsIMG} weight="80" height="80" alt="Starwars" />
					</Link>
				</NavbarBrand>
				<Dropdown>
					<DropdownButton id="dropdown-basic-button" title="Favoritos" className="ms-auto p-2">
						<Dropdown.Item>Tus Personajes</Dropdown.Item>
						{store.favouritePerson.map((favorito, posicion) => {
							return (
								<Dropdown.Item key={posicion}>
									{favorito}
									<i
										style={{ color: "red" }}
										className="fas fa-trash-alt float-right"
										onClick={() => {
											actions.deleteFavouritePerson(favorito);
										}}
									/>
								</Dropdown.Item>
							);
						})}
						<Dropdown.Divider />
						<Dropdown.Item href="#/action-2">Tus Planetas</Dropdown.Item>
						{store.favouritePlanet.map((favorito, posicion) => {
							return (
								<Dropdown.Item key={posicion}>
									{favorito}
									<i
										style={{ color: "red" }}
										className="fas fa-trash-alt float-right"
										onClick={() => {
											actions.deleteFavouritePlanet(favorito);
										}}
									/>
								</Dropdown.Item>
							);
						})}
						<Dropdown.Divider />
						<Dropdown.Item href="#/action-3">Tus Vehiculos</Dropdown.Item>
						{store.favouriteVehicle.map((favorito, posicion) => {
							return (
								<Dropdown.Item key={posicion}>
									{favorito}
									<i
										style={{ color: "red" }}
										className="fas fa-trash-alt float-right"
										onClick={() => {
											actions.deleteFavouriteVehicle(favorito);
										}}
									/>
								</Dropdown.Item>
							);
						})}
					</DropdownButton>
				</Dropdown>
			</Container>
		</Navbar>
	);
};
