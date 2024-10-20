import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

interface IPersonCardProps {
	person: {
		username: string;
		name: string;
		surname: string;
		avatar_url: string | null;
	};
}

export default function PersonCard({ person }: IPersonCardProps) {
	const navigate = useNavigate();
	return (
		<Card className={styles.card}>
			<Card.Img
				variant="top"
				src={person?.avatar_url ? person?.avatar_url : "/img/stub.jpg"}
			/>
			<Card.Body>
				<Card.Title>{person.username}</Card.Title>
				<Card.Text>
					{person.name} {person.surname}
				</Card.Text>
				<Button
					className="w-100"
					variant="outline-primary"
					onClick={() => navigate(`/person/${person.username}`)}
				>
					Профиль
				</Button>
			</Card.Body>
		</Card>
	);
}
