import React from "react";
import portrait from '../img/portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

const BiographyPage = () => {

	return (
		<Container className="py-5">
			<Row>
				<Col xs={12} lg={5} className="mb-5">
					<Stack className="text-center">
						<Image src={portrait} width={300} height={300} rounded className="mx-auto mb-3 d-block" alt="Portrait of Casey O'Neill." />
						<h3>Casey O'Neill</h3>
						Undergraduate Student
						<a href="https://www.unb.ca">University of New Brunswick</a>
						<a href="https://www.tourismfredericton.ca/en"><FontAwesomeIcon icon={solid('location-dot')} /> Fredericton, New Brunswick, Canada</a>
					</Stack>
				</Col>
				<Col xs={12} lg={7}>
					<Row className="mb-3">
						<h1>Hi, I'm Casey!</h1>
						<h5>
							I'm an undergraduate student at the University of New Brunswick studying computer science and philosophy.
						</h5>
						<p>
							I am currently focused on research projects, including my honours thesis and a project on robot personalities.
							I've also completed four work terms through the UNB co-op program, working as a full stack web developer.
							Outside of work, I'm a programming enthusiast who enjoys creating video games and web applications.
						</p>
						<p>
							I'm interested in designing visually engaging, interactive software for positive outcomes.
						</p>
					</Row>
					<Row>
						<Col xs={12} lg={6} className="mb-3">
							<h3>Education</h3>
							<ul>
								<li>Bachelor of Computer Science, Co-op, Honours<br /><small className="text-muted">University of New Brunswick (Expected May 2023)</small></li>
								<li>Bachelor of Arts, Philosophy<br /><small className="text-muted">University of New Brunswick (Expected May 2023)</small></li>
							</ul>
						</Col>
						<Col xs={12} lg={6}>
							<h3>Research Interests</h3>
							<ul>
								<li>Human-computer Interaction</li>
								<li>Human-robot Interaction</li>
								<li>Video Games</li>
							</ul>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default BiographyPage;
