import React from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import cx from "clsx";
import PersonCard from "../PersonCard/PersonCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function HomePage() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h3 className='mb-4'>Возможно, вам будет интересно:</h3>
				<div className={cx(styles.list, "row")}>
					{arr.map((item) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3"  key={item}>
							<PersonCard />
						</div>
					))}
				</div>
			</main>
		</>
	);
}
