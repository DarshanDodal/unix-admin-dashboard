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
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { reducer } from "./reducer/reducer.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Amplify, { Auth, withAuthenticator } from "aws-amplify";
import awsExports from "./aws-exports";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "views/Auth/LoginView.js";

import App from "./App";

import "assets/css/material-dashboard-react.css?v=1.9.0";
Amplify.configure(awsExports);

const hist = createBrowserHistory();

const store = createStore(reducer);
// const signedIn = false;

// const App = () => {
// 	const [signedIn, setSigned] = React.useState(false);
// 	React.useEffect(() => {
// 		Auth.currentAuthenticatedUser()
// 			.then(() => {
// 				setSigned(true);
// 			})
// 			.catch(() => {
// 				setSigned(false);
// 			});
// 	}, []);
// 	return (
// 		<Router history={hist}>
// 			<Switch>
// 				<Route
// 					path="/admin"
// 					component={() => (signedIn ? <Admin /> : <Redirect to="/login" />)}
// 				/>

// 				<Route
// 					path="/login"
// 					render={() => (
// 						<ThemeProvider theme={theme}>
// 							<Login />
// 						</ThemeProvider>
// 					)}
// 				/>
// 				<Redirect from="/" to="/admin/dashboard" />
// 				{/* <Route path="/rtl" component={RTL} /> */}
// 			</Switch>
// 		</Router>
// 	);
// };
// const TAAP = () => {
// 	return withAuthenticator(App);
// };
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
