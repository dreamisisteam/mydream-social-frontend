import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProtectedRouteProp {
	children: React.ReactNode;
}

export default function ProtectedRoute({ children }: IProtectedRouteProp) {
	const navigate = useNavigate();
	const [isAuth, setIsAuth] = useState<boolean>(false);
	useEffect(() => {
		const isAuth = localStorage.getItem("login");
		if (!isAuth) {
			navigate("/auth");
		} else {
			setIsAuth(true)
		}
	}, []);
	return <>{isAuth && children}</>;
}
