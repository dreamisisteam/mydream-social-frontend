import React, { useState } from "react";
import styles from "./styles.module.css";
import cx from "clsx";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import HidePassword from "../../../icons/HidePassword";
import ShowPassword from "../../../icons/ShowPassword";
import { ILogin, loginUser } from "../../../service";
import { useNavigate } from "react-router-dom";

interface ILoginForm {
	setType: React.Dispatch<React.SetStateAction<string>>;
}

export default function LoginForm({ setType }: ILoginForm) {
	const [showPassword, setShowPassword] = useState(false);
	const [validated, setValidated] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity()) {
			const formData = new FormData(e.target);
			let formDataObj = Object.fromEntries(formData.entries());
			console.log("formData", formDataObj);
			formDataObj = {
				...formDataObj,
				//@ts-ignore
				username: formDataObj?.username?.replace(/\s/g, ""),
			}
			try {
				const res = await loginUser(formDataObj as unknown as ILogin);
				if (res.data) {
					localStorage.setItem("login", res.data.username);
					navigate("/");
				}
			} catch (e) {
				console.log(e);
			}
		}
		setValidated(true);
	};
	return (
		<Form
			className={cx(styles.form, "w-100")}
			onSubmit={handleSubmit}
			noValidate
			validated={validated}
		>
			<h1 className="text-center mb-4">Авторизация</h1>
			<Stack gap={4}>
				<Form.Group controlId="login.username">
					<Form.Label>Никнейм</Form.Label>
					<Form.Control
						type="text"
						placeholder="username"
						name="username"
						required
					/>
					<Form.Control.Feedback type="invalid">
						Это обязательное поле
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="login.password">
					<Form.Label>Пароль</Form.Label>
					<InputGroup>
						<Form.Control
							type={showPassword ? "text" : "password"}
							placeholder="Пароль"
							name="password"
							aria-describedby="showPassword"
							required
						/>
						<Button
							className={styles.password}
							variant="primary"
							type="button"
							id="showPassword"
							onClick={() => setShowPassword((val) => !val)}
						>
							{!showPassword && <HidePassword />}
							{showPassword && <ShowPassword />}
						</Button>
						<Form.Control.Feedback type="invalid">
							Это обязательное поле
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>
				<Button variant="primary" type="submit">
					Войти
				</Button>
			</Stack>
			<div className="mt-3 text-center">
				<span>Не зарегистрированы?</span>
				<Button variant="link" onClick={() => setType("register")}>
					Зарегистрироваться
				</Button>
			</div>
		</Form>
	);
}
