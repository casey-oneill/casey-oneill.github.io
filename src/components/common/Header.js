import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			offset: -72,
		};
	}

	toggleExpanded = () => {
		// If viewport width is less than Bootstrap 'md' breakpoint, toggle navar expanded
		const { innerWidth: width } = window;
		if (width < 992) {
			const { expanded } = this.state;
			this.setState({
				expanded: !expanded,
			});
		}
	}

	render() {
		const { expanded, offset } = this.state;
		return (
			<Navbar expanded={expanded} expand="md" bg="primary" variant="dark" fixed="top">
				<Container>
					<Navbar.Brand as={Link}><Link offset={offset} onClick={this.toggleExpanded} to="home">Casey O'Neill</Link></Navbar.Brand>
					<Navbar.Toggle onClick={this.toggleExpanded} />
					<Navbar.Collapse id="navbar-nav" className="justify-content-end">
						<Nav>
							<Nav.Link as={Link}><Link spy offset={offset} onClick={this.toggleExpanded} to="home">Home</Link></Nav.Link>
							<Nav.Link as={Link}><Link spy offset={offset} onClick={this.toggleExpanded} to="experience">Experience</Link></Nav.Link>
							<Nav.Link as={Link}><Link spy offset={offset} onClick={this.toggleExpanded} to="projects">Projects</Link></Nav.Link>
							<Nav.Link as={Link}><Link spy offset={offset} onClick={this.toggleExpanded} to="contact">Contact</Link></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default Header;
