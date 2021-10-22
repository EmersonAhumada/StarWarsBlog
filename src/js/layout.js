import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Planetas } from "./views/planetas";
import { DetallePlanetas } from "./views/detallePlanetas";
import { Vehiculos } from "./views/vehiculos";
import { DetalleVehiculos } from "./views/detalleVehiculos";
import { Personajes } from "./views/personajes";
import { DetallePersonaje } from "./views/detallePersonaje";
import injectContext from "./store/appContext";
import { Navbar1 } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar1 />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/detallePlanetas/:theid">
							<DetallePlanetas />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/detallePersonaje/:theid">
							<DetallePersonaje />
						</Route>
						<Route exact path="/vehiculos">
							<Vehiculos />
						</Route>
						<Route exact path="/detalleVehiculos/:theid">
							<DetalleVehiculos />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
