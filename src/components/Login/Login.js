import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

// function reducer
const emailReducer = (state, action) => {
	console.log(action.val);
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

function Login() {
	const login = useContext(AuthContext);

	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	// const [passwordState, dispa]

	// useEffect(() => {
	// 	const identifier = setTimeout(() => {
	// 		setFormIsValid(
	// 			enteredEmail.includes("@") && enteredPassword.trim().length > 6
	// 		);
	// 	}, 500);

	// 	return () => {
	// 		clearTimeout(identifier);
	// 	};
	// }, [enteredEmail, enteredPassword]);

	const emailChangeHandler = event => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
		setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
	};

	const passwordChangeHandler = event => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
		setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
		setFormIsValid(emailState.isValid);
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
		setFormIsValid(passwordState.isValid);
	};

	const submitHandler = event => {
		event.preventDefault();
		login.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					id="email"
					type="email"
					label="E-Mail"
					isValid={emailState.isValid}
					onChange={emailChangeHandler}
					value={emailState.value}
					onBlur={validateEmailHandler}
				/>
				<Input
					id="password"
					type="password"
					label="Password"
					isValid={passwordState.isValid}
					onChange={passwordChangeHandler}
					value={passwordState.value}
					onBlur={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
}

export default Login;
