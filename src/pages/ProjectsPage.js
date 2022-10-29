import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsList from "../components/ProjectsList";

const ProjectsPage = () => {

	return (
		<Container>
			<Row>
				<Col xs={12} lg={3} className="mb-3">
					<h1>Projects</h1>
				</Col>
				<Col xs={12} lg={9}>
					<ProjectsList />
				</Col>
			</Row>
		</Container>
	);
};

export default ProjectsPage;
