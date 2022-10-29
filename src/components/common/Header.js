import React, { useState } from 'react';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
	const [open, setOpen] = useState(false);
	const offset = -56;

	const toggleOpen = () => {
		// If viewport width is less than Bootstrap 'md' breakpoint, toggle navbar expanded
		const { innerWidth: width } = window;
		if (width < 992) {
			setOpen(!open);
		}
	};

	return (
		<Navbar expanded={open} expand="md" bg="primary" variant="dark" fixed="top">
			<Container>
				<Navbar.Brand href="https://casey-oneill.github.io/">Casey O'Neill</Navbar.Brand>
				<Navbar.Toggle onClick={toggleOpen} />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} spy offset={offset} onClick={toggleOpen} to="home">Home</Nav.Link>
						<Nav.Link as={Link} spy offset={offset} onClick={toggleOpen} to="experience">Experience</Nav.Link>
						<Nav.Link as={Link} spy offset={offset} onClick={toggleOpen} to="projects">Projects</Nav.Link>
						<Nav.Link as={Link} spy offset={offset} onClick={toggleOpen} to="contact">Contact</Nav.Link>
						<Nav.Link href={require('../../files/CaseyONeillCV.pdf')} download="CaseyONeillCV.pdf"><FontAwesomeIcon icon={solid('download')} /> CV</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="https://github.com/casey-oneill/"><FontAwesomeIcon icon={brands("github")} /></Nav.Link>
						<Nav.Link href="https://www.linkedin.com/in/caseyoneill/"><FontAwesomeIcon icon={brands("linkedin")} /></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar >
	);
};

export default Header;
