import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';

export default function PersonCard() {
	const navigate = useNavigate();
	return (
		// <Link to='/person/123890789sd7fsd' className={styles.card}>
			<Card className={styles.card}>
				<Card.Img
					variant="top"
					src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					{/* <Button variant="outline-primary me-2">
						<i className="bi bi-person-add"></i>
					</Button> */}
					<Button variant="outline-primary" onClick={() => navigate(`/person/sdfqweij`)}>Посмотреть профиль</Button>
				</Card.Body>
			</Card>
		// </Link>
	);
}
