import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import cx from "clsx";
import styles from "./styles.module.css";
import { getUser } from "../../service";

export default function Header() {
	const [userInfo, setUserInfo] = useState<any>(null);
	const navigate = useNavigate();
	const getUserInfo = async () => {
		const login = localStorage.getItem("login");
		if (login) {
			try {
				const res = await getUser(login);
				if (res.data) {
					setUserInfo(res.data.name + " " + res.data.surname);
				}
			} catch (e) {
				console.log(e);
			}
		}
	};
	const logout = () => {
		localStorage.removeItem("login")
		navigate("/auth");
	};
	useEffect(() => {
		getUserInfo();
	}, []);
	return (
		<header className="p-3 text-black border-bottom">
			<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
				<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
					<li>
						<Link to="/" className="nav-link px-2 text-black">
							Главная
						</Link>
					</li>
					<li>
						<Link to="/profile" className="nav-link px-2 text-black">
							Профиль
						</Link>
					</li>
				</ul>
				<div className="text-end">
					<Link to="/profile" className="text-decoration-none link-dark">
						<img
							src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
							alt="avatar"
							className={cx("rounded-circle me-2", styles.avatar)}
						/>
						<span className="me-4">
							{userInfo ? userInfo : "Aнонимный пользователь"}
						</span>
					</Link>
					<Button variant="outline-primary" onClick={logout}>
						Выйти
					</Button>
				</div>
			</div>
		</header>
	);
}
