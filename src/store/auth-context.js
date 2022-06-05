import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
	name: "Ahmat Randy",
});

export const AuthContextProvider = props => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState("Ahmat Rndy");

	useEffect(() => {
		const storedLoginInformation = localStorage.getItem("isLoggedIn");
		if (storedLoginInformation === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = () => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};
	const onLogout = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: loginHandler,
				onLogout: onLogout,
				name: name,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
