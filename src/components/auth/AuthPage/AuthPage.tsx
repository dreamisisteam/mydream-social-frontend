import React, { useState } from "react";
import RegisterForm from "../Register/RegisterForm";
import styles from "./styles.module.css";
import LoginForm from "../Login/LoginForm";

export default function AuthPage() {
	const [type, setType] = useState("login");
	return (
		<div className={styles.auth}>
			{type === "register" && <RegisterForm setType={setType} />}
			{type === "login" && <LoginForm setType={setType} />}
			
		</div>
	);
}
