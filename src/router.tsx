import { createBrowserRouter } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage/AuthPage";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import Person from "./components/Person/Person";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

export default createBrowserRouter([
	{
		path: "/auth",
		element: <AuthPage />,
	},
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<HomePage />
			</ProtectedRoute>
		),
	},
	{
		path: "/profile",
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		),
	},
	{
		path: "/person/:id",
		element: (
			<ProtectedRoute>
				<Person />
			</ProtectedRoute>
		),
	},
]);
