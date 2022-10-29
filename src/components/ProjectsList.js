import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Accordion, Button, Card } from 'react-bootstrap';
import { projects } from '../data/data';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

const ProjectsList = () => {
	const projectItems = projects.map((project, i) =>
		<AccordionItem eventKey={i} key={i}>
			<Accordion.Header>{project.title}</Accordion.Header>
			<Accordion.Body as={Card} border="light p-0">
				<Card.Body>
					<Card.Subtitle className="text-muted">Contributors: {project.authors}</Card.Subtitle>
					<Card.Text>{project.description}</Card.Text>
					{project.codeLink && <Button variant="outline-primary" href={project.codeLink}><FontAwesomeIcon icon={brands("github")} /> Code</Button>}{' '}
					{project.demoLink && <Button variant="outline-primary" href={project.demoLink} ><FontAwesomeIcon icon={solid("play-circle")} /> Live Demo</Button>}
				</Card.Body>
				<Card.Footer>Last updated {project.lastUpdated}</Card.Footer>
			</Accordion.Body>
		</AccordionItem>
	);

	return (
		<Accordion defaultActiveKey={0}>
			{projectItems}
		</Accordion>
	);
};

export default ProjectsList;
