/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { reducer } from "./reducer/reducer.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Amplify, { Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "views/Auth/LoginView.js";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {
	Authenticator,
	SignIn,
	SignUp,
	ConfirmSignUp,
	Greetings,
} from "aws-amplify-react";

import "assets/css/material-dashboard-react.css?v=1.9.0";
Amplify.configure(awsExports);

const hist = createBrowserHistory();

const store = createStore(reducer);
// const signedIn = false;

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const history = useHistory();

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((us) => {
				console.log("US", us);
				setIsLoaded(true);
				setIsAuthenticated(true);
			})
			.catch(() => history.push("/login"));

		const unlisten = history.listen(() => {
			Auth.currentAuthenticatedUser()
				.then((user) => console.log("user: ", user))
				.catch((e) => {
					console.log("E", e);
					if (isAuthenticated) setIsAuthenticated(false);
				});
		});

		return unlisten();
	}, [history, isAuthenticated]);

	if (!isLoaded) return null;
	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				);
			}}
		/>
	);
};

const App = () => {
	// const [signedIn, setSigned] = React.useState(false);
	// React.useEffect((event) => {
	// 	Auth.currentAuthenticatedUser()
	// 		.then(() => {
	// 			setSigned(true);
	// 		})
	// 		.catch(() => {
	// 			setSigned(false);
	// 		});
	// 	event.preventDefault();
	// }, []);
	const history1 = useHistory();

	return (
		<Router history={hist}>
			<Switch>
				<PrivateRoute path="/admin/dashboard" component={Admin} />
				<Route
					path="/login"
					render={() => (
						<ThemeProvider theme={theme}>
							<Login />
						</ThemeProvider>
					)}
				/>
				<Redirect from="/" to="/admin/dashboard" />
				{/* <Route path="/rtl" component={RTL} /> */}
			</Switch>
		</Router>
	);
};

export default App;
