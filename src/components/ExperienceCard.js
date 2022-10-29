import React from "react";
import { Card } from "react-bootstrap";

const ExperienceCard = (props) => {
	const { title, link, company, description, dates } = props;

	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle>
					<a href={link}>{company}</a>
				</Card.Subtitle>
				<Card.Text>
					{dates.join(', ')}
					<br />
					{description}
				</Card.Text>
			</Card.Body >
		</Card>
	);
};

export default ExperienceCard;
