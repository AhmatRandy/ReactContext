import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
	const exit = useContext(AuthContext);
	return (
		<>
			<Card className={classes.home}>
				<h1>Welcome back!</h1>
				<h1>{exit.name}</h1>
				<Button onClick={exit.onLogout}>Logout</Button>
			</Card>
		</>
	);
};

export default Home;
