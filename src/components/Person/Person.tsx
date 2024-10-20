import React from "react";
import Header from "../Header/Header";
import styles from "./styles.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import { useParams } from "react-router-dom";

export default function Person() {
	const { id } = useParams();

	if (id)
		return (
			<div className={styles.wrap}>
				<Header />
				<main className={styles.main}>
					<h3 className="mb-4">Профиль</h3>
					<ProfileInfo my={false} username={id} />
				</main>
			</div>
		);
	else
		return (
			<div className={styles.wrap}>
				<Header />
				<main className={styles.main}>
					<h3 className="mb-4">Профиль таким username не найден</h3>
				</main>
			</div>
		);
}
