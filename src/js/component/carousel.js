import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Carousell = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<Link to="/personajes">
					<img
						className="d-block w-25 h-25 mx-auto"
						src="https://images-na.ssl-images-amazon.com/images/I/91hQwWIz00S.jpg"
						alt="Personajes"
						align="center"
					/>
					<Carousel.Caption style={{ color: "white", backgroundColor: "black" }}>
						<h3>Personajes</h3>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to="/planetas">
					<img
						className="d-block  w-25 h-25 mx-auto"
						src="https://www.purecostumes.com/mm5/graphics/infographic/Info-Star-Wars-Planets.jpg"
						alt="Planetas"
						align="center"
					/>

					<Carousel.Caption style={{ color: "white", backgroundColor: "black" }}>
						<h3>Planetas</h3>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to="/vehiculos">
					<img
						className="d-block w-25 h-25 mx-auto"
						src="https://http2.mlstatic.com/D_NQ_NP_969022-MLC44066578622_112020-O.jpg"
						alt="Vehiculos"
						align="center"
					/>
					<Carousel.Caption style={{ color: "white", backgroundColor: "black" }}>
						<h3>Vehiculos</h3>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	);
};
