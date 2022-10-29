import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/data";

const ExperiencesPage = () => {
	const experiencesItems = experiences.map((experience) =>
		<ExperienceCard {...experience} />
	);

	return (
		<Container>
			<Row>
				<Col xs={12} lg={3} className="mb-3">
					<h1>Experience</h1>
				</Col>
				<Col xs={12} lg={9}>
					<Stack gap={3}>
						{experiencesItems}
					</Stack>
				</Col>
			</Row>
		</Container>
	);
};

export default ExperiencesPage;
