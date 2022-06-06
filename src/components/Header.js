import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component } from 'react';
import { Link } from 'react-scroll';

const offset = -72;

class Header extends Component {
	render() {
		return (
			<nav id="navbar" className="navbar sticky-top navbar-expand-md navbar-dark bg-primary shadow">
				<div className="container">
					<Link className="navbar-brand" offset={offset} to="home">Casey O'Neill</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
						<FontAwesomeIcon icon={solid("bars")} />
					</button>

					<div className="collapse navbar-collapse justify-content-end" id="navbarContent">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" activeClass="active" spy offset={offset} to="home">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" activeClass="active" spy offset={offset} to="experience">Experience</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" activeClass="active" spy offset={offset} to="projects">Projects</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" activeClass="active" spy offset={offset} to="contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;
