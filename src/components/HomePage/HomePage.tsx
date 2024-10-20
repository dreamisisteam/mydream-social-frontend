import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import cx from "clsx";
import PersonCard from "../PersonCard/PersonCard";
import { getRecommendations } from "../../service";

interface IRecommendedUser {
	username: string;
	name: string;
	surname: string;
	avatar_url: string | null;
}

export default function HomePage() {
	const [recommendations, setRecommendations] = useState<IRecommendedUser[]>(
		[]
	);
	const getUserRecommendations = async () => {
		try {
			const res = await getRecommendations();
			if (res.data) {
				setRecommendations(res.data);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getUserRecommendations();
	}, []);
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h3 className="mb-4">Возможно, вам будет интересно:</h3>
				<div className={cx(styles.list, "row")}>
					{recommendations.length > 0 &&
						recommendations.map((item) => (
							<div
								className="col-12 col-sm-6 col-md-4 col-lg-3"
								key={item.username}
							>
								<PersonCard person={item} />
							</div>
						))}
					{recommendations.length === 0 && <div>Подбираем пользователей для вас, попробуйте позже</div>}
				</div>
			</main>
		</>
	);
}
