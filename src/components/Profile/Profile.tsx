import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile() {
	const [login, setLogin] = useState<string | null>(null)
	useEffect(() => {
		const loginData = localStorage.getItem('login');
		setLogin(loginData)
	}, [])
	if (login) return (
		<div className={styles.wrap}>
			<Header />
			<main className={styles.main}>
				<h3 className="mb-4">Профиль</h3>
				<ProfileInfo my username={login}/>
			</main>
		</div>
	)
	else return (
		<div className={styles.wrap}>
			<Header />
			<main className={styles.main}>
				<h3 className="mb-4">Профиль не найден</h3>
			</main>
		</div>
	)
}
