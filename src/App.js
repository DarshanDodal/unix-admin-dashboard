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
import {
	withAuthenticator,
	AmplifyAuthenticator,
	AmplifySignUp,
} from "@aws-amplify/ui-react";
import {
	Authenticator,
	SignIn,
	SignUp,
	ConfirmSignUp,
	Greetings,
} from "aws-amplify-react";
import { useDispatch, useSelector } from "react-redux";

import "assets/css/material-dashboard-react.css?v=1.9.0";
Amplify.configure(awsExports);

const hist = createBrowserHistory();

const store = createStore(reducer);

function PrivateRoute({ children, ...rest }) {
	const [auth, setAuth] = useState(false);

	const history = useHistory();
	const isAuthenticated = () => {
		setAuth(false);

		Auth.currentSession()
			.then((response) => {
				if (response.isValid()) {
					setAuth(true);
				} else {
					redirectToLogin();
				}
			})
			.catch(() => {
				redirectToLogin();
			});
	};

	const redirectToLogin = () => {
		history.push("/login");
	};

	useEffect(() => {
		isAuthenticated();
	}, []);

	return <Route {...rest}>{auth ? children : null}</Route>;
}

const App = () => {
	const [signedIn, setSigned] = React.useState(false);
	const dispatch = useDispatch();
	const { authRefresh } = useSelector((state) => {
		return state;
	});

	React.useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(() => {
				setSigned(true);
			})
			.catch(() => {
				setSigned(false);
			});
	}, [signedIn]);

	return (
		<Router history={hist}>
			<Switch>
				{/* <Route path="/admin">
					{signedIn ? <Admin /> : <Redirect to="/login" />}
				</Route> */}
				<PrivateRoute path="/admin">
					<Admin />
				</PrivateRoute>
				<Route path="/login">
					<ThemeProvider theme={theme}>
						<Login />
					</ThemeProvider>
				</Route>

				<Redirect exact from="/" to="/admin/dashboard" />
			</Switch>
		</Router>
	);
};

export default App;
