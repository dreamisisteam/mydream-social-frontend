import React, { useEffect, useState } from "react";
import cx from "clsx";
import styles from "./styles.module.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getUser, IProfile } from "../../../service";

interface IProfileInfo {
	my: boolean;
	username: string;
}

export default function ProfileInfo({ my, username }: IProfileInfo) {
	const [profile, setProfile] = useState<IProfile | null>(null);
	const getProfileInfo = async () => {
		try {
			const res = await getUser(username);
			if (res.data) {
				setProfile(res.data);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getProfileInfo();
	}, [username]);
	if (profile)
		return (
			<div className={styles.info}>
				<div className={cx(styles.contacts)}>
					<img
						className={cx(styles.avatar, "rounded-circle mb-3")}
						src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
						alt="avatar"
					/>
					<div className="mb-2">
						{profile.name} {profile.surname}
					</div>
					<div className="mb-2">Никнейм: {profile.username}</div>
					<div className="mb-4">
						Telegram:{" "}
						<a href={profile.telegram_link} className="link-primary">
							{profile.telegram_link}
						</a>
					</div>
					{/* {!my && (
						<Button variant="outline-primary me-2">
							<i className="bi bi-person-add me-2"></i>
							<span>Добавить в друзья</span>
						</Button>
					)} */}
				</div>
				<div className={styles.interests}>
					<h4 className="mb-5">{my ? "Мои интересы" : "Интересуется"}</h4>
					<Row className={styles.row}>
						<Col xs={6}>
							<h6 className="mb-3">Путешествия</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="travel"
								defaultValue={profile.interests.travel}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Музыка</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="music"
								defaultValue={profile.interests.music}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Спорт</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="sport"
								defaultValue={profile.interests.sport}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Фильмы</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="films"
								defaultValue={profile.interests.films}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Студенческие сообщества</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="sudentCommunity"
								defaultValue={profile.interests.student_community}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Общение</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="socialInteraction"
								defaultValue={profile.interests.social_interaction}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Развлечения</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="entertainment"
								defaultValue={profile.interests.entertainment}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Технологии</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="technologies"
								defaultValue={profile.interests.technologies}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">Наука</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="science"
								defaultValue={profile.interests.science}
							/>
						</Col>
						<Col xs={6}>
							<h6 className="mb-3">ИИ</h6>
							<Form.Range
								disabled
								min={1}
								max={5}
								step={1}
								name="AI"
								defaultValue={profile.interests.ai}
							/>
						</Col>
					</Row>
				</div>
			</div>
		);
		return (
			<div>Профиль не найден</div>
		)
}
