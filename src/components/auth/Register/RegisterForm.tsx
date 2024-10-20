import React, { useState } from "react";
import styles from "./styles.module.css";
import cx from "clsx";
import { Button, Form, Stack } from "react-bootstrap";
import RequiredLabel from "./RequiredLabel";
import { IRegisterData, registerUser } from "../../../service";

interface IRegisterForm {
	setType: React.Dispatch<React.SetStateAction<string>>;
}

const generalInfoKeys = [
	"name",
	"surname",
	"username",
	"telegram_link",
	"password",
];

interface IExtendableObject {
	[key: string]: any;
}

export default function RegisterForm({ setType }: IRegisterForm) {
	const [validated, setValidated] = useState(false);
	const [step, setStep] = useState<"register" | "success">("register");

	const onFormSubmit = async (e: any) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity()) {
			const formData = new FormData(e.target);
			const formDataRaw = Object.fromEntries(formData.entries());
			console.log(formDataRaw);
			const generalInfo: IExtendableObject = {};
			const interests: IExtendableObject = {};
			for (const key in formDataRaw) {
				if (generalInfoKeys.includes(key)) {
					generalInfo[key] = formDataRaw[key];
				} else {
					interests[key] = formDataRaw[key];
				}
			}
			const payload = {
				...generalInfo,
				username: generalInfo?.username?.replace(/\s/g, ""),
				interests: interests,
			};
			console.log(payload)
			try {
				const res = await registerUser(payload as IRegisterData);
				if (res.status === 204) {
					setStep("success");
				}
			} catch (e) {
				console.log(e);
			}
		}
		setValidated(true);
	};
	return (
		<>
			{step === "register" && (
				<Form
					className={cx(styles.form, "w-100")}
					onSubmit={onFormSubmit}
					noValidate
					validated={validated}
				>
					<h1 className="text-center mb-4">Регистрация</h1>
					<Stack gap={4}>
						<Form.Group controlId="register.name">
							<RequiredLabel>Имя</RequiredLabel>
							<Form.Control
								type="text"
								placeholder="Имя"
								name="name"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Это обязательное поле
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="register.surname">
							<RequiredLabel>Фамилия</RequiredLabel>
							<Form.Control
								type="text"
								placeholder="Фамилия"
								name="surname"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Это обязательное поле
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="register.username">
							<RequiredLabel>Никнейм</RequiredLabel>
							<Form.Control
								type="text"
								placeholder="Никнейм"
								name="username"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Это обязательное поле
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="register.telegram_link">
							<RequiredLabel>Telegram link</RequiredLabel>
							<Form.Control
								type="telegram_link"
								placeholder="https://t.me/username"
								name="telegram_link"
								required
								pattern="(https:\/\/|www.)((t|telegram).me)\/[a-zA-Z0-9_]{5,32}$"
							/>
							<Form.Control.Feedback type="invalid">
								Это обязательное поле
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="register.password">
							<RequiredLabel>Пароль</RequiredLabel>
							<Form.Control
								type="text"
								placeholder="Пароль"
								name="password"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Это обязательное поле
							</Form.Control.Feedback>
						</Form.Group>
						<div>
							<h5 className="mb-3">Оценим ваши предпочтения</h5>
							<span>
								Формат: оценка от 1 до 5 (где 1 - "Не интересует", а 5 - "Очень
								интересует")
							</span>
						</div>
						<Form.Group className="mb-3" controlId="register.travel">
							<Form.Label>Путешествия</Form.Label>
							<Form.Range min={1} max={5} step={1} name="travel" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.music">
							<Form.Label>Музыка</Form.Label>
							<Form.Range min={1} max={5} step={1} name="music" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.sport">
							<Form.Label>Спорт</Form.Label>
							<Form.Range min={1} max={5} step={1} name="sport" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.films">
							<Form.Label>Фильмы</Form.Label>
							<Form.Range min={1} max={5} step={1} name="films" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.student_community">
							<Form.Label>Студенческие сообщества</Form.Label>
							<Form.Range min={1} max={5} step={1} name="student_community" />
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="register.social_interaction"
						>
							<Form.Label>Общение</Form.Label>
							<Form.Range min={1} max={5} step={1} name="social_interaction" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.entertainment">
							<Form.Label>Развлечения</Form.Label>
							<Form.Range min={1} max={5} step={1} name="entertainment" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.technologies">
							<Form.Label>Технологии</Form.Label>
							<Form.Range min={1} max={5} step={1} name="technologies" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.science">
							<Form.Label>Наука</Form.Label>
							<Form.Range min={1} max={5} step={1} name="science" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="register.ai">
							<Form.Label>ИИ</Form.Label>
							<Form.Range min={1} max={5} step={1} name="ai" />
						</Form.Group>
						<Button type="submit" variant="primary">
							Зарегистрироваться
						</Button>
					</Stack>
					<div className="mt-3 text-center">
						<span>Уже есть аккаунт?</span>
						<Button variant="link" onClick={() => setType("login")}>
							Войти
						</Button>
					</div>
				</Form>
			)}
			{step === "success" && (
				<div className={cx(styles.form, "w-100")}>
					<h1 className="text-center mb-4">Вы успешно зарегистрировались!</h1>
					<p className="text-center mb-5">
						Перейдите на страницу авторизации и войдите в учетную запись
					</p>
					<Button
						variant="primary"
						className="w-100"
						onClick={() => setType("login")}
					>
						Войти
					</Button>
				</div>
			)}
		</>
	);
}
