import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

const ContactCard = (props) => {
	const { link, icon, title, description } = props;

	return (
		<Card>
			<Card.Body>
				<h5><a href={link} className="plain-link"><FontAwesomeIcon icon={icon} /> {title}</a></h5>
				<p>{description}</p>
			</Card.Body>
		</Card>
	);
};

export default ContactCard;
