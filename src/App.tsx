import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createContext } from "react";

const defaultValue = {
	name: "",
	surname: "",
};

export const TestContext = createContext(defaultValue);


function App() {

	const context = {
		name: "Ellen",
		surname: "Doe",
	};

	return (
		<div className="main">
			<div className="container">
				<TestContext.Provider value={context}>
					<RouterProvider router={router} />
				</TestContext.Provider>
			</div>
		</div>
	);
}

export default App;
