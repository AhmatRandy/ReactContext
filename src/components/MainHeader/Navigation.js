import React from "react";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

import classes from "./Navigation.module.css";

function Navigation() {
	const context = useContext(AuthContext);
	return (
		<nav className={classes.nav}>
			<ul>
				{context.isLoggedIn && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{context.isLoggedIn && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{context.isLoggedIn && (
					<li>
						<button onClick={context.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navigation;
