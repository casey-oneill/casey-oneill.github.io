import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import ContactCard from "../components/ContactCard";
import { contacts } from "../data/data";

const ContactsPage = () => {
	const contactItems = contacts.map((contact, i) =>
		<ContactCard {...contact} key={i} />
	);

	return (
		<Container>
			<Row>
				<Col xs={12} lg={3} className="mb-3">
					<h1>Contact</h1>
				</Col>
				<Col xs={12} lg={9}>
					<Stack gap={3}>
						{contactItems}
					</Stack>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactsPage;
